import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Home/Home';



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' render={props => <Home/>} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;