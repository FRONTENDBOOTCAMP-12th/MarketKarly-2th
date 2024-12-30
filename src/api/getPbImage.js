// export function getPbImage(item, fileName) {
//   const baseUrl = import.meta.env.VITE_PB_API;
//   const fileField = item[fileName];

//   if (Array.isArray(fileField)) {
//     // 파일 이름이 배열인 경우
//     return fileField.map(
//       (file) => `${baseUrl}/files/${item.collectionId}/${item.id}/${file}`
//     );
//   } else {
//     // 파일 이름이 단일 값인 경우
//     return `${baseUrl}/files/${item.collectionId}/${item.id}/${fileField}`;
//   }
// }

// export function getPbImage(item, fileName = 'photo') {
//   if (Array.isArray(item[fileName])) {
//     const mapData = item[fileName].map((data) => {
//       return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${
//         item.id
//       }/${data}`;
//     });

//     return mapData;
//   } else {
//     return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${
//       item.id
//     }/${item[fileName]}`;
//   }
// }

export function getPbImage(item, fileName = 'photo') {
  if (fileName !== 'photo') {
    const mapData = item[fileName].map((data) => {
      return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${
        item.id
      }/${data}`;
    });

    return mapData;
  } else {
    return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${
      item.id
    }/${item[fileName]}`;
  }
}
