
<<<<<<< HEAD
// const { User, Post, Review } = require('../src/db');


//  async function createPost (posteos){
//     try{
//         const {title, description, email} = posteos;

//         const user = User.findOne({
//             where: {
//                 email
//             },
//             include: [{
//                 model: Post,
//                 as: 'posteos',            
//             },
//             {
//                 model: Review,
//                 as: "reviews"
//             }]
//         });
//         const newPost = await Post.create({
//             title,
//             description,
//             author_id: user.id
//         })
=======
 const { User, Post, Review } = require('../src/db');


 async function createPost (posteos){
    try{
        const {title, description, email, type, size} = posteos;

        const user = User.findOne({
            where: {
                email
            },
            include: [{
                model: Post,
                as: 'posteos',            
            },
            {
                model: Review,
                as: "reviews"
            }]
        });
        const newPost = await Post.create({
            title,
            description,
            author_id: user.id,
            type,
            size
        })
>>>>>>> de5df45d42db6bac1cf293a1008c7af4594bf18c
      
//     }catch(error){
//        console.error(error)
//     }
//   }

//   async function createReview(reviews){      
//     const {message, rate, email1, email2} = reviews;
//     const user1 = await User.findOne({
//         where: {
//             email: email1
//         },
//         include: [{
//             model: Post,
//             as: 'posteos',            
//         },
//         {
//             model: Review,
//             as: "reviews"
//         }]
//     });
//     const user2 = await User.findOne({
//         where: {
//             email: email2
//         },
//         include: [{
//             model: Post,
//             as: 'posteos',            
//         },
//         {
//             model: Review,
//             as: "reviews"
//         }]
//     });
//     const newReview = await Review.create({
//         from_id:user2.id,
//         message,
//         rate,
//         reviewedUser_id:user1.id
//     })
//   }
// module.exports={
//     createPost,
//     createReview
// }
