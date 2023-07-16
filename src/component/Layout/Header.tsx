import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { removeuse } from '../../redux/features/user/Userslice'

const Header = () => {
    const { currentUser } = useAppSelector((state) => state.currentuser)
    const dispatch = useAppDispatch()

    const logout = () => {
        localStorage.removeItem('book-store')
        localStorage.removeItem('accessToken')
        dispatch(removeuse())
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/" className=" text-base">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/book" className=" text-base">
                                    All Book
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className=" text-base">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className=" text-base">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        Book-Store
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/" className=" text-base">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/book" className=" text-base">
                                All Book
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className=" text-base">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className=" text-base">
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {currentUser?.user==undefined ? (
                        <Link to="/signin" className="btn">
                            Sign in
                        </Link>
                    ) : (
                        <button className="btn" onClick={logout}>
                            Sign out
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
