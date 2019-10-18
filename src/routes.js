import React from "react";
import HomePage from './Home'
import AddProduct from './add'
import RemProduct from './rem'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/rem">
            <RemProduct />
          </Route>
          <Route path="/add">
            <AddProduct />
          </Route>
        </Switch>
    </Router>
  );
}
