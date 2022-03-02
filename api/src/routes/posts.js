const { Router } = require('express');
const { User, Post } = require('../db')

const router = Router();


router.get('/all', async (req, res, next)=>{
    try {
        const posts = await Post.findAll({
            include: {
                model: User,
                as: "author"
            }
        });
        res.status(200).send(posts)
        
    } catch (error) {
        next(error)
    }
  })

router.post('/create', async (req, res, next)=>{
    try{
        const {title, description, author_id} = req.body;
        if (!title || !description ){
            res.status(400).send('Su publicacion debe tener un titulo y descripcion')
        }
        const newPost = await Post.create({
            title,
            description,
            author_id
        })
        res.status(201).send('Publicación creada con éxito')
    }catch(error){
        res.send(error)
    }
  })

module.exports = router;