import React from 'react';

const Header = ({ account }) => (
    <div className="flexCenter" style={{ flexDirection: 'column', textAlign: 'center' }}>
        <h1>LIST OF YOUR TOKEN SALES (ICO)</h1>
        <h2 style={{ fontWeight: 100 }}>Your current address: </h2>
        <h3>{account}</h3>
    </div>
)

export default Header;