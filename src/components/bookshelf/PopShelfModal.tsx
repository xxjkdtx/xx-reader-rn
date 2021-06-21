import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Modal } from 'react-native-paper';

import BookItem from './BookItem';
import { IShelfItem } from '../../models/BookModel';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '80%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  content: {
    backgroundColor: '#FFF',
    width: '100%',
    flex: 1,
  },
  titleBox: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: '#FFF',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  shelfItem: {
    flexBasis: '33.33%',
    alignItems: 'center',
    paddingVertical: 15,
  },
});

interface IModalProps {
  list?: Array<IShelfItem>;
  visible: boolean;
  title?: string;
  onClose: () => void;
}

const PopShelfModal = (props: IModalProps) => {
  const { title, list, visible, onClose } = props;
  const [currentTitle, setCurrentTitle] = useState<string>('');

  useEffect(() => {
    setCurrentTitle(title || '');
  }, [title]);

  const onHidePopShelf = () => {
    onClose();
  };

  const onShelfItemPress = (item: IShelfItem) => {
    if (item.bookInfo) {
      console.info('open book ' + item.title);
    }
  };

  const itemListView = () => {
    const showList = list
      ? list.map((item) => {
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
            </View>
          );
        })
      : [];
    return showList;
  };

  return (
    <Modal
      visible={visible}
      onDismiss={onHidePopShelf}
      contentContainerStyle={styles.main}>
      <View style={styles.titleBox}>
        <TextInput
          maxLength={15}
          style={styles.title}
          value={currentTitle}
          onChangeText={(text) => {
            setCurrentTitle(text);
          }}
        />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.scroll}>
          <View style={styles.scrollContent}>{itemListView()}</View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default PopShelfModal;
