import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './containers/Home;';


const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' render={props => <Home/> } exact/>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;