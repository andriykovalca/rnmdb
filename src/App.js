import './styles/style.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./containers/pages/Home";
import Characters from './containers/pages/Characters';
import Episodes from './containers/pages/Episodes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/characters' component={Characters}></Route>
        <Route exact path='/episodes' component={Episodes}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;