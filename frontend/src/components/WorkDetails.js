import {useWorkoutContext} from "../hooks/useWorkoutsContext";
import { formatDistanceToNow } from 'date-fns'

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
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span onClick={handleDelete}><i className="fa fa-trash" aria-hidden="true"/></span>
        </div>
    )
}

export default WorkOutDetails