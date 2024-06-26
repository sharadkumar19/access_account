import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const GoogleAuth = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    console.log("current user", user)
    return (
        <div>
            {
                isAuthenticated ? (<button onClick={(e)=> logout()}>Logout</button>) :

                    <button onClick={(e) => loginWithRedirect()}>Login with Redirect</button>
            }
        </div>
    )
}

export default GoogleAuth
