import { useAuthContext } from './useAuthContext'

export const useLogout = () => {

    const { dispatch } = useAuthContext()

    const logout = () => {
        // remove usee from local storage
        localStorage.removeItem('user')

        // invove dispatch from authcontext
        dispatch({type: 'LOGOUT'})
    }

    return { logout }
}