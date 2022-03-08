const { Router } = require('express');
const { User, Review } = require('../db');

const router = Router();

router.get('/', async (req,res,next)=>{
    if(req.query){
        console.log(req.query)
    }
    res.send('oka')
    

})


module.exports = router;