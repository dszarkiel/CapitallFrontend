import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
// import moment from 'moment'
import { addGoal } from '../actions/goalsActions';

class GoalForm extends React.Component {
    state = {
        name: "",
        description: "",
        amount: "",
        due_date: "",
        error: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAmountChange = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/goals", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name, 
                description: this.state.description, 
                amount: this.state.amount, 
                due_date: this.state.due_date, 
                complete: false, 
                user_id: this.props.currentUser.id
            })
        })
        .then(response => response.json())
        .then(newGoal => {
            if (newGoal.error){
                this.setState({
                    error: newGoal.error
                })
            } else {
            this.props.addGoal(newGoal)
            this.props.history.push('/goals')
            }
        })
    }

    render(){
        return(
            <div className="goal-form">

                    {this.state.error ?
                    <Alert className="alert" variant="danger" onClose={() => this.setState({error: ''})} dismissible>
                        <Alert.Heading>Oops! Something went wrong!</Alert.Heading>
                        <ul>
                            {this.state.error.map(message => {
                                return <li>{message}</li>
                            })}
                        </ul>
                    </Alert>
                    : null}

                <h2>New Goal</h2>
                <Form onSubmit={this.handleSubmit} >
                <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name"  placeholder="Vacation, new car, retirement, etc." value={this.state.name} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description"  placeholder="What are we trying to accomplish?" value={this.state.description} onChange={this.handleInputChange} />
                </Form.Group>
                </Form.Row>

                <Form.Row>          
                <Form.Group as={Col} controlId="formGridAmount">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" name="due_date" value={this.state.due_date} onChange={this.handleInputChange} />
                 </Form.Group>

                <Form.Group as={Col} controlId="formGridAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" name="amount" placeholder="$" value={this.state.amount} onChange={this.handleAmountChange} />
                 </Form.Group>
                </Form.Row>
                <Button onClick={() => this.props.history.push('/goals')}>Cancel</Button>
                <Button type="submit" variant="success">Add Goal</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = {
    addGoal: addGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm)