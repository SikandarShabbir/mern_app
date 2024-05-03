require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

const app = express()
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.method, req.path)
    next()
})

app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.DB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening port ${process.env.PORT}`);
        });
    })
    .catch(error => {
        console.log('error', error)
    })