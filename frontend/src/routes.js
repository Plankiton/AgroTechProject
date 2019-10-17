import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AddProduct from './add';

export default function Routes() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path='/add' component={AddProduct}/>
    </Switch>
  </BrowserRouter>
  );
}
