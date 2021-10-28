import React from 'react'
import Accounts from '../views/Accounts'
import Cart from '../views/Cart'
import Checkout from '../views/Checkout'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import Login from '../views/Login'
import Pay from '../views/Pay'
import Shop from '../views/Shop'

import {
    BrowserRouter as Router, Switch, Route 
} from 'react-router-dom'


function MyRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Accounts">
                    <Accounts />
                </Route>
                <Route path="/Cart">
                    <Cart />
                </Route>
                <Route path="/Checkout">
                    <Checkout />
                </Route>
                <Route path="/Dashboard">
                    <Dashboard />
                </Route>
                <Route path="Login">
                    <Login />
                </Route>
                <Route path="Pay">
                    <Pay />
                </Route>
                <Route path="/Shop">
                    <Shop />
                </Route>                
            </Switch>
        </Router>
    )
}

export default MyRouter 
