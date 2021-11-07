import { useEffect, useState }from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import { useAuth } from '../contexts/Auth'

function PublicRoute({children, ...rest}) {
    const { setCurrentUser } = useAuth()
    const [isLogin, setLoggedIn] = useState(0)

    useEffect(() => {
        const isLoggedIn = parseInt(localStorage.getItem('loggedIn'))
        if ( isLoggedIn === 1) {
            setLoggedIn(isLoggedIn)
            setCurrentUser(1)
        }
    })
    
    if (isLogin) return <Redirect to={{pathname: '/dashboard'}} />

    return (
        <Route> 
            {children}
        </Route>
    )
}

export default PublicRoute
