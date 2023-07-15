/* eslint-disable @typescript-eslint/no-unsafe-argument */
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Router/router'
import { Provider } from 'react-redux'
import store from './redux/store'
import { useAppDispatch } from './redux/hook'
import { useEffect } from 'react'
import { setCurrentUser } from './redux/features/user/Userslice'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const user = localStorage.getItem('book-store')
        dispatch(setCurrentUser(JSON.parse(user || '{}')))
    }, [])

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App
