import React, {useEffect, useState} from "react";
import WorkOutDetails from "../components/WorkDetails";
import WorkoutForm from "../components/WorkoutForm";
import {useWorkoutContext} from "../hooks/useWorkoutsContext";

const Home = () => {

    const {workouts, dispatch} = useWorkoutContext()
    useEffect(() => {
        getWorkouts()
    }, [])

    const getWorkouts = async () => {
        const response = await fetch('/workouts')
        const json = await response.json()
        dispatch({type: 'SET_WORKOUTS', payload: json.data})
    }

    const updateListing = () => {
        // getWorkouts()
    }

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => {
                    return (
                        <WorkOutDetails key={workout._id} workout={workout}/>
                    )
                })}
            </div>
            <WorkoutForm updateListing={updateListing} />
        </div>
    )
}

export default Home