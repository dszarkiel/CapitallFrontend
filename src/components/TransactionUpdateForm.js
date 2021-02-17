import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux'
import { updateTransaction } from '../actions/transactionActions';
import Test from '../images/Test.png'
class TransactionUpdateForm extends React.Component {
    state = {
        date: this.props.selectTransaction.date,
        description: this.props.selectTransaction.description,
        amount: this.props.selectTransaction.amount,
        category: this.props.selectTransaction.category,
        budget_id: this.props.selectTransaction.budget_id,
        account_id: this.props.selectTransaction.account_id,
        to_account_id: this.props.selectTransaction.to_account_id,
        goal_id: this.props.selectTransaction.goal_id,
        error: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleInputId = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }
    handleInputAmt = (e) => {
        this.setState({
            [e.target.name]: parseFloat(e.target.value)
        })
    }



    renderBudgets = () => {
        return this.props.budgets.map(budgetObj => {
            return <option value={budgetObj.id}>{budgetObj.name}</option>
        })
    }
    renderAccounts = () => {
        return this.props.accounts.map(accountObj => {
            return <option value={accountObj.id}>{accountObj.name} - ${accountObj.balance}</option>
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const id = e.target.id
        fetch(`http://localhost:3000/transactions/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                date: this.state.date,
                description: this.state.description,
                amount: this.state.amount,
                budget_id: this.state.budget_id,
                account_id: this.state.account_id,
                to_account_id: this.state.to_account_id,
                goal_id: this.state.goal_id,
                category: this.state.category
            })
        })
        .then(response => response.json())
        .then(updatedTransObj => {
            if (updatedTransObj.error){
                this.setState({
                    error: updatedTransObj.error
                })
            } else {
            this.props.updateTransaction(updatedTransObj)
            this.props.history.push('/transactions')
            }
        })
    }

    componentDidMount = () => {
        
    }

    render(){
        return(
            <div className="transaction-form" >

                    {this.state.error ?
                    <Alert className="alert" variant="danger" onClose={() => this.setState({error: ''})} dismissible>
                        <Alert.Heading>Oops! Something went wrong!</Alert.Heading>
                        <ul>
                            {this.state.error.map(message => {
                                return <li>{message}</li>
                            })}
                        </ul>
                    </Alert>
                    : null }

                <h1>Update Transaction</h1>
                <Form onSubmit={this.handleSubmit} id={this.props.selectTransaction.id} >
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date"  placeholder="Select transaction date" value={this.state.date} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" placeholder="Vendor, purchase, etc." value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
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
                        <option>Withdrawal</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridBudgetId">
                    <Form.Label>Budget </Form.Label>
                    <Form.Control as="select" name="budget_id" value={this.state.budget_id} onChange={this.handleInputId}>
                        <option>Choose...</option>
                        {this.renderBudgets()}
                    </Form.Control>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFromAccount">
                    <Form.Label>From Account</Form.Label>
                    <Form.Control as="select" name="account_id" value={this.state.account_id} onChange={this.handleInputId}>
                        <option>Choose...</option>
                        {this.renderAccounts()}
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridToAccount">
                    <Form.Label>To Account</Form.Label>
                    <Form.Control as="select" name="to_account_id" value={this.state.to_account_id} onChange={this.handleInputId}>
                        <option>Choose...</option>
                        {this.renderAccounts()}
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" name="amount" as="input" value={this.state.amount} onChange={this.handleInputAmt} step="0.01"/>
                    </Form.Group>
                </Form.Row> 
                <img className="transaction-form-image" src={Test} height="300px" width="300px" >
                </img><br></br>

                <Button variant="primary" onClick={() => this.props.history.goBack()}>Cancel</Button>
                <Button variant="success" type="submit">Update Transaction </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        budgets: state.budgets,
        accounts: state.accounts,
        goals: state.goals,
        selectTransaction: state.selectTransaction 
    }
}

const mapDispatchToProps = {
    updateTransaction: updateTransaction
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionUpdateForm)