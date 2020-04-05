import React from 'react';
import './App.css';
import HomePage from './pages/homepage.page.jsx';
import Shop from './pages/shop/shop.page.jsx';
import SignInSignOutPage from './pages/sign-in-sign-out/sign-in-sign-out.component.jsx';
import Header from './components/header/header.component.jsx';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/signin' component={SignInSignOutPage} />
        <Route path='/bones' component={Shop} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
