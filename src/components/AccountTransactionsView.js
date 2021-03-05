import React from 'react'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import TransactionPanelItem from './TransactionPanelItem'
import Form from 'react-bootstrap/Form'
import {Container, Row, Col} from 'react-bootstrap';

class AccountTransactionsView extends React.Component {
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
        let accountTransactions = this.props.transactions.filter(trans => trans.account_id === this.props.selectAccount.id)
        let sortedTransactions = accountTransactions.slice().sort((a,b) => b.date > a.date ? 1: -1)
        let filteredTransactions = sortedTransactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchDescription))
        filteredTransactions = filteredTransactions.filter(transaction => transaction.amount.toString().includes(this.state.searchAmount))
        return filteredTransactions.map(transObj => {
            return <TransactionPanelItem key={transObj.id} transaction={transObj} />
        })
    }

    render(){
        return(
            <div>


            {this.props.selectAccount ? 
            <div className="transactions-panel shadow-lg rounded" >
                <Container fluid>
                <Row>


                <Col sm>    
                        <Form inline>
                        <Form.Label htmlFor="inlineFormInputName2" srOnly>
                            Search By Description
                        </Form.Label>
                        <Form.Control
                            className="mb-2 mr-sm-2"
                            id="inlineFormInputName2"
                            style={{margin: "8px"}} 
                            type="text" 
                            name="searchDescription" 
                            onChange={this.handleInputChange} 
                            placeholder="Search Description"
                            />
                        <Form.Label htmlFor="inlineFormInputName2" srOnly>
                            Search By Amount
                        </Form.Label>
                        <Form.Control
                            className="mb-2 mr-sm-2"
                            id="inlineFormInputName2"
                            style={{margin: "8px"}} 
                            type="number" 
                            name="searchAmount" 
                            onChange={this.handleInputChange} 
                            placeholder="Search Amount"
                            />
                        </Form>
                </Col>

                <Col sm><h2>Transactions from: {this.props.selectAccount.name}</h2> </Col>

                <Col sm>
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
                <Button onClick={() => this.props.history.push('/accounts')}>Back</Button>
                <Button onClick={() => this.props.history.push('/transactions/new')} variant="success">Create New Transaction</Button>

            </div>
            :
            <div>
                {this.props.history.goBack()}
            </div>


        }           
    </div>
)
}
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions,
        selectAccount: state.selectAccount
    }
}



export default connect(mapStateToProps, null)(AccountTransactionsView)