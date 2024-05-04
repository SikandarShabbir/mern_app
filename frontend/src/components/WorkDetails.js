
const WorkOutDetails = ({workout}) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>Load (kg): {workout.load}</p>
            <p>Repetitions : {workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkOutDetails