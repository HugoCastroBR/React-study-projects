import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './containers/Home';
import Page from './containers/Page';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' render={props => 
                    <Page>
                        <Home/>
                    </Page>
                } exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;  