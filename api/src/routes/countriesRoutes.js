const { Router } = require ('express')
const { Op } = require ('sequelize')
const { Country, Activity } = require('../db');
const router = Router();
const axios = require ('axios');



router.get('/', async (req, res, next) => {
    const { name } = req.query      
    
        let allInfo = await axios.get('https://restcountries.com/v3/all')        
        const promises = allInfo.data?.map(e => {
        new Promise (async (resolve, reject) => {            
            resolve(
                await Country.findOrCreate({
                where:   {     
                    id : e.cca3,           
                    name : e.name.common,                    
                    img : e.flags[1],
                    continent: e.continents[0],
                    capital: e.capital ? e.capital[0] : "",
                    population: e.population,
                    subregion: e.subregion || "",
                    area: e.area,
                },
            }))
            reject(err => next(err))
        })
    })
    await Promise.all(promises)    
    if (!name) {
        let allCountries = await Country.findAll()
        res.send(allCountries);
    } else { 
        try{   
        let searchCountry = await Country.findAll({        
            where: {
                name:{
                [Op.iLike]: `%${name}%` 
            }
            },
            include:{
                model : Activity                    
            } 
        })
        if (searchCountry.length){
            res.send(searchCountry)
        } else {
            res.send({message: 'Country not found'})
        }
     
        } catch (err){
            next(err)
        }
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
            res.send({message: 'Country not found'})
        }
    } else {
        country = await axios.get('https://restcountries.com/v3/alpha/'+ code)
        const countryById = {
            id : country.cca3,           
            name : country.name.common,                    
            img : country.flags[1],
            continente: country.continents[0],
            capital: country.capital ? country.capital[0] : "",
            population: country.population,
            subregion: country.subregion || "",
            area: country.area,
        }
        return res.send(countryById)
    }  
});
module.exports = router;