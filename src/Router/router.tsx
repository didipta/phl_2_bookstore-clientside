import { createBrowserRouter } from 'react-router-dom'
import Main from '../component/Layout/Main'
import Home from '../component/Homepgae/Home'
import Signin from '../component/signinsignup/Signin'
import Signup from '../component/signinsignup/Signup'
import Allbooks from '../component/All_book/Allbooks'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/signin',
                element: <Signin />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/book',
                element: <Allbooks />,
            },
        ],
    },
])
