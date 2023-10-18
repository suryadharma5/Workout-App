const express = require('express')


const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({
        msg: "GET all workout"
    })
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({
        msg: 'GET a single workout'
    })
})

router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch(err) {
        res.status(400).json({error : err.message})
    } 
})

router.delete('/:id', (req, res) => {
    res.json({
        msg: 'DELETE a workout'
    })
})

router.patch('/:id', (req, res) => {
    res.json({
        msg: 'UPDATE a  workout'
    })
})

module.exports = router