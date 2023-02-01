export default (posts = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
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
