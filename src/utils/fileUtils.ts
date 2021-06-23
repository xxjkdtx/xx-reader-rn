import RNFS from 'react-native-fs';
import { PermissionsAndroid, Platform } from 'react-native';

// const defaultPath =
//   Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;

// 获取读写权限(Android)
export const requestPromission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
      if (
        granted['android.permission.READ_EXTERNAL_STORAGE'] !==
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] !==
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        return '请求权限失败';
      }
    } catch (e) {
      console.error(e);
      return '请求权限失败';
    }
  }
};

// 判断文件是否存在
export const isExistFile = async (filePath: string) => {
  try {
    console.info('isE', filePath);
    return await RNFS.exists(filePath);
  } catch (err) {
    return false;
  }
};

// 读文件
export const readFile = (dir: string) => {
  return new Promise<string>((resolve, reject) => {
    RNFS.read(dir, 2000, 1, 'utf8')
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.error(err);
        reject('读取文件失败');
      });
  });
};

// 写文件
