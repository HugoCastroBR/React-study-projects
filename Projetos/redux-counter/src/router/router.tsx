import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react';
import Counter from '../components/Counter';

const Router:React.FC = ({children}) => {
    return(
        <BrowserRouter>
            <Route path='/' render={props => <Counter/>}/>
        </BrowserRouter>
    )
}

export default Router;