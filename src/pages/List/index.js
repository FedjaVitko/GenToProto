import React, { Component } from 'react';

import Header from './Header';
import ICOList from './ICOList';

import { createGentoFactoryInstance, createAuctionTokenInstance } from 'contractInstances';

import web3 from 'myWeb3';
import moment from 'moment';

class Home extends Component {
  
  constructor() {
    super();
    
    this.state = {
      activeItem: "list ICO",
      items: [],
    }
  }

  componentWillMount() {
    this.listIcos();
  }
  
  componentDidUpdate(nextProps) {
    if (nextProps.account !== this.props.account) {
      this.setState({
        items: []
      }, this.listIcos())
    }
  }

  addIcoEntry = (address) => {
    const instance = createAuctionTokenInstance(address);
    
    instance.getDetails((err, result) => {
      if(err) {
        console.error(err);
        return;
      } else {
        const creationDate = result[4].toNumber();
        const name = result[1];

        const date = moment.unix(creationDate).format('LL');
        
        const item = {
          address: address,
          name: name,
          date: date
        }

        let hasAddress = this.state.items.some( item => item['address'] === address )

        if(!hasAddress) {
          this.state.items.push(item);
        }
      }
    })
  }

  listIcos = () => {
    const owner = this.props.account;
    const instance = createGentoFactoryInstance();

    console.log(owner);
    console.log('YUHUU!');

    instance.getICOsFromOwner(owner, (error, result) => {
      for(let x = 0; x < result.length; x++) {
        this.addIcoEntry(result[x]);
      }
    })
  }

  render() {
    const { activeItem, items } = this.state;

    return (
      <div>
          <Header account={this.props.account} />
          <ICOList items={items} />
      </div>
    );
  }
}

export default Home;
