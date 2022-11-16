import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {
    const { register, login } = useContext(AuthContext);
    const [success, setsucces] = useState('')
    console.log(register)
    const [error, seterror] = useState(null)
    const RegisterHandler = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password.length < 6) {
            return seterror('password should be 6 characters or long')
        }
        if (password !== confirm) {
            return seterror('password did not match')
        }

        register(email, password)
            .then(result => {
                const user = result.user;
                form.reset()

            })
            .catch(console.error())
            
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={RegisterHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required name="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">confim password</span>
                            </label>
                            <input type="password" required name="confirm" placeholder="confirm password" className="input input-bordered" />
                            <label className="label">
                                <small>
                                    <Link to={'/login'}>are you new? login</Link>
                                    <p className='text-red-500'>{error}</p>
                                </small>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;