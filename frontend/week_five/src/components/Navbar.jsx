import React from "react";
import './styles/Navbar.scss';

import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const Navbar = ({onPageChange}) => {
    const {user, updateToken} = useContext(AuthContext)
    return(
        <nav className="nav-bar">
            <div className="nav-left">
            <span onClick={() => onPageChange("home")} to="/">Home</span>
            <span onClick={() => onPageChange("login")} to="/login">Login</span>
            <span onClick={() => onPageChange("signup")} to="/signup">Signup</span>
            
            <span onClick={() => onPageChange("profile")} to="profile">Profile</span>
            </div>
            <div className="nav-right">
            <span onClick={() => updateToken("")} to="login">Log Out</span>
            <span id="username">{user ? user.displayName : ""}</span>
            
            </div>
        </nav>
    )
}

export default Navbar;