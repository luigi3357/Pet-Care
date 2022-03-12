const { Router } = require('express');
const { User, Post, Review } = require('../db');
const { checkUUIDV } = require('../services/checkUUID');
const { infoTotalDb } = require('../services/getDb');
const { ratingUpdate } = require('../services/ratingCalculation');

const router = Router();

router.get('/:id', async (req, res, next)=>{
    const { id } = req.params;
    try {   
    if(await checkUUIDV(id)){
        const user = await User.findOne({
            where: {
                id
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
        if(user){
            res.send(user)
        }else{
            return res.status(400).send('El usuario no existe')
        }
    }else{
        return res.status(400).send('El usuario no existe')
    }
    } catch (error) {
        next(error)
    }
  })

  router.get("/", async (req, res)=>{
      const infoUser = await infoTotalDb()
      res.send(infoUser)
  })

/*         rating test          */
  router.post('/rate', async (req, res, next)=>{
        //const { email } = req.body

        const user = await ratingUpdate('sebastianguerra@gmail.com')
        console.log(user.reviews[0].id)
        res.send(user)
  })


module.exports = router;