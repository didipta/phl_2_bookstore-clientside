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

    const storedTime = localStorage.getItem('setTime')
    if (storedTime) {
        const currentTime = new Date().getTime()
        const storedTimeMilliseconds = parseInt(storedTime, 10)
        const oneDayMilliseconds = 24 * 60 * 60 * 1000 // 1 day in milliseconds

        const timeDifference = currentTime - storedTimeMilliseconds
        if (timeDifference >= oneDayMilliseconds) {
            localStorage.removeItem('myKey')
            localStorage.removeItem('book-store')
            localStorage.removeItem('accessToken')
        } else {
            const remainingTime = oneDayMilliseconds - timeDifference
            setTimeout(() => {
                localStorage.removeItem('myKey')
                localStorage.removeItem('book-store')
                localStorage.removeItem('accessToken')
            }, remainingTime)
        }
    }

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App
