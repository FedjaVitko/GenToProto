import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import About from 'pages/About';
import List from 'pages/List';
import GenerateICO from 'pages/GenerateICO';
import Ico from 'pages/Ico';

import TopNav from 'components/TopNav';

import AlertContainer from 'react-alert'
import web3 from 'myWeb3';

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
          <TopNav />
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          <Container style={{ width: '800px' }}>
            <Switch>
              <Route exact path="/"
                    render={(props) => (<About {...props} account={ this.state.account } network={ this.state.network } />)}/>
              <Route path="/ico/:address"
                    render={(props) => (<Ico {...props} account={ this.state.account } network={ this.state.network } />)}/>
              <Route path="/list"
                    render={(props) => (<List {...props} account={ this.state.account } />)}/>
              <Route path="/generate"
                    render={(props) => (<GenerateICO {...props} account={ this.state.account } />)}/>
            </Switch>
          </Container>
        </div>

    );
  }
}

export default App;
