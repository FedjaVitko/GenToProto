import React from 'react';

import { Card } from 'semantic-ui-react';

// const items = [
//     {
//         address: '0x3e61e39a2b1b16206fd8889b855837a582b6811f',
//         name: 'TubToken',
//         date: 'November 2, 2017'
//     },
//     {
//         address: '0xa3edfd89663fabd0fed76a1055fc68f55fe62733',
//         name: 'FacToken',
//         date: 'October 30, 2017'
//     },
//     {
//         address: '0xaht7hd89663fabd0fed76a1055fc68f55ds2lm42',
//         name: 'TheToken',
//         date: 'October 29, 2017'
//     }
// ]

const ListICO = ({ items }) => (
    items.map(item => (
        <Card
            style={{ fontSize: '18px' }}
            fluid
            raised
            href={`/ico/${item.address}`}
            header={item.name}
            meta={item.address}
            extra={item.date}
            className='flex-center'
        />
    ))
)

export default ListICO;