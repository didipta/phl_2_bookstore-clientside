/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hook'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSignupuserMutation } from '../../redux/features/user/userApi'
import { setCurrentUser } from '../../redux/features/user/Userslice'
import { toast } from 'react-hot-toast'
type Inputs = {
    Name: string
    phoneNumber: string
    address: string
    email: string
    password: string
    role: string
    confirmPassword: string
}
const Signup = () => {
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const navigate = useNavigate()

    const [signupuser] = useSignupuserMutation()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        ;(data.role = 'user'),
            signupuser(data)
                .then((res: any) => {
                    localStorage.setItem(
                        'book-store',
                        JSON.stringify(res.data.data)
                    )
                    localStorage.setItem(
                        'accessToken',
                        res.data.data.accessToken
                    )
                    localStorage.setItem(
                        'setTime',
                        new Date().getTime().toString()
                    )
                    dispatch(setCurrentUser(res.data.data))
                    navigate('/')
                })
                .catch((err) => {
                    toast.error(err.message)
                })
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10 py-5">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="card-title">Sign up</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        {...register('Name', { required: true })}
                    />
                    {errors.Name && (
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone number</span>
                    </label>
                    <input
                        type="number"
                        placeholder="phone number"
                        className="input input-bordered"
                        {...register('phoneNumber', { required: true })}
                    />
                    {errors.phoneNumber && (
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
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
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <textarea
                        placeholder="address"
                        className="input input-bordered"
                        {...register('address', { required: true })}
                    />
                    {errors.address && (
                        <span className="text-xs text-red-500">
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
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="confirm password"
                        className="input input-bordered"
                        {...register('confirmPassword', {
                            required: true,
                            validate: (value) =>
                                value === watch('password') ||
                                'The passwords do not match',
                        })}
                    />
                    {errors.confirmPassword && (
                        <span className="text-xs text-red-500">
                            {errors.confirmPassword.message}
                        </span>
                    )}
                </div>
                <div className="form-control mt-6">
                    <input
                        type="submit"
                        value="Sign up"
                        className="btn btn-neutral font-bold"
                    />
                </div>
            </form>
            <div className="card-footer">
                <div className="flex justify-center">
                    <label className="label">
                        Already have an account?
                        <Link
                            to="/signin"
                            className="label-text-alt text-base text-sky-400 font-bold ml-1"
                        >
                            Sign in
                        </Link>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Signup
