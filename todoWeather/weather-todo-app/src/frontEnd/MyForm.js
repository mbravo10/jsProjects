import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';


class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
        username: '',
        items: []
        };
    }

    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    mySubmitHandler = (e) => {
        e.preventDefault();
        if(Number(this.state.username)){
            alert("Not a letter, try again");
        }else{
        this.setState({
            items: [...this.state.items, this.state.username]
        })
        alert("You are submitting " + this.state.username);
        
        }
    }

    render() {
        const listItems = this.state.items.map((item) => 
            <li>{item}</li>);

        return (
            <Form>
                <Form.Group controlId="todoInput">
                    <Form.Label>Items</Form.Label>
                    <Form.Control type="text" placeholder="Enter To-Do Item"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default MyForm;


