import React, {useEffect, useState} from "react";
import WorkOutDetails from "../components/WorkDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts, setWorkouts] = useState([])
    useEffect(() => {
        getWorkouts()
    }, [])

    const getWorkouts = async () => {
        const response = await fetch('/workouts')
        const json = await response.json()
        setWorkouts(json.data)
    }

    const updateListing = () => {
        getWorkouts()
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