import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../components/Home'
import Developers from '../components/Developers'
import ContactUs from '../components/ContactUs';
import AppBarHeader from '../utils/AppBar';
import NavBarHeader from '../utils/NavBar';

function RouterApp() {
    return (
        <Router>
            <AppBarHeader/>
            <NavBarHeader/>
            <Switch>
                <Route path="/devs" component={Developers} />
                <Route exact path="/contact_us" component={ContactUs} />
                <Route path="/" component={Home} />
                <Route render={
                    () => <h3> Page not found</h3>
                } />
            </Switch>
        </Router>
    )
}

export default RouterApp