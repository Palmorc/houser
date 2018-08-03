import React from 'react'
import { Switch,Route } from 'react-router-dom'
import DashComp from './component/Dashboard/Comp.js'
import WizardComp from './component/Wizard/Comp.js'

export default (
  <Switch>
    <Route exact path="/" component = { DashComp }/>
    <Route path="/wizard" component = { WizardComp }/>
  </Switch>
)
