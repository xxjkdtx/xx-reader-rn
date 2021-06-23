import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IBookInfo, RootStackParamList } from '../models/BookModel';
import { readFile } from '../utils/fileUtils';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

const basicStyles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },
});

interface IProp {
  navigation: StackNavigationProp<RootStackParamList, 'BookReader'>;
  route: RouteProp<RootStackParamList, 'BookReader'>;
}

const BookReader = (props: IProp) => {
  const [book, setBook] = useState('');
  const [bookInfo, setBookInfo] = useState<IBookInfo>();
  useEffect(() => {
    const info = props.route.params.bookInfo;
    setBookInfo(info);
    if (info && info.fileSrc) {
      readFile(info.fileSrc).then((res) => {
        setBook(res);
      });
    }
  }, [props]);
  return (
    <View style={basicStyles.main}>
      <Text>{bookInfo?.progress}</Text>
      <Text>{book}</Text>
    </View>
  );
};

export default BookReader;
