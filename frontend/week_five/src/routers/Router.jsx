import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import React from "react";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { NavLink } from 'react-router-dom';
import Profile from '../components/Profile';
import App from '../App';
function Routers ()  {
    return(

        <Router>
            <ul class="navlinks">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signup">SignUp</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>

            </ul>
            <Switch>
                <Route exact path='/'><App></App></Route>
                <Route path='/login'><Login></Login></Route>
                <Route path='/signup'><Signup></Signup></Route>
                <Route path='/profile'><Profile></Profile></Route>
                

            </Switch>
        </Router>
    )
};
export default Routers;