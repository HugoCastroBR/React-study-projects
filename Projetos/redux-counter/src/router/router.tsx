import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import React from 'react';
import Counter from '../components/Counter';
import Login from '../containers/Login';
import Register from '../containers/Register';
import useStore from './../hooks/useStore';

const Router:React.FC = ({children}) => {
    const {states} = useStore()
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/login' render={props => <Login/>} exact/>
                <Route path='/register' render={props => <Register/>} exact/>

                <Route path='/' >
                    {states.auth.user.valid?
                    <Counter/>:
                    <Redirect to='/login'/>
                    }
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;