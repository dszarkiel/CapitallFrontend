import React from 'react';
import Form from 'react-bootstrap/Form';
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import { updateAccount } from '../actions/accountActions';

class AccountUpdateForm extends React.Component {
    state = {
        name: this.props.selectAccount.name,
        category: this.props.selectAccount.category,
        balance: this.props.selectAccount.balance
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleBalanceChange = (e) => {
        this.setState({
            [e.target.name]: parseFloat(e.target.value)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const id = e.target.id
        fetch(`http://localhost:3000/accounts/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name, 
                category: this.state.category, 
                balance: this.state.balance
            })
        })
        .then(response => response.json())
        .then(updatedAcc => {
            this.props.updateAccount(updatedAcc)
            this.props.history.push('/accounts')
        })
    }

    render(){
        return(
            <div className="account-form">
                <h2>New Account</h2>
                <Form id={this.props.selectAccount.id} onSubmit={this.handleSubmit} >
                <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name"  placeholder="Bank, lender, etc." value={this.state.name} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" name="category" value={this.state.category} onChange={this.handleInputChange} >
                        <option>Select</option>
                        <option>Checking</option>
                        <option>Savings</option>
                        <option>Cash</option>
                        <option>Investments</option>
                        <option>Loan</option>
                        <option>Credit Card</option>
                        <option>Mortgage</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridBalance">
                    <Form.Label>Balance</Form.Label>
                    <Form.Control type="number" name="balance" placeholder="$" value={this.state.balance} onChange={this.handleBalanceChange} />
                 </Form.Group>
                </Form.Row>
                <Button onClick={() => this.props.history.push('/accounts')}>Cancel</Button>
                <Button type="submit">Update Account</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectAccount: state.selectAccount
    }
}

const mapDispatchToProps = {
    updateAccount: updateAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountUpdateForm)