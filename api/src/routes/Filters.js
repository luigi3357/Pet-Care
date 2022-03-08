const { Router } = require('express');
const { infoTotalDb } = require('../services/getDb');
infoTotalDb


const router = Router();

router.get('/orderAndFilter', async (req, res) => {
    let data = await infoDb()
    const {order} = req.params

//ordenamiento por rating    
    
    if(order ==="AllRating"){
      return res.send(data)
    }
    if(order === "ascRating"){
     let ascendente = data.sort((a, b)=>{
        if (a.rating > b.rating) return 1;
        if (a.rating < b.rating) return -1;
        return 0;
    })
    return res.send(ascendente)
    }
    if(order === "descRating"){
      let descendiente = data.sort((a, b)=>{
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
        return 0;
    })
    return res.send(descendiente)
    }
    
//ordenamiento precio
    
    if(order ==="AllPrice"){
        return res.send(data)
      }
      if(order === "ascPrice"){
       let ascendente = data.sort((a, b)=>{
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
      })
      return res.send(ascendente)
      }
      if(order === "descPrice"){
        let descendiente = data.sort((a, b)=>{
          if (a.price > b.price) return -1;
          if (a.price < b.price) return 1;
          return 0;
      })
      return res.send(descendiente)
      }

// filtrado por tamaño

    if(continente==="AllTamaño"){
        res.send(data)
    }
    if(order === "pequeño" || order === "mediano" || order === "grande"){
        let filtroSize = data.filter(el=> el.size.toLowerCase() === size.toLowerCase())
    return res.send(filtroSize)
    }

//filtrado por tipo de mascota

    if(continente==="AllTipo"){
        res.send(data)
    }
    if(order === "perro" || order === "gato" || order === "aves" || order === "roedores"){
        let filtroTypes = data.filter(el=> el.types.toLowerCase() === types.toLowerCase())
    return res.send(filtroTypes)
    }

})
