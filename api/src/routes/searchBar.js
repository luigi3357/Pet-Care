const { Router } = require('express');
const { Post, Op } = require('../db');
const { queryToKeywordArray, searchingMachine, foundPostsSelector } = require('../services/searchEngine');

const router = Router();

router.get('/', async (req,res,next)=>{
    try {
        if(req.query){
            const keywords = queryToKeywordArray(req.query);
            const foundPosts = await searchingMachine(keywords);
            const searchResponse = foundPostsSelector(foundPosts);
            res.send(searchResponse)            



            // const search = await Post.findAll({
            //     where: {
            //         [Op.or]: [{description: {[Op.iLike]: `%${keywords[0]}%`}}, {description: {[Op.iLike]: `%${keywords[1]}%`}}]
            //     },
            //     order: [['createdAt', 'DESC']]
            // })
           // res.send(search)
        }
    } catch (error) {
        next(error)
    }
    

})


module.exports = router;