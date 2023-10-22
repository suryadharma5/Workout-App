import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

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
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetail
