const { Router } = require('express');
const { User, Post } = require('../db');
const { checkUUIDV } = require('../services/checkUUID');
const router = Router();

router.get('/:id', async (req, res, next)=>{
    const { id } = req.params;
    try {   
    console.log(id, await checkUUIDV(id))
    if(await checkUUIDV(id)){
        const user = await User.findOne({
            where: {
                id
            },
            include: {
                model: Post,
                as: 'posteos',            
            }
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

module.exports = router;