import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-20">
        <form className="card-body">
            <h2 className="card-title">Sign in</h2>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" />
            <label className="label">
                <a href="#" className="label-text-alt">
                Forgot password?
                </a>
            </label>
            </div>
          
            <div className="form-control mt-6">
            <input type="submit" value="Sign in" className="btn btn-neutral font-bold" />
            </div>
            </form>
            <div className="card-footer">
            <div className="flex justify-center">
            <label className="label">
                Don't have an account?<Link to="/signup" className="label-text-alt text-base text-sky-400 font-bold ml-1">
                Sign up
            </Link>
                
                </label>
                </div>  
                <div className="flex justify-center p-2">
                <label className="label">
                or sign in with
                </label>
                <div className="btn-group">
                <button className="btn btn-ghost">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" className="w-7"/>
                </button>
                </div>
                </div>
                </div>

 
         </div>
    );
};

export default Signin;