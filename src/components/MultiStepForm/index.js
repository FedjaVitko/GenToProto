import React, { Component } from 'react';

import StepZilla from 'react-stepzilla';

import Name from './Name';
import Amount from './Amount';
import Auction from './Auction';
import Pricing from './Pricing';


const steps = [
    {name: 'name', component: <Name />},
    {name: 'amount', component: <Amount /> },
    {name: 'auction', component: <Auction /> },
    {name: 'pricing', component: <Pricing /> },    
]

class MultiStepForm extends Component {
    render() {
        return(
            <div className='step-progress'>
                <StepZilla steps={steps} />
            </div>
        )   
    }
}

export default MultiStepForm;