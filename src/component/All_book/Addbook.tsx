/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useForm } from 'react-hook-form'
import { useAddbookMutation } from '../../redux/features/book/bookApi'
import { toast } from 'react-hot-toast'
import { useAppSelector } from '../../redux/hook'
import { useNavigate } from 'react-router-dom'

type Inputs = {
    Title: string
    Author: string
    Genre: string
    Publication_Date: Date
    postby: string
    image: string
    Reviews:[]
}
const navigate = useNavigate()
const Addbook = () => {
    const { currentUser } = useAppSelector((state):any => state.currentuser)
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const [addbook] = useAddbookMutation()
    const onSubmit = (data: Inputs) => {
        data.postby = currentUser?.user?._id;
        data.Reviews=[];
        addbook(data)
            .then((res: any) => {
                toast.success('Add book success')
                reset()
                navigate("/book")
                
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10 py-5">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="card-title">Add Book</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        {...register('Title', { required: true })}
                    />
                    {errors.Title && (
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        {...register('Author', { required: true })}
                    />
                    {errors.Author && (
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Genre Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        {...register('Genre', { required: true })}
                    />
                    {errors.Genre && (
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Publication Date</span>
                    </label>
                    <input
                        type="date"
                        placeholder="name"
                        className="input input-bordered"
                        {...register('Publication_Date', { required: true })}
                    />
                    {errors.Publication_Date && (
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">image</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        {...register('image', { required: true })}
                    />
                    {errors.image && (
                        <span className="text-xs text-red-500">
                            This field is required
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
        </div>
    )
}

export default Addbook
