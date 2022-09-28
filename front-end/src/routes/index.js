import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import SellerOrder from '../pages/sellerOrders';
import Products from '../pages/products';
import Admin from '../pages/admin';
import Checkout from '../pages/checkout';
import CustomerOrder from '../pages/customerOrder';

function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/register"
        element={ <Register /> }
      />
      <Route
        exact
        path="/customer/products"
        element={ <Products /> }
      />
      <Route
        exact
        path="/customer/checkout"
        element={ <Checkout /> }
      />
      <Route
        exact
        path="/customer/orders/:id"
        element={ <CustomerOrder /> }
      />
      <Route
        exact
        path="/login"
        element={ <Login /> }
      />
      <Route
        exact
        path="/seller/orders"
        element={ <SellerOrder /> }
      />
      <Route
        exact
        path="/admin/manage"
        element={ <Admin /> }
      />
      <Route
        path="/"
        element={ <Navigate to="/login" replace /> }
      />
    </Switch>
  );
}

export default Routes;
