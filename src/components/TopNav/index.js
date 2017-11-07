import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

class TopNav extends Component {
    state = {
        activeItem: 'about'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state
        return (
            <Segment color='teal' size='small' inverted>
                <Menu size='large' color='teal' inverted secondary>
                    <Menu.Item header>GENTO</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item name='about' as={ NavLink } to='/' active={activeItem === 'about'} onClick={this.handleItemClick} />
                        <Menu.Item name='list' as={ NavLink } to='/list' active={activeItem === 'list'} onClick={this.handleItemClick} />
                        <Menu.Item name='generate' as={ NavLink } to='/generate' active={activeItem === 'generate'} onClick={this.handleItemClick} />
                    </Menu.Menu>                                
                </Menu>
            </Segment>
        )
    }
}

export default TopNav;


