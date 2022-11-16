import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const logout = () => {
        logOut()
            .then(() => { })
            .catch(console.error())
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <p className='text-white'>{user?.email}</p>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>

                <button onClick={logout} className="btn btn-outline btn-info ml-5">logout</button>

            </div>
        </nav>
    );
};

export default Header;