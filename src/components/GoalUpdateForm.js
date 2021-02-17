import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import {connect} from 'react-redux';
import { updateGoal } from '../actions/goalsActions';
import MoneyTreeImg from '../images/MoneyTreeImg.png'

class GoalUpdateForm extends React.Component {
    state = {
        name: this.props.selectGoal.name,
        description: this.props.selectGoal.description,
        amount: this.props.selectGoal.amount,
        due_date: this.props.selectGoal.due_date,
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
        const id = this.props.selectGoal.id
        fetch(`http://localhost:3000/goals/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name, 
                description: this.state.description, 
                amount: this.state.amount, 
                due_date: this.state.due_date, 
            })
        })
        .then(response => response.json())
        .then(updatedGoal => {
            if (updatedGoal.error){
                this.setState({
                    error: updatedGoal.error
                })
            } else {
            this.props.updateGoal(updatedGoal)
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
                <Image className="goal-from-image" src={MoneyTreeImg}/>
                <Button onClick={() => this.props.history.push('/goals')}>Cancel</Button>
                <Button type="submit" variant="success">Update Goal</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        selectGoal: state.selectGoal
    }
}

const mapDispatchToProps = {
    updateGoal: updateGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalUpdateForm)