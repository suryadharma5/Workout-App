import { useEffect, useState } from 'react'

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
                console.log("object")
            }
        }

        fetchWorkout()
    }, [])

    return (
        <div className='home'>
            <div className="workouts">
                {workouts && workouts.map((item)=>(
                    <p key={item._id}>{item.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home
