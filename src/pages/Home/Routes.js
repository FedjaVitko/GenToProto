import React from 'react';

import { Switch, Route } from 'react-router-dom';

import MultiStepForm from 'components/MultiStepForm';
import ListICO from 'components/ListICO';

const Routes = ({ items }) => (
    <Switch>
        <Route path="/home/generate" component={ MultiStepForm } />
        <Route path="/home/list" render = {() => (<ListICO items={items} />) } />  
    </Switch>
)

export default Routes;