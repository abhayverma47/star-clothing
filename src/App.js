import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components'


const HatsPage = () => {
  return (
    <h1>hatspage</h1>
  );
}

function App() {
  return (

    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/hats' component={HatsPage} />

      </Switch>
    </div>

  );
}

export default App;

 //switch maps first path and dosent map anything after it

 //exact by default is true