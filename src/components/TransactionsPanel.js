import React from 'react'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import TransactionPanelItem from './TransactionPanelItem'
import Form from 'react-bootstrap/Form'
import {FormControl, Container, Row, Col} from 'react-bootstrap';


class TransactionsPanel extends React.Component {
    state = {
        searchDescription: "",
        searchAmount: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // SORT TRANSACTIONS BY DATE AND FILTER BASED ON SEARCH ENTRY
    renderTransactions = () => {
        let sortedTransactions = this.props.transactions.slice().sort((a,b) => b.date > a.date ? 1: -1)
        let filteredTransactions = sortedTransactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchDescription))
        filteredTransactions = filteredTransactions.filter(transaction => transaction.amount.toString().includes(this.state.searchAmount))
        return filteredTransactions.map(transObj => {
            return <TransactionPanelItem key={transObj.id} transaction={transObj} />
        })
    }

    render(){
        return(
            <div className="transactions-panel" >
                <Container>
                <Row>

                <Col>
                <Form inline>

                <Form.Group as={Col} controlId="formGridSearch">
                <FormControl type="text" name="searchDescription" onChange={this.handleInputChange} placeholder="Search Description" className="mr-sm-2"  />
                </Form.Group>

                </Form>
                </Col>

                <Col><h2>Transactions Panel</h2> </Col>

                <Col>
                <Form inline>   
                <Form.Group as={Col} controlId="formGridSearch">
                <FormControl type="number" name="searchAmount" onChange={this.handleInputChange} placeholder="Search Amount" className="mr-sm-2" />
                </Form.Group>
                </Form>
                </Col>

                </Row>
                </Container>

                <div className="transactions-panel-table">
                <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Budget</th>
                    <th>From Account</th>
                    <th>To Account</th>
                    <th>Goal</th>
                    <th>Amount</th>
                    <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderTransactions()}
                </tbody>
                </Table>
                </div>
                <Button onClick={() => this.props.history.push('/dashboard')}>Back</Button>
                <Button onClick={() => this.props.history.push('/transactions/new')} variant="success">Create New Transaction</Button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    }
}



export default connect(mapStateToProps, null)(TransactionsPanel)