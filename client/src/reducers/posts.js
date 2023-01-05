export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      // case 'FETCH_ALL':
      return [...posts, action.payload];
    //   break;

    default:
      return posts;
  }
};
// };
// // export default (posts = [], action) => {
// //   switch (action.type) {
// //     case "FETCH_ALL":
// //       return posts;
// //     case "CREATE":
// //       return posts;

// //     default:
// //       return posts;
// //   }
// // };
