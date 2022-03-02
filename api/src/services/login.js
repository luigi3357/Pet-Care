const bcrypt = require('bcryptjs')
const { User, Post, Feedback } = require('../db');


function verifyEmail(email){
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(email)
    return esValido
}

async function hash(password){
    let hash = await bcrypt.hash(password, 10)
    return hash
}

async function create (email,hasheador){
    let Creado = User.findOrCreate({
        where:{
            password: hasheador,
            email:email,
          }
       })
       return Creado
}

async function search (body){
    console.log(body)
   let user = await User.findOne({ body })
   return user
}

async function compare (password, user){
   let checkpass = await bcrypt.compare(password, user.password)
   return checkpass
}

module.exports={
    verifyEmail,
    hash,
    create,
    search,
    compare
}