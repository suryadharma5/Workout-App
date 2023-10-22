const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async(req, res) => {
    // karena mau ngambil semua dokumen maka tidak perlu mengisi kondisi di dalam {}
    const workouts = await Workout.find({}).sort({createdAt: -1}) //descending

    res.status(200).json(workouts)
}


// get a single workout
const getWorkout = async(req, res) => {
    // destructure request untuk mengambil id dari req.params (dikirim nya yang ada /:id)
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(404).json({error: "No such workout"})
    }

    return res.status(200).json(workout)
}


// create new workout
const createWorkout = async(req, res) => {
    const {title, load, reps} = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }

    if(!load){
        emptyFields.push('load')
    }

    if(!reps){
        emptyFields.push('reps')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({
            error: 'Please fill in all the fields',
            emptyFields
        })
    }

    // add data to db
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch(err) {
        res.status(400).json({error : err.message})
    } 
}

// delete a workout
const deleteWorkout = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    // method dari mongoose untuk cari data berdasarkan _id kemudian didelete
    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    return res.status(200).json(workout)

}

// update a workout
const updateWorkout = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    // parameter pertama merupakan dicari berdasarkan apa dan parameter kedua adalah apa yang mau di update
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    return res.status(200).json(workout)
}

// exports function ke route agar bisa dipakai di route
module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}