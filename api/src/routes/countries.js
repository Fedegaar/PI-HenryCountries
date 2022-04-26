const express = require ('express')
const axios = require ('axios')
const e = require('express')
const Country = require('../models/Country')
const router = express.Router()




router.get('/', async (req, res, next) => {
    const name = req.query
    try{
        const allApiInfo = await axios.get('https://restcountries.com/v3/all')
        const countriesInfo = await allApiInfo.data.map(e => {
            return  {     
                id : e.tld,           
                name : e.name.common,
                capital : e.capital,
                img : e.flags.map(e => e),
                continente: e.continents,
                capital: e.capital,
                poblacion: e.population,
                subregion: e.subregion,
                area: e.area,
            }
        })
        return countriesInfo;            
    }catch(e){
        console.log(e)
        return next()
    }
})



module.exports = router;


/*ID (Código de 3 letras) *
Nombre *
Imagen de la bandera *
Continente *
Capital *
Subregión
Área
Población*/