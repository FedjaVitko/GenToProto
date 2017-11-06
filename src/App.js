import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import Home from 'pages/Home';
import Ico from 'pages/Ico';

import AlertContainer from 'react-alert'
import web3 from 'myWeb3';

import backgroundImg from './assets/img/Ethereum-homestead-background-21.jpg';

class App extends Component {

  constructor() {
    super();

    this.state = {
      account: null,
      network: null
    }
  }

  componentWillMount() {
    this.updateNetwork();
    setInterval(this.updateAccount, 1000);
  }

  updateNetwork = () => {
    web3.version.getNetwork((err, netId) => {
      this.setState({
        network: netId
      })
    })
  }

  updateAccount = () => {
    console.log('update');
    
    web3.eth.getAccounts((err, accounts) => {
      if(this.state.account !== accounts[0]){
        if(this.state.account !== null)
          this.msg.info('Account switched');
        console.log("Switched");
        this.setState({
          account: accounts[0]
        })
      }



    });
  }

  render() {
    
    return (
      
        <div>
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          <Switch>
            <Route path="/ico/:address"
                   render={(props) => (<Ico {...props} account={ this.state.account } network={ this.state.network } />)}/>
            <Route path="/home"
                   render={(props) => (<Home {...props} account={ this.state.account } network={ this.state.network } />)}/>
          </Switch>
        </div>

    );
  }
}

export default App;
