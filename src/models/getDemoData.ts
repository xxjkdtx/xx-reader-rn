export const demoShelfItem = () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'aaxx1',
          title: '测试书籍1',
          lastOpenTime: 1624006799137,
          bookInfo: {
            type: 'TXT',
            progress: 1,
            fileSrc: '/storage/emulated/0/Download/归向.txt',
          },
        },
        {
          id: 'aaxx2',
          title: '测试置顶书籍',
          order: 1,
          lastOpenTime: 1624006799100,
          bookInfo: {
            type: 'TXT',
            progress: 1,
            fileSrc: 'dda',
          },
        },
        {
          id: 'aaxx3',
          title: '测试书籍2',
          lastOpenTime: 1624007198522,
          bookInfo: {
            type: 'TXT',
            progress: 1,
            fileSrc: 'dda',
          },
        },
        {
          id: 'bbxx1',
          title: '测试书架1',
          lastOpenTime: 1624007264072,
          children: [
            {
              id: 'aaxx1a',
              title: '测试书籍a1',
              lastOpenTime: 1624006799137,
              bookInfo: {
                type: 'TXT',
                progress: 1,
                fileSrc: '/storage/emulated/0/Download/归向.txt',
              },
            },
            {
              id: 'aaxx2a',
              title: '测试置顶书籍a',
              order: 1,
              lastOpenTime: 1624006799100,
              bookInfo: {
                type: 'TXT',
                progress: 1,
                fileSrc: 'dda',
              },
            },
            {
              id: 'aaxx3a',
              title: '测试书籍2a',
              lastOpenTime: 1624007198522,
              bookInfo: {
                type: 'TXT',
                progress: 1,
                fileSrc: 'dda',
              },
            },
          ],
        },
        {
          id: 'bbxx2',
          title: '测试书架2',
          lastOpenTime: 1624007311834,
          children: [
            {
              id: 'aaxx1b',
              title: '测试书籍b1',
              lastOpenTime: 1624006799137,
              bookInfo: {
                type: 'TXT',
                progress: 1,
                fileSrc: 'dda',
              },
            },
            {
              id: 'aaxx2b',
              title: '测试置顶书籍b',
              order: 1,
              lastOpenTime: 1624006799100,
              bookInfo: {
                type: 'TXT',
                progress: 1,
                fileSrc: 'dda',
              },
            },
            {
              id: 'aaxx3b',
              title: '测试书籍2b',
              lastOpenTime: 1624007198522,
              bookInfo: {
                type: 'TXT',
                progress: 1,
                fileSrc: 'dda',
              },
            },
          ],
        },
        {
          id: 'aaxx5',
          title: '测试书籍3',
          lastOpenTime: 1624006799100,
          bookInfo: {
            type: 'TXT',
            progress: 1,
            fileSrc: 'dda',
          },
        },
        {
          id: 'aaxx6',
          title: '测试书籍4',
          lastOpenTime: 1624007198522,
          bookInfo: {
            type: 'TXT',
            progress: 1,
            fileSrc: 'dda',
          },
        },
        {
          id: 'aaxx7',
          title: '测试书籍5',
          lastOpenTime: 1624006799100,
          bookInfo: {
            type: 'TXT',
            progress: 1,
            fileSrc: 'dda',
          },
        },
        {
          id: 'aaxx8',
          title: '测试书籍6',
          lastOpenTime: 1624007198522,
          bookInfo: {
            type: 'TXT',
            progress: 1,
            fileSrc: 'dda',
          },
        },
        {
          id: 'aaxx9',
          title: '测试书籍7',
          lastOpenTime: 1624006799100,
          bookInfo: {
            type: 'TXT',
            progress: 1,
            fileSrc: 'dda',
          },
        },
        {
          id: 'aaxx10',
          title: '测试书籍8',
          lastOpenTime: 1624007198522,
          bookInfo: {
            type: 'TXT',
            progress: 1,
            fileSrc: 'dda',
          },
        },
      ]);
    }, 500);
  });
};
