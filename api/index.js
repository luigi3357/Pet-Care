const { user, post, feedback } = require('./data/petCareUsersFake.js');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { User } = require('./src/db');
const { createPost, createReview } = require('./data/funcionesPreCarga.js');



conn.sync({ force: true }).then(async () => {

  try {    
    const users = user.forEach(element => {
       User.findOrCreate({
      where:{ 
        email:element.email,
        name:element.name,
        last_name:element.last_name,
        password:element.password,
      }
      })
    });     
           
<<<<<<< HEAD
    const posts =  await post.map(e=>createPost(e)); 
    
    const reviews = await feedback.map(el=>createReview(el))
=======
    const posts = post.map(e=> createPost(e)); 
    
    const reviews = feedback.map(el=> createReview(el))
>>>>>>> c01e7c5032c0a9b77880ce3546a983e07f0d989a

  } catch (error) {
    console.log(error)
  }
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});
