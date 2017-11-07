import React from 'react';

import { Divider } from 'semantic-ui-react';

const Header = ({ account }) => (
    <div className="flexCenter" style={{ flexDirection: 'column', textAlign: 'center' }}>
        <h1>LIST OF YOUR TOKEN SALES (ICO)</h1>
        <Divider />
        <h1 style={{ fontWeight: 100 }}>Your current address: </h1>
        <h3>{account}</h3>
    </div>
)

export default Header;