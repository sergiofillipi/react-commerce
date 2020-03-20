import React from 'react';
import './App.css';
import HomePage from './pages/homepage.page.jsx';
import { Route, Switch } from 'react-router-dom';

function Hats(){
  return (
    <div>
      Categoria Bonés
    </div>
  );
}

function Hat( props ){
  console.log(props);
  return (
    <div>
      Produto Boné
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route path='/bones/:id' component={Hat} />
        <Route path='/bones' component={Hats} />
        <Route  path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
