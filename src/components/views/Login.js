import {useState, useEffect} from 'react'
import { useAuth } from '../contexts/Auth'
import { useHistory } from 'react-router-dom'

function Login() {
    let [Login, setLogin] = useState(false)
    let { setCurrentUser} = useAuth()

    const history = useHistory()
    useEffect(() => {
        const loggedIn = Number(localStorage.getItem('loggedIn'))
        if(loggedIn === 1){
            setCurrentUser(loggedIn)
            setLogin(loggedIn)
        }
    })
    return (
        <div>
            <button onClick={() => {
                setCurrentUser(1)
                history.push('/dashboard')    
            }}
            >Login
            </button>
        </div>
    )
}

export default Login
