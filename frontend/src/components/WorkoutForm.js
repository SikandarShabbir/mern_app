import {useEffect, useState} from "react";

const WorkoutForm = (props) => {
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
            setError(errors)
        }
        if (response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
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
                    <p key={error.path}>{error.message}</p>
                )
            })}</div>}
        </form>
    )
}

export default WorkoutForm