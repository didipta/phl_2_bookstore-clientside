/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hook'
import { ReactNode } from 'react';
import { Navigate, useLocation} from 'react-router-dom'
interface IProps {
  children: ReactNode;
}
const Privateroute = ({ children }: IProps) => {
    const { currentUser } = useAppSelector((state) => state.currentuser)
    const { pathname } = useLocation()

    const [isLoading, setIsLoading] = useState(true)
    console.log(useAppSelector((state) => state.currentuser))
    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            setIsLoading(false)
        }
    }, [])
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!currentUser) {
        return <Navigate to="/signin" state={{ path: pathname }} />
    }

    return children
}

export default Privateroute
