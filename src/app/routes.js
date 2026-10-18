import {createBrowserRouter} from 'react-router-dom'
import {Layout} from './layout.jsx'
import {Home, ProductDetail} from '../modules/Products/index.js'
import {Orders} from '../modules/Orders/index.js'
import {Cart} from '../modules/Cart/index.js'
import {Favorites} from '../modules/Favorites/index.js'
import {Auth} from '../modules/Auth/index.js'
import {NotFound} from './not-found.jsx'
import {ProtectedRoute} from './protected-route.jsx'

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: NotFound,
        children: [
            {index: true, Component: Home},
            {path: 'auth', Component: Auth},
            {path: 'products/:productId', Component: ProductDetail},
            {
                Component: ProtectedRoute,
                children: [
                    {path: 'orders', Component: Orders},
                    {path: 'cart', Component: Cart},
                    {path: 'favorites', Component: Favorites},
                ]
            },
        ]
    }
])