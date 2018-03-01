
import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

import PlaceholderComponent from '../PlaceholderComponent/index';
import styles from './index.scss';

import Page1 from '../../Pages/Page1/index';
import ChildrenAPI from "../../Pages/ChildrenAPI";
import TransitionTest from "../../Pages/TransitionTest";
import RouteRedirectAndAsync from "../../Pages/RouteRedirectAndAsync";
import StyledComponents from "../../Pages/StyledComponents";
import ReduxForm from "../../Pages/ReduxForm";

const RouterNav = () =>(
    <Router>
        <div>
            <div className = {styles.routeElWrapper}>
                <NavLink exact activeClassName = {styles.routeActive} to="/Placeholder" >Placeholder</NavLink>
                <NavLink exact activeClassName = {styles.routeActive} to="/Page1" >Page1</NavLink>
                <NavLink exact activeClassName = {styles.routeActive} to="/ChildrenAPI" >ChildrenAPI</NavLink>
                <NavLink exact activeClassName = {styles.routeActive} to="/TransitionTest" >TransitionTest</NavLink>
                <NavLink exact activeClassName = {styles.routeActive} to="/RouteRedirectAndAsync" >RouteRedirectAndAsync</NavLink>
                <NavLink exact activeClassName = {styles.routeActive} to="/StyledComponents" >StyledComponents</NavLink>
                <NavLink exact activeClassName = {styles.routeActive} to="/ReduxForm" >ReduxForm</NavLink>
                <NavLink exact activeClassName = {styles.routeActive} to="/" >null</NavLink>
            </div>
                        <hr />
            <div>
                <Switch>
                    <Route path="/Placeholder" component = {PlaceholderComponent} />
                    <Route path="/Page1" component = {Page1} />
                    <Route path="/ChildrenAPI" component = {ChildrenAPI} />
                    <Route path="/TransitionTest" component = {TransitionTest} />
                    <Route path="/RouteRedirectAndAsync" component = {RouteRedirectAndAsync} />
                    <Route path="/StyledComponents" component = {StyledComponents} />
                    <Route path="/ReduxForm" component = {ReduxForm} />
                    <Route path="/" render = {()=> <div>Null /</div>} />
                </Switch>
            </div>

        </div>
    </Router>
)

export default RouterNav;