import React, { Component } from 'react';

class IcoTest extends Component {

    constructor(props) {
        super(props);

        this.state = {
            testData: null
        }
    }

    componentWillMount() {
        setInterval(() => {
            console.log('Every SECOND!')
        }, 1000);
    }

    render() {
        return(
            <h1>IcoTest</h1>
        )
    }
}

export default IcoTest;