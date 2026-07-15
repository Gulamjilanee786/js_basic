// async js

// console.log("start");
// console.log("processing");
// console.log("end");

//* setTimeout

// setTimeout(callback, timer)
// console.log("start");

// const timer_id = setTimeout(
//     (name, age) => {
//     console.log("processing", name, age);
// },
// 2000,
// "John",
// 28,
// );

//console.log(timer_id);

//clearTimeout(timer_id);

//console.log(timer_id);

//console.log("end");

//* setInterval

// let i = 0;
// const timer_id = setInterval(() => {

//     console.log(i);
//     if (i === 10) {
//         clearInterval(timer_id)
//     }
//     i++;

// }, 1000);

// console.log(timer_id);
// console.log("end");

// task

// const countDown = (second) => {

//    const timer = setInterval(() => {

//         let hours = Math.floor(second / 3600);
//         let minutes = Math.floor((second % 3600) / 60);
//         let seconds = second % 60;

//         console.log(hours + ":" + minutes + ":" + seconds);

//     if (second === 0) {
//             clearInterval(timer);
//             console.log("Time Up");
//         }

//         second--;

//     }, 1000);

// }

// countDown(3600);

//*

//* get user
// const getUser = () =>{
//  setTimeout(() => {
//     console.log("user fetched");
//     console.log( {
//         _id: 1,
//         name: "John Doe",
//         email: "john@gmail.com",
//     });

// }, 2000);
// };

// //* get user posts
// const getPosts = (userId) => {
//     setTimeout(() => {
//         console.log("posts fetched");
//         console.log([
//             {
//                 _id: 1,
//                 userId: userId,
//                 title: "Post 1",
//             },
//                  {
//                 _id: 2,
//                 userId: userId,
//                 title: "Post 2",
//             },

//         ]);

//     }, 1000)
// }

// console.log("start")
// getUser();
// getPosts(1);
// console.log("end")

// //* get user
// const getUser = (callback) =>{
//  setTimeout(() => {
//     console.log("user fetched");
//     callback({
//         _id: 10,
//         name: "John Doe",
//         email: "john@gmail.com",
//     });

// }, 2000);
// };

// //* get user posts
// const getPosts = (userId) => {
//     setTimeout(() => {
//         console.log("posts fetched");
//         console.log([
//             {
//                 _id: 1,
//                 userId: userId,
//                 title: "Post 1",
//             },
//                  {
//                 _id: 2,
//                 userId: userId,
//                 title: "Post 2",
//             },

//         ]);

//     }, 1000)
// }

// console.log("start")
// getUser((user)=> {
//     console.log(user);
//     getPosts(user._id);
// });
// console.log("end")

// //* get user
// const getUser = (callback) =>{
//  setTimeout(() => {
//     console.log("user fetched");
//     const user = {
//         _id: 10,
//         name: "John Doe",
//         email: "john@gmail.com",
//     };
//     callback({ message:"user fetch failed"}, user);

// }, 2000);
// };

// //* get user posts
// const getPosts = (userId) => {
//     setTimeout(() => {
//         console.log("posts fetched");
//         console.log([
//             {
//                 _id: 1,
//                 userId: userId,
//                 title: "Post 1",
//             },
//                  {
//                     const getPosts =(userId) =>{
//                         setTimeout(() => {
//                             -id: 2,
//                             userId: userId,
//                             title: "Post 2",
//                         },
//                     ]);
//                 },1000);
//             }

// console.log("start")
// getUser((user)=> {
//     console.log(user);
//     getPosts(user._id);
// });
// console.log("end")

// //* get user
// const getUser = (callback) => {

//     setTimeout(() => {

//         console.log("user fetched");

//         const user = {
//             _id: 10,
//             name: "John Doe",
//             email: "john@gmail.com",
//         };

//         callback(null, user);

//     }, 2000);

// };

// //* get user posts
// const getPosts = (userId) => {

//     setTimeout(() => {

//         console.log("posts fetched");

//         console.log([
//             {
//                 _id: 1,
//                 userId,
//                 title: "Post 1",
//             },
//             {
//                 _id: 2,
//                 userId,
//                 title: "Post 2",
//             }
//         ]);

//     }, 1000);

// };

// console.log("start");

// getUser((error, user) => {

//     if (error) {
//         console.log(error.message);
//         return;
//     }

//     console.log(user);

//     getPosts(user._id);

// });

// console.log("end");

// //* get user
// const getUser = (callback) =>{
//  setTimeout(() => {
//     console.log("user fetched");
//     callback({
//         _id: 10,
//         name: "John Doe",
//         email: "john@gmail.com",
//     });

// }, 2000);
// };

// //* get user posts
// const getPosts = (userId) => {
//     setTimeout(() => {
//         console.log("posts fetched");
//         console.log([
//             {
//                 _id: 1,
//                 userId: userId,
//                 title: "Post 1",
//             },
//                  {
//                 _id: 2,
//                 userId: userId,
//                 title: "Post 2",
//             },

//         ]);

//     }, 1000)
// }

// console.log("start")
// getUser((user)=> {
//     console.log(user);
//     getPosts(user._id);
// });
// console.log("end")

// //* get user
// const getUser = (callback) =>{
//  setTimeout(() => {
//     console.log("user fetched");
//     const user = {
//         _id: 10,
//         name: "John Doe",
//         email: "john@gmail.com",
//     };
//     callback({ message:"user fetch failed"}, user);

// }, 2000);
// };

// //* get user posts
// const getPosts = (userId) => {
//     setTimeout(() => {
//         console.log("posts fetched");
//         console.log([
//             {
//                 _id: 1,
//                 userId: userId,
//                 title: "Post 1",
//             },
//                  {
//                     const getPosts =(userId) =>{
//                         setTimeout(() => {
//                             -id: 2,
//                             userId: userId,
//                             title: "Post 2",
//                         },
//                     ]);
//                 },1000);
//             }

// console.log("start")
// getUser((user)=> {
//     console.log(user);
//     getPosts(user._id);
// });
// console.log("end")

// ! callback hell
//* pyramid of doom

//* promise
//* get users posts
const getPosts = (userId, callback) => {
  setTimeout(() => {
    console.log("posts fetched");
    const posts = [
      {
        _id: 1,
        userId: userId,
        title: "Post 1",
      },
      {
        _id: 2,
        userId: userId,
        title: "Post 2",
      },
    ];
    callback(null, posts);
  }, 1000);
};

const getComments = (postId, callback) => {
  setTimeout(() => {
    console.log("comments fetched");
    const comments = [
      {
        _id: 1,
        postId: postId,
        text: "Comment 1",
      },
      {
        _id: 2,
        postId: postId,
        text: "Comment 2",
      },
    ];
    callback(null, comments);
  }, 1000);
};

console.log("Start");
getUser((error, user) => {
  if (error) {
    console.log("error");
    console.log(error);
    return;
  }
  console.log(user);
  getPosts(user._id, (error, posts) => {
    if (error) {
      console.log("error");
      console.log(error);
      return;
    }

    console.log(posts);
    getComments(posts[0]._id, (error, comments) => {
      if (error) {
        console.log("error");
        console.log(error);
        return;
      }
      console.log(comments);
    });
  });
});
// getPosts(1);
console.log("end");
//! callback hell
//* pyramid of doom

//todo: promise
