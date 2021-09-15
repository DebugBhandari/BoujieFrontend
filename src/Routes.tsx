import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import Product from './views/Product'
import PostProduct from './views/PostProduct'
import Profile from './components/Profile'
import Cart from './views/Cart'
import Order from './components/Orders'
import EachOrder from './components/EachOrder'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products/:id" component={Product} />
    <Route exact path="/postproduct" component={PostProduct} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/order" component={Order} />
    <Route exact path="/orders/:id" component={EachOrder} />
  </Switch>
)

export default Routes
