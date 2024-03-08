import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute = () => {
    const token = localStorage.getItem('Token')

    return(

        token ? <Outlet/> : <Navigate to="/" />
    )

}

export default ProtectedRoute