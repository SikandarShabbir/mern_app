const express = require('express')
const {
    getAllWorkout,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')
const router = express.Router()

router.get('/', getAllWorkout)

router.get('/:id', getOneWorkout)

router.post('/', createWorkout)

router.patch('/:id', updateWorkout)

router.delete('/:id', deleteWorkout)

module.exports = router