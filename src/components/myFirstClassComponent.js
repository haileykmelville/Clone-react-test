import React, { Component } from 'react';

class Welcome extends React.Component {
    render() {
        return <h1>Hi, {this.props.name}</h1>;
    }
}

export default Welcome;