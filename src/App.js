import React, { Component } from 'react';
import HouseComp from './component/House/Comp.js'
import HeaderComp from './component/Header/Comp.js'
import DashComp from './component/Dashboard/Comp.js'
import WizardComp from './component/Wizard/Comp.js'
import Routes from './routes.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComp/>
        { Routes }
      </div>
    );
  }
}

export default App;
