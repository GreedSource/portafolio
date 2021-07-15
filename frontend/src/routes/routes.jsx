import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from '../components/navbar'
import Login from '../screens/auth/login'
import NotFound from '../screens/error/NotFound'
import ProjectsList from '../screens/projects/projectsList'

const Routes = () => { 
    return (        
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ ProjectsList } />
                <Route exact path="/login" component={ Login } />
                <Route component={ NotFound } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;