import { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()

        console.log(email, password)
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

            <button type='submit'>Log In</button>
        </form>
    )
}

export default Login
