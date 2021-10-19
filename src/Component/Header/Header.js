import React from 'react';
import {  NavLink } from 'react-router-dom';
import logo from '../../Image/logo.png'
import UseAuth from '../hooks/UseAuth';
import'./Header.css'

const Header = () => {
      const {users,logOut} = UseAuth();
    return (
        <div className='header-body'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={logo} alt="" />
                    <nav className="header">
                        <NavLink to="/home" style={{ textDecoration: 'none',margin:'5px',color: 'black' }}>Home</NavLink>
                        <NavLink to="/about us" style={{ textDecoration: 'none',margin:'5px',color: 'black' }}>about us</NavLink>
                        <NavLink to="/Shedule" style={{ textDecoration: 'none',margin:'5px',color: 'black' }}>Shedule</NavLink>
                        <NavLink to="/Contact" style={{ textDecoration: 'none',margin:'5px',color: 'black' }}>Contact</NavLink>
                        { users.email &&
                            <span style={{color:'skyblue'}}>Hello {users.displayName}</span>}
                        { users.email ?
                            <button onClick={logOut}>logout</button>:
                            <NavLink to="/login" style={{ textDecoration: 'none',margin:'5px',color: 'black' }}>login</NavLink>}
                    </nav>
                </div>
            </nav>
        </div>
    );
};

export default Header;