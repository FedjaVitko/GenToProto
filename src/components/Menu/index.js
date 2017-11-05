import React from 'react';
import { Menu } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const MenuItem = ({ activeItem, handleItemClick }) => (
    <Menu size='huge' color='orange' inverted fluid widths={2}>    
        <Menu.Item as={Link} to='/home/generate' name="generate ICO" active={ activeItem === "generate ICO" } onClick={ handleItemClick } />
        <Menu.Item as={Link} to='/home/list' name="list ICO" active={ activeItem === "list ICO" } onClick={ handleItemClick } />
    </Menu>
)

export default MenuItem;