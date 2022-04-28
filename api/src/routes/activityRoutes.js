const { Router } = require ('express')
const router = Router();
const { Activity, Country } = require('../db')
const { v4: uuidv4 } = require ('uuid')


router.post('/', async (req, res, next) => {
    const {name, difficulty, duration, season} = req.body
    try {
        let newActivity = await Activity.create({  
            id: uuidv4(),      
            name,
            difficulty,
            season,
            duration
        })
        res.send(newActivity)
    } catch (err) {
        res.send(err)
    }

})

module.exports = router;