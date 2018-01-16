
import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

import PlaceholderComponent from '../PlaceholderComponent/index';

const RouterNav = () =>(
    <Router>
        <div>
            <div>
                <NavLink exact activeClassName = "routeActive" to="/Placeholder" >Placeholder</NavLink>
                <NavLink exact activeClassName = "routeActive" to="/" >null</NavLink>
            </div>

            <div>
                <Switch>
                    <Route path="/Placeholder" component = {PlaceholderComponent} />
                    <Route path="/" render = {()=> <div>Null /</div>} />
                </Switch>
            </div>

        </div>
    </Router>
)

export default RouterNav;