import { createContext, useReducer  } from "react"

export const WorkoutContext = createContext()

export const workoutReducer = (state, action) => {
     switch(action.type){
        case 'GET_WORKOUT':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
     }
}

// agar context bs diakses oleh komponen lainnya

// children ini ngerefer ke komponen yang dibungkus oleh workoutcontextprovider
export const WorkoutContextProvider = ({children}) => {
    // useReducer terima 2 params, nama function dan initial value dari state
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    })

    // saat dispatch dipanggil, maka dispatch akan memanggil function yang ada di useReducer yaitu workoutReducer
    // dispatch({type: "SET_WORKOUT", payload: [{}, {}]})

    return(
        <WorkoutContext.Provider value={{ ...state, dispatch }}>
            { children }
        </WorkoutContext.Provider>
    )
}