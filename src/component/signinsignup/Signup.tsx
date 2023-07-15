import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10 py-5">
            <form className="card-body">
                <h2 className="card-title">Sign up</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone number</span>
                    </label>
                    <input
                        type="number"
                        placeholder="phone number"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <textarea
                        placeholder="address"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="confirm password"
                        className="input input-bordered"
                    />
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
