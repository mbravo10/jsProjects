import React from 'react';
import { Container, Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
        this.state = {
            input: '',
            items: []
        };
    }

    myChangeHandler = (event) => {
        this.setState({ input: event.target.value });
    }

    mySubmitHandler = (e) => {
        e.preventDefault();
        if (Number(this.state.input)) {
            alert("Not a letter, try again");
        } else {
            this.setState({
                items: [...this.state.items, this.state.input],
                input: ''
            })
            alert("You are submitting " + this.state.input);
        }
    }

    render() {
        const listItems = this.state.items.map((item) =>
            <li>{item}</li>);

        return (
            <Container>
                <form>
                    <Form.Group controlId="todoInput">
                        <Form.Label>Items</Form.Label>
                        <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Enter To-Do Item"
                            onSubmit={this.myChangeHandler} />
                    </Form.Group>
                    <Button 
                        variant="primary"
                        type="submit"
                        onSubmit={this.mySubmitHandler}
                        >
                        Submit
                    </Button>
                </form>
                <ul>
                    {listItems}
                </ul>
            </Container>
        );
    }
}

export default MyForm;


