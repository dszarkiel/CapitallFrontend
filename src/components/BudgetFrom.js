import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import moment from 'moment'
import { addBudget } from '../actions/budgetActions';

class BudgetForm extends React.Component {
    state = {
        name: "",
        category: "",
        amount: "",
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
        let currentMonth = moment().format('MM')
        fetch("http://localhost:3000/budgets", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name, 
                category: this.state.category, 
                amount: this.state.amount, 
                month: currentMonth,
                user_id: this.props.currentUser.id
            })
        })
        .then(response => response.json())
        .then(newBudget => {
            if (newBudget.error){
                this.setState({
                    error: newBudget.error
                })
            } else {
            this.props.addBudget(newBudget)
            this.props.history.push('/budgets')
            }
        })
    }

    render(){
        return(
            <div className="budget-form">

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

                <h2>New Budget</h2>
                <Form onSubmit={this.handleSubmit} >
                <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name"  placeholder="Groceries, nights out, food, etc." value={this.state.name} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" name="category" value={this.state.category} onChange={this.handleInputChange} >
                    <option>Select</option>
                        <option>Auto & Transport</option>
                        <option>Bills & Utilities</option>
                        <option>Business Services</option>
                        <option>Education</option>
                        <option>Entertainment</option>
                        <option>Fees & Charges</option>
                        <option>Financial</option>
                        <option>Food & Dining</option>
                        <option>Gifts & Donations</option>
                        <option>Health & Fitness</option>
                        <option>Home</option>
                        <option>Income</option>
                        <option>Investments</option>
                        <option>Kids</option>
                        <option>Loans</option>
                        <option>Misc Expenses</option>
                        <option>Personal Care</option>
                        <option>Pets</option>
                        <option>Shopping</option>
                        <option>Taxes</option>
                        <option>Transfer</option>
                        <option>Travel</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAmount">
                    <Form.Label>Amount per Month</Form.Label>
                    <Form.Control type="number" name="amount" placeholder="$" value={this.state.amount} onChange={this.handleAmountChange} />
                 </Form.Group>
                </Form.Row>
                <Button onClick={() => this.props.history.push('/budgets')}>Cancel</Button>
                <Button type="submit" variant="success">Add Budget</Button>
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
    addBudget: addBudget
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm)