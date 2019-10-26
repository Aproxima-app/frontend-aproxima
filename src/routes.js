import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import Mapa from './pages/Map';
import Insert from './pages/Insert'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/cadastro" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/cadastrareventos" component={Insert} />
      <PrivateRoute path="/mapa" component={Mapa} />
      <Route path="*" component={() => <h1>Página não encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;