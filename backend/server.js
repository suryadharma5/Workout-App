require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')

//create express app
const app = express()

// middleware -> aktif jika kita kirim request ke port 4000
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes yang ada di workout.js akan dijalankan ketika kita hit request ke /api/workout
app.use('/api/workout', workoutRoutes)
//listen to request 
app.listen(process.env.PORT, () => {
    console.log(`'listen to port ${process.env.PORT}'`)
})