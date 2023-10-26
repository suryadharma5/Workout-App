import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from "../hooks/useAuthContext"

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function WorkoutDetail({ workout }) {

    const { dispatch } = useWorkoutContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if(!user){
            return
        }

        const response = await fetch(`/api/workout/${workout._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`   
            }
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
