
import UsrLogin from '../newPages/UsrLogin';

import React from 'react';
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import { createHashHistory } from "history";
import Paperbase from '../newPages/Paperbase';
const history = createHashHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={()=>(
                        <Redirect to='/Login'/>
                    )}/>
                    <Route path='/Login' component={UsrLogin}/>
                    <Route path='/Index' component={Paperbase}/>
                 

                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;