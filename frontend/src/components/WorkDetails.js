import {useWorkoutContext} from "../hooks/useWorkoutsContext";

const WorkOutDetails = ({workout}) => {
    const {dispatch} = useWorkoutContext()
    const handleDelete = async () => {
        const response = await fetch(`/workouts/${workout._id}`,{
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_WORKOUTS', payload: json.data})
        }
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>Load (kg): {workout.load}</p>
            <p>Repetitions : {workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleDelete}>Delete</span>
        </div>
    )
}

export default WorkOutDetails