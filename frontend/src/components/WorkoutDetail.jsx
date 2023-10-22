import { useWorkoutContext } from '../hooks/useWorkoutContext'

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function WorkoutDetail({ workout }) {

    const { dispatch } = useWorkoutContext()

    const handleClick = async () => {
        const response = await fetch(`/api/workout/${workout._id}`, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        <div className='workout-details'>
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): {workout.load}</strong></p>
            <p><strong>Reps: {workout.reps}</strong></p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetail
