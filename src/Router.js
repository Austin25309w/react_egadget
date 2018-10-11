import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage'
import Cartpage from './pages/cartpage'

const Router = () => (
    <Switch>
        <Route exact path='/' component ={ HomePage } />
        <Route exact path='/cart' component= { Cartpage }/>

    </Switch>
)
export default Router;