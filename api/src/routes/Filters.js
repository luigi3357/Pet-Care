const { Router } = require('express');
const { infoPostDb, infoTotalDb } = require('../services/getDb');

const router = Router();



router.get('/orderAndFilter', async (req, res) => {
    let dataPost = await infoPostDb()
    let dataUser = await infoTotalDb()
    const {order} = req.params

//ordenamiento por rating    
    
    if(order ==="AllRating"){
      return res.send(dataPost)
    }
    if(order === "ascRating"){
     let ascendente = dataUser.sort((a, b)=>{
        if (a.rating > b.rating) return 1;
        if (a.rating < b.rating) return -1;
        return 0;
    })
    return res.send(ascendente)
    }
    if(order === "descRating"){
      let descendiente = dataUser.sort((a, b)=>{
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
        return 0;
    })
    return res.send(descendiente)
    }
    
//ordenamiento precio
    
    if(order ==="AllPrice"){
        return res.send(dataPost)
      }
      if(order === "ascPrice"){
       let ascendente = dataPost.sort((a, b)=>{
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
      })
      return res.send(ascendente)
      }
      if(order === "descPrice"){
        let descendiente = dataPost.sort((a, b)=>{
          if (a.price > b.price) return -1;
          if (a.price < b.price) return 1;
          return 0;
      })
      return res.send(descendiente)
      }

// filtrado por tamaño

    if(order==="AllTamaño"){
        res.send(dataPost)
    }
    if(order === "pequeño" || order === "mediano" || order === "grande"){
        let filtroSize = dataPost.filter(el=> el.size.toLowerCase() === size.toLowerCase())
    return res.send(filtroSize)
    }

//filtrado por tipo de mascota

    if(continente==="AllType"){
        res.send(dataPost)
    }
    if(order === "perro" || order === "gato" || order === "aves" || order === "roedores"){
        let filtroTypes = data.filter(el=> el.types.toLowerCase() === types.toLowerCase())
    return res.send(filtroTypes)
    }

})
