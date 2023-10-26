import { useEffect } from 'react'
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import WorkoutDetail from '../components/WorkoutDetail'
import WorkoutForm from '../components/WorkoutForm'

function Home() {

    const {workouts, dispatch} = useWorkoutContext()
    const { user } = useAuthContext()

    const fetchWorkout = async () => {
        // kita ga perlu defined url karena jika tidak ada route yang tidak dikenali react, dia akan ke proxy yang ada di package.lock
        // dan mengambil address proxy yaitu localhost:4000
        try {
            const response = await fetch('/api/workout/', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if(response.ok){
                dispatch({type: 'GET_WORKOUT', payload: json})
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(user){
            fetchWorkout()
        }
    }, [dispatch, user])

    return (
        <div className='home'>
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetail key={workout._id} workout= {workout} />
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home
