import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import { updateBill } from '../actions/billActions';


class BillForm extends React.Component {
    state = {
        name: this.props.selectBill.name,
        amount: this.props.selectBill.amount,
        due_date: this.props.selectBill.due_date,
        autopay: "",
        error: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAmountChange = (e) => {
        this.setState({
            [e.target.name]: parseFloat(e.target.value)
        })
    }

    handleAutopayChange = (e) => {
        this.setState({
            autopay: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let autoPaySelection;
        if (this.state.autopay === "Yes") {
            autoPaySelection = true
        } else {
            autoPaySelection = false
        }

        fetch(`http://localhost:3000/bills/${this.props.selectBill.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name, 
                amount: this.state.amount, 
                due_date: this.state.due_date, 
                autopay: autoPaySelection
            })
        })
        .then(response => response.json())
        .then(updatedBill => {
            if (updatedBill.error){
                this.setState({
                    error: updatedBill.error
                })
            } else {
            this.props.updateBill(updatedBill)
            this.props.history.push('/bills')
            }
        })
    }

    render(){
        return(
            <div className="bill-form">

                    {this.state.error ?
                    <Alert className="alert" variant="danger" onClose={() => this.setState({error: ''})} dismissible>
                        <Alert.Heading>Oops! Something went wrong!</Alert.Heading>
                        <ul>
                            {this.state.error.map(message => {
                                return <li key="message">{message}</li>
                            })}
                        </ul>
                    </Alert>
                    : null}

                <h2>Update Bill</h2>
                <Form onSubmit={this.handleSubmit} >

                <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name"  placeholder="Phone, electricity, water, etc." value={this.state.name} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" name="amount" placeholder="$" value={this.state.amount} onChange={this.handleAmountChange} />
                 </Form.Group>
                </Form.Row>

                <Form.Row>          
                <Form.Group as={Col} controlId="formGridAmount">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" name="due_date" value={this.state.due_date} onChange={this.handleInputChange} />
                    <Form.Text className="text-muted">
                        A reminder email will be sent 3 days prior to your due date.
                    </Form.Text>
                 </Form.Group>

                <Form.Group as={Col} controlId="formGridAutopay">
                    <Form.Label>AutoPay</Form.Label>
                    <Form.Control as="select" name="autopay" value={this.state.autopay} onChange={this.handleAutopayChange} >
                        <option>Select</option>
                        <option>No</option>
                        <option>Yes</option>
                    </Form.Control>
                    <Form.Text className="text-muted">
                        If "Yes", a new transaction will be automatically added on the due date.
                    </Form.Text>
                </Form.Group>
                </Form.Row>
                <Button onClick={() => this.props.history.push('/bills')}>Cancel</Button>
                <Button type="submit" variant="success">Update Bill</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        selectBill: state.selectBill
    }
}

const mapDispatchToProps = {
    updateBill: updateBill
}

export default connect(mapStateToProps, mapDispatchToProps)(BillForm)