import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Outlet, Navigate} from 'react-router-dom'

function PrivateRouter(props) {
    const context = useContext(AuthContext)
    const currentUser = context.currentUser

    return (
        <React.Fragment>
            {
                currentUser ? <Outlet/> : <Navigate to={`/Login`} />
            }
        </React.Fragment>
    )
}

export default PrivateRouter

/* div, main, section, artile, header, footer, aside - HTML Block Elements
    React Fragment => virtual react block element
*/