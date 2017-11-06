import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

import IntroHeader from 'components/IntroHeader';
import AboutSection from 'components/AboutSection';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import Routes from './Routes';
import Header from './Header';

import { createGentoFactoryInstance, createAuctionTokenInstance } from 'contractInstances';
import web3 from 'myWeb3';

import moment from 'moment';
// import backgroundImg from './assets/img/Ethereum-homestead-background-21.jpg';

class Home extends Component {
  
  constructor() {
    super();
    
    this.state = {
      activeItem: "list ICO",
      items: [],
    }
  }

  componentWillMount() {
    setInterval(() => {
      console.log('Every SECOND!')
    }, 1000);
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

    instance.getICOsFromOwner(owner, (error, result) => {
      for(let x = 0; x < result.length; x++) {
        this.addIcoEntry(result[x]);
      }
    })
  }



  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <IntroHeader />
        <Container style={{ width: '800px' }}>
          <AboutSection />
          <Menu activeItem={activeItem} handleItemClick={this.handleItemClick} />
          <Header account={this.props.account} />
          <Routes items={this.state.items} />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Home;
