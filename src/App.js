import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import Home from 'pages/Home';
import Ico from 'pages/Ico';
import IcoTest from 'pages/IcoTest';

import web3 from 'myWeb3';

import backgroundImg from './assets/img/Ethereum-homestead-background-21.jpg';

// const web3Init = () => {
//   if (typeof window.web3 !== 'undefined') {
//     // Use Mist/MetaMask's provider
//     window.web3 = new Web3(window.web3.currentProvider);
//   } else {
//     console.log('No Web 3? You should consider trying MetaMask and Chrome!');
//     // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
//     window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//   }
// }

// const startApp = () => {
//   updateAccount();
// }

// const updateAccount = () => {
//   console.log(window.web3);
//   console.log(window.web3.eth.getAccounts(console.log));
//   const newAccount = window.web3.eth.getAccounts().then(account => console.log(account));
//   console.log(newAccount);
// }

let account;

class App extends Component {

  constructor() {
    super();

    this.state = {
      account: null,
      network: null
    }
  }

  componentWillMount() {
    // web3Init();
    // startApp();
    this.updateNetwork();
    this.updateAccount();
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
      this.setState({
        account: accounts[0]
      })
    });
  }

  render() {

    this.updateAccount();
    
    return (
        <Switch>
          <Route path="/ico/:address" render = {(props) => (<Ico {...props} account={ this.state.account } network={ this.state.network } />)} />
          <Route path="/test/:address" render = {(props) => (<IcoTest {...props} account={ this.state.account } network={ this.state.network } />)} />          
          <Route path="/home" render={(props) => (<Home {...props} account={ this.state.account } network={ this.state.network } />)} />
        </Switch>
    );
  }
}

export default App;
