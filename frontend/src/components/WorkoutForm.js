import {useEffect, useState} from "react";
import {useWorkoutContext} from "../hooks/useWorkoutsContext";

const WorkoutForm = (props) => {
    const {dispatch} = useWorkoutContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {title, load, reps}
        const response = await fetch('/workouts/', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok){
            const errors = Object.values(json.error.errors)
            setError(errors.map(e => e.message.replace('Path', '')))
        }
        if (response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            dispatch({type: 'CREATE_WORKOUT', payload: json.data})
            props.updateListing()
        }

    }
    return (
        <form onSubmit={handleSubmit} className="create">
            <h3>Add a New Workout</h3>

            <label htmlFor="">Exercise Title:</label>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>

            <label htmlFor="">Load (kg):</label>
            <input type="text" onChange={e => setLoad(e.target.value)} value={load}/>

            <label htmlFor="">Repetitions:</label>
            <input type="text" onChange={e => setReps(e.target.value)} value={reps}/>

            <button className="display-block">Save</button>

            {error && <div className="error">{error.map((error) => {
                return (
                    <p key={error}>{error}</p>
                )
            })}</div>}
        </form>
    )
}

export default WorkoutForm