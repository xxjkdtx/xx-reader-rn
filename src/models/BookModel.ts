export interface IBookInfo {
  type: string;
  cover: string;
  progress: number;
  fileSrc: string;
}

export interface IShelfItem {
  id: string;
  title: string;
  order?: number;
  lastOpenTime: number;
  children?: Array<IShelfItem>;
  bookInfo?: IBookInfo;
}
