import React from 'react';
import './App.css';
import HomePage from './pages/homepage.page.jsx';
import Shop from './pages/shop/shop.page.jsx';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop' component={Shop} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
