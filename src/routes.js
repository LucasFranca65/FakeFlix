import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './pages/main';
import ListEpsodes from './pages/ListEpsodes';
import Watch from './pages/Watch'; 

const Routes = ()=> (
    <BrowserRouter>
        <Switch>
            
            <Route path='/' exact Component={Main}/>
            <Route path='/listEpsodes' Component={ListEpsodes}/>
            <Route path='/watch' Component={Watch}/>

        </Switch>
    </BrowserRouter>

)

export default Routes