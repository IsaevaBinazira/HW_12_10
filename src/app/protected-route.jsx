import {useAuth} from '../modules/Auth/index.js'
import {toast} from 'sonner'
import {Navigate, Outlet} from 'react-router-dom'

export function ProtectedRoute() {

    const isAuth = useAuth((state) => state.isAuth)

    if (!isAuth) {
        toast.info('Сперва войдите')
        return <Navigate to="/auth" />
    }

    return <Outlet />
}