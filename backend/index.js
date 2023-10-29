require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// import all routes
const workoutRoutes = require('./routes/workouts') // import semua routes yang ada di file workout.js
const userRoutes = require('./routes/user')

//create express app
const app = express()

app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET", "DELETE", "PATCH"],
        credentials: true
    }
))

// middleware -> aktif jika kita kirim request ke port 4000
app.use(express.json()) //akan ngeparse semua data yang dikirim

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes yang ada di workout.js akan dijalankan ketika kita hit request ke /api/workout
app.use('/api/workout', workoutRoutes)
app.use('/api/user', userRoutes )

// connect to DB => return a promise
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen to request 
        app.listen(process.env.PORT, () => {
            console.log(`'listen to port ${process.env.PORT}'`)
        })
    })
    .catch((err) => {
        console.log(err)
    })