import { createBrowserRouter } from 'react-router-dom'
import Main from '../component/Layout/Main'
import Home from '../component/Homepgae/Home'
import Signin from '../component/signinsignup/Signin'
import Signup from '../component/signinsignup/Signup'
import Allbooks from '../component/All_book/Allbooks'
import Addbook from '../component/All_book/Addbook'
import Book from '../component/All_book/Book'
import Privateroute from './Privateroute'

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
            {
                path: '/book/addbook',
                element:<Privateroute><Addbook /></Privateroute>,
            },
            {
                path: '/book/details/:id',
                element: <Book />,
            },
        ],
    },
])
