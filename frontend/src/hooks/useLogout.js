import { useAuthContext } from './useAuthContext'
import { useWorkoutContext } from './useWorkoutContext'

export const useLogout = () => {

    const { dispatch } = useAuthContext()

    // :workoutDispatch itu cuma buat dispatchnya as workoutDispatch biar ga tabrakan sama dispatch diatas
    const { dispatch: workoutDispatch } = useWorkoutContext()

    const logout = () => {
        // remove usee from local storage
        localStorage.removeItem('user')

        // invove dispatch from authcontext
        dispatch({type: 'LOGOUT'})

        // ini supaya update global contextnya si workout pas user logout biar ga nyangkut workout user tsb
        workoutDispatch({type: 'GET_WORKOUT', payload: null})
    }

    return { logout }
}