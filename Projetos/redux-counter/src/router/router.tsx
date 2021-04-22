import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';
import Counter from '../components/Counter';
import Login from '../containers/Login';
import Register from '../containers/Register';

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