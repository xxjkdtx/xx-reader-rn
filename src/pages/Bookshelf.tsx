import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import { IShelfItem } from '../models/BookModel';
import { demoShelfItem } from '../models/getDemoData';
import BookItem from '../components/bookshelf/BookItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import PopShelfModal from '../components/bookshelf/PopShelfModal';
import { requestPromission } from '../utils/fileUtils';
import { useDispatch } from 'react-redux';
import { isExistFile } from '../utils/fileUtils';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/routers';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  shelfItem: {
    flexBasis: '33.33%',
    alignItems: 'center',
    paddingVertical: 15,
  },
  line: {
    height: 1,
    backgroundColor: '#BBB',
  },
  blankItem: {},
});

interface IProps {
  navigation: StackNavigationProp<ParamListBase>;
}

const Bookshelf = ({ navigation }: IProps) => {
  const [itemList, setItemList] = useState<Array<IShelfItem>>([]);
  const [popShelfVisible, setPopSHelfVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IShelfItem | null>(null);

  const dispatch = useDispatch();

  const getShelfItemList = () => {
    demoShelfItem().then((res: Array<IShelfItem>) => {
      if (res && res.length > 0) {
        res.sort((a, b) => {
          if (a.order && b.order && a.order !== b.order) {
            return a.order - b.order;
          } else {
            return a.lastOpenTime - b.lastOpenTime;
          }
        });
        setItemList(res);
      }
    });
  };

  useEffect(() => {
    requestPromission().then((res) => {
      console.info(res);
      if (res) {
        dispatch({
          message: res,
          type: 'SHOW_SNACK',
        });
      }
    });
    getShelfItemList();
  }, [dispatch]);

  const onShelfItemPress = async (item: IShelfItem) => {
    if (item.children) {
      setSelectedItem(item);
      setPopSHelfVisible(true);
    } else if (item.bookInfo) {
      console.info('open book ' + item.title);
      const isExist = await isExistFile(item.bookInfo.fileSrc);
      if (isExist) {
        navigation.push('BookReader', { bookInfo: item.bookInfo });
      } else {
        Alert.alert('文件不存在');
      }
    }
  };

  const onHidePopShelf = () => {
    setPopSHelfVisible(false);
  };

  const itemListView = () => {
    const list = itemList
      ? itemList.map((item) => {
          return (
            <View key={item.id} style={styles.shelfItem}>
              <TouchableOpacity
                onPress={() => {
                  onShelfItemPress(item);
                }}>
                <BookItem
                  id={item.id}
                  title={item.title}
                  bookInfo={item.bookInfo}
                />
              </TouchableOpacity>
              <View style={styles.line} />
            </View>
          );
        })
      : [];
    for (let i = 3; i > itemList.length % 3; i--) {
      list.push(
        <View style={styles.shelfItem} key={'blank' + i}>
          <View style={styles.blankItem} />
          <View style={styles.line} />
        </View>,
      );
    }
    return list;
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.scroll}>
        <View style={styles.content}>{itemListView()}</View>
      </ScrollView>
      <PopShelfModal
        visible={popShelfVisible}
        list={selectedItem?.children}
        title={selectedItem?.title}
        onClose={onHidePopShelf}
      />
    </SafeAreaView>
  );
};

export default Bookshelf;
