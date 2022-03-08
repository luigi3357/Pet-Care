const { user, post, feedback } = require('./data/petCareUsersFake.js');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { User } = require('./src/db');
const { createPost, createReview } = require('./data/funcionesPreCarga.js');



conn.sync({ force: true }).then(async () => {

  try {    
    const users = await user.forEach(element => {
      User.findOrCreate({
      where:{ 
        email:element.email,
        name:element.name,
        last_name:element.last_name,
        password:element.password,
      }
      })
    });     
           
    const posts =  await post.map(e=>createPost(e)); 
    
    const reviews = await feedback.map(el=>createReview(el))

  } catch (error) {
    console.log(error)
  }
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});
