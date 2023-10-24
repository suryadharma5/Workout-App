import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error } = useLogin()

    const handleSubmit = async(e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className='login'>
            <h3>Log In</h3>

            <label>Email:</label>
            <input 
                type="text" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button type='submit' disabled={isLoading}>Log In</button>
            { error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Login
