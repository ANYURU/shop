import PrivateRoute  from './PrivateRoute'
import NotLoggedIn from '../views/NotLoggedIn'
import Login from '../views/Login'
import Home from '../views/Home'
import Account from '../views/Account'
import Cart from '../views/Cart'
import Checkout from '../views/Checkout'
import Dashboard from '../views/Dashboard'
import Pay from '../views/Pay'
import NotFound from '../views/NotFound'

import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'

function MyRouter() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/not-authorized-in">
                    <NotLoggedIn/>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <PrivateRoute path="/dashboard">
                    <Dashboard />
                </PrivateRoute>
                <PrivateRoute path="/account">
                    <Account />
                </PrivateRoute>
                <PrivateRoute path="/pay">
                    <Pay />
                </PrivateRoute>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
            </Router>
    )
}
export default MyRouter