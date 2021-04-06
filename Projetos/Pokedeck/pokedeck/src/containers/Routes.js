import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './../routes/Home/index';



function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' render={props => <Home/>} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;