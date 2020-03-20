import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Profile from './pages/Profile';
import Erro from './pages/Erro';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
}
