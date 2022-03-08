const { User, Post, Review } = require('../db');


async function infoTotalDb(){
    return await User.findAll({
        include:[{
            model: Post,
            as: 'posteos'
        },{
            model: Review,
            as: "reviews"
        }]
    })
}

async function infoPostDb(){
    return await Post.findAll({
        include:[{
            model: User,
            as: 'users'
        },{
            model: Review,
            as: "reviews"
        }]
    })
}

module.exports ={ infoTotalDb, infoPostDb }