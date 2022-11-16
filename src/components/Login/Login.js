import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();
    const [success, setsucces] = useState(false)
    const { login } = useContext(AuthContext)
    const loginhandler = (event) => {

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user
                form.reset();
                setsucces(true);
                navigate(from, { replace: true })
            })
            .catch(console.error())
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginhandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <small><Link to={'/register'}>already have an account? register</Link></small>

                            </label>
                            {
                                success && <p className='text-green-500'>login successfully</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;