import React from 'react';

import backgroundImg from '../../assets/img/Ethereum-homestead-background-20.jpg';

import { Container, Image } from 'semantic-ui-react';

const IntroHeader = () => (
        <div style={{ height: '100vh', position: 'relative', backgroundImage: `url(${backgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '8em', color: 'white'}}>GENTO</h1>
        </div>
)

export default IntroHeader;