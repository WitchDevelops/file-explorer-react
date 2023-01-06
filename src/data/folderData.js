//from the test task, changed markup a bit
const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "Folder 1",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "Photos",
          isFolder: true,
          items: [],
        },
        {
          id: "4",
          name: "Assets",
          isFolder: true,
          items: [
            {
              id: "5",
              name: "photo.tmp",
              isFolder: false,
              items: [],
            },
            {
              id: "6",
              name: "data.tmp",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "7",
          name: "file.tmp",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "8",
      name: "Folder 2",
      isFolder: true,
      items: [
        {
          id: "9",
          name: "Folder 3",
          isFolder: true,
          items: [
            {
              id: "10",
              name: "data.tmp",
              isFolder: false,
              items: [],
            },
            {
              id: "11",
              name: "doc.tmp",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "12",
          name: "file.tmp",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "13",
      name: "backup.tmp",
      isFolder: false,
      items: [],
    },
    {
      id: "14",
      name: "Empty",
      isFolder: true,
      items: [],
    },
  ],
};

  export default explorer;