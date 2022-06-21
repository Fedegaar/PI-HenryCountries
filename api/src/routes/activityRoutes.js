const { Router } = require ('express')
const router = Router();
const { Activity, Country } = require('../db')
const { v4: uuidv4 } = require ('uuid')

router.get('/', async (req, res, next) => {
    try {
        let act = await Activity.findAll({
            include: [
                {
                    model: Country    
                }
            ]
        })
        res.send(act)
    } catch (err) {
        console.log(err)
    }
})

router.post('/', async (req, res, next) => {
    const {name, difficulty, duration, season, countries} = req.body
    try {
        let newActivity = await Activity.create({  
            id: uuidv4(),      
            name,
            difficulty,
            season,
            duration
        })
        
         const promises = countries?.map(country => {   
             return new Promise (async (resolve, reject) => {
                 let countryFound = await Country.findOne({
                     where: {
                         name:country
                     }
                 })
                resolve(
                     newActivity.addCountry(countryFound)
                 )
                 reject(err => next(err)) 
             })
        
        })
        await Promise.all(promises)
        let actiResult = await Activity.findOne({
                where:{
                    id:newActivity.id
                },
                include: [
                    {
                        model: Country    
                    }
                ] 
        })
        res.send(actiResult)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res, next) =>{
    const id = req.params.id   
    try {
        let deleted = await Activity.destroy({
            where: {
                id:id
            }
        });
        return res.send('Activity succesful deleted')       
        
    } catch (err) {
        next(err)
    }
}) 

module.exports = router;