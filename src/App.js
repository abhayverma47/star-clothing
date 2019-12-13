import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components'

function App() {
  return (

    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
      </Switch>
    </div>

  );
}

export default App;

 //switch maps first path and dosent map anything after it

 //exact by default is true