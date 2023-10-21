import { useEffect, useState } from 'react'
import WorkoutDetail from '../components/WorkoutDetail'

function Home() {

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkout = async () => {
            // kita ga perlu defined url karena jika tidak ada route yang tidak dikenali react, dia akan ke proxy yang ada di package.lock
            // dan mengambil address proxy yaitu localhost:4000
            try {
                const response = await fetch('/api/workout/')
                const json = await response.json()
    
                if (response.ok){
                    setWorkouts(json)
                    console.log("json")
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchWorkout()
    }, [])

    return (
        <div className='home'>
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetail key={workout._id} workout= {workout} />
                ))}
            </div>
        </div>
    )
}

export default Home
