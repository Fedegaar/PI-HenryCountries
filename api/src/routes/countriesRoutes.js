const { Router } = require ('express')
const { Country, Activity } = require('../db');
const router = Router();
const axios = require ('axios');



router.get('/', async (req, res, next) => {
    const { name } = req.query
    //[Op.iLike]: `%${name}%`   
    
        let allInfo = await axios.get('https://restcountries.com/v3/all')        
    const promises = allInfo.data?.map(e => {
        new Promise (async (resolve, reject) => {            
            resolve(
                await Country.findOrCreate({
                where:   {     
                    id : e.cca3,           
                    name : e.name.common,                    
                    img : e.flags[1],
                    continente: e.continents[0],
                    capital: e.capital ? e.capital[0] : "",
                    poblacion: e.population,
                    subregion: e.subregion || "",
                    area: e.area,
                },
            }))
            reject(err => next(err))
        })
    })
    if (!name) {
    await Promise.all(promises)    
    let allCountries = await Country.findAll()
    res.send(allCountries);
} else {    
    let searchCountry = await Country.findOne({        
        where: {
            name:name,
        },
        include:{
            model : Activity                    
        } 
    })
    // console.log("Soy el console log: ", searchCountry)
    res.json(searchCountry)
}            

});

router.get('/:code', async (req, res, next) => {
    const { code } = req.params
    let country
    if (code){
        country = await Country.findOne({
            where: {
                id:code.toUpperCase()
            },
            include: [{
                model: Activity,
                attributes: ["name", "season", "duration", "difficulty"],
              }]           
        })
        if (country){
            res.send(country)
        } else {
            res.send({message: 'No se encontro el pais'})
        }
    } else {
        country = await axios.get('https://restcountries.com/v3/alpha/'+ code)
        const countryById = {
            id : country.cca3,           
            name : country.name.common,                    
            img : country.flags[1],
            continente: country.continents[0],
            capital: country.capital ? country.capital[0] : "",
            poblacion: country.population,
            subregion: country.subregion || "",
            area: country.area,
        }
        return res.send(countryById)
    }  
});
module.exports = router;