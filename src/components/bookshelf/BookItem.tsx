import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IBookInfo } from '../../models/BookModel';

interface IBookItemProps {
  id: string;
  title: string;
  bookInfo?: IBookInfo;
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    borderColor: '#AAA',
    borderWidth: 1,
    flexGrow: 0,
    flexShrink: 1,
    width: 111.8,
    height: 164.1,
  },
  bookContent: {
    padding: 5,
  },
  cover: {
    height: '100%',
    width: '100%',
    padding: 5,
    flexGrow: 0,
    justifyContent: 'space-between',
    backgroundColor: '#EEE',
  },
  title: {
    fontSize: 15,
  },
  type: {
    fontSize: 13,
    color: '#888',
    alignSelf: 'center',
  },
  shelfCover: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  },
  shelfText: {
    textAlign: 'center',
    fontSize: 15,
  },
  shelfTitleBox: {
    backgroundColor: '#5DADE2',
  },
  shelfTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFF',
  },
});

const BookItem = (props: IBookItemProps) => {
  const { title, bookInfo } = props;
  const bookView = () => {
    if (!bookInfo) {
      return (
        <View style={styles.content}>
          <View style={styles.shelfCover}>
            <Text style={styles.shelfText}>书架</Text>
            <View style={styles.shelfTitleBox}>
              <Text style={styles.shelfTitle}>{title}</Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={[styles.content, styles.bookContent]}>
          <View style={styles.cover}>
            <Text ellipsizeMode="tail" numberOfLines={3} style={styles.title}>
              {title}
            </Text>
            <Text style={styles.type}>- {bookInfo ? bookInfo.type : ''} -</Text>
          </View>
        </View>
      );
    }
  };
  return bookView();
};

export default BookItem;
