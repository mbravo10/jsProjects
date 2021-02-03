import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class Home extends Component {
    state = {
        apiResponse : ''
    };

    componentDidMount(){
        this.callApi();
    }

    callApi() {
        fetch("/")
        .then(res => res.text())
        .then(res => this.setState({apiResponse : res }))
        .catch(err => err);
    }



    render(){
        return(
            <div>
            <p>{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default Home;