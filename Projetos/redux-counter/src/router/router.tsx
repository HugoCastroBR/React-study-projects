import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';
import Counter from '../components/Counter';
import Login from './../components/Login';
import Register from './../components/Register';

const Router:React.FC = ({children}) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/login' render={props => <Login/>} exact/>
                <Route path='/register' render={props => <Register/>} exact/>
                <Route path='/' render={props => <Counter/>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;