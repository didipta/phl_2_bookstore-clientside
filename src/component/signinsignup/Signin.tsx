/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginuserMutation } from '../../redux/features/user/userApi'
import { useEffect } from 'react'
import { useAppDispatch } from '../../redux/hook'
import { setCurrentUser } from '../../redux/features/user/Userslice'
type Inputs = {
    email: string
    password: string
}

const Signin = () => {
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const navigate = useNavigate()

    const [loginuser] = useLoginuserMutation()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        loginuser(data)
            .then((res: any) => {
                localStorage.setItem(
                    'book-store',
                    JSON.stringify(res.data.data)
                )
                localStorage.setItem('accessToken', res.data.data.accessToken)
                dispatch(setCurrentUser(res.data.data))
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        const user = localStorage.getItem('book-store')
        console.log(JSON.parse(user || '{}'))
    }, [])

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-20">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="card-title">Sign in</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        {...register('email', { required: true })}
                    />
                    {errors.email && (
                        <span className=" text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        {...register('password', { required: true })}
                    />
                    {errors.password && (
                        <span className=" text-red-500">
                            This field is required
                        </span>
                    )}
                    <label className="label">
                        <a href="#" className="label-text-alt">
                            Forgot password?
                        </a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <input
                        type="submit"
                        value="Sign in"
                        className="btn btn-neutral font-bold"
                    />
                </div>
            </form>
            <div className="card-footer">
                <div className="flex justify-center">
                    <label className="label">
                        Don't have an account?
                        <Link
                            to="/signup"
                            className="label-text-alt text-base text-sky-400 font-bold ml-1"
                        >
                            Sign up
                        </Link>
                    </label>
                </div>
                <div className="flex justify-center p-2">
                    <label className="label">or sign in with</label>
                    <div className="btn-group">
                        <button className="btn btn-ghost">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                                className="w-7"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
