const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body
    try {
        const workout = await Workout.create({
            title, reps, load
        })
        await res.status(201).json({
            msg: "Created Successfully!",
            data: workout
        })
    }catch (e) {
        await res.status(500).json({error: e})
    }
}

const getAllWorkout = async (req, res) => {
    try {
        const workout = await Workout.find({}).sort({createdAt: -1})
        await res.status(200).json({
            msg: "Fetched Successfully!",
            data: workout
        })
    }catch (e) {
        await res.status(500).json({error: e})
    }
}

const getOneWorkout = async (req, res) => {
    const {id} = req.params
    try {
        const workout = await Workout.findById(id)
        await res.status(200).json({
            msg: "Fetched Successfully!",
            data: workout
        })
    }catch (e) {
        await res.status(500).json({error: e})
    }
}

const updateWorkout = async (req, res) => {
    console.log('...req.body', req.body);
    const {id} = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(422).json({msg: 'Record Not Found!'})
        }
        const workout = await Workout.findOneAndUpdate({_id: id}, {
            ...req.body
        })
        await res.status(201).json({
            msg: "Updated Successfully!",
            data: workout
        })
    }catch (e) {
        await res.status(500).json({error: e})
    }
}

const deleteWorkout = async (req, res) => {
    const {id} = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(422).json({msg: 'Record Not Found!'})
        }
        const workout = await Workout.findOneAndDelete({_id: id})
        await res.status(200).json({
            msg: "Deleted Successfully!",
            data: workout
        })
    }catch (e) {
        await res.status(500).json({error: e})
    }
}

module.exports = {createWorkout, getAllWorkout, getOneWorkout, updateWorkout, deleteWorkout}