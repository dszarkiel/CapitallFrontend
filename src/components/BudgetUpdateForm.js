import React from 'react';
import Form from 'react-bootstrap/Form';
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import { updateBudget } from '../actions/budgetActions';

class BudgetUpdateForm extends React.Component {
    state = {
        name: this.props.selectBudget.name,
        category: this.props.selectBudget.category,
        amount: this.props.selectBudget.amount
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
        const id = e.target.id
        fetch(`http://localhost:3000/budgets/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name, 
                category: this.state.category, 
                amount: this.state.amount
            })
        })
        .then(response => response.json())
        .then(updatedBudget => {
            this.props.updateBudget(updatedBudget)
            this.props.history.push('/budgets')
        })
    }

    render(){
        return(
            <div className="budget-form">
                <h2>Update Budget</h2>
                <Form id={this.props.selectBudget.id} onSubmit={this.handleSubmit} >
                <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name"  placeholder="Bank, lender, etc." value={this.state.name} onChange={this.handleInputChange} />
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
                <Button type="submit" variant="success">Update Budget</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectBudget: state.selectBudget
    }
}

const mapDispatchToProps = {
    updateBudget: updateBudget
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetUpdateForm)