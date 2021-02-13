import React from 'react';
import Table from 'react-bootstrap/Table';
import {connect} from 'react-redux';
import TransactionItem from './TransactionContainerItem'
import Button from 'react-bootstrap/Button'

class TransactionsContainer extends React.Component {

    renderTransactions = () => {
        let sortedTransactions = this.props.transactions.slice().sort((a,b) => b.date > a.date ? 1: -1)
        return sortedTransactions.map(transObj => {
            return <TransactionItem key={transObj.id} transaction={transObj} />
        })
    }

    handleTransactionPanel = () => [
        this.props.history.push('/transactions')
    ]

    render(){
        return(
            <div className="transactions-container">
                <h2>Transactions</h2>
                <div className="transactions-table" >
                <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderTransactions()}
                </tbody>
                </Table>
                </div>
                <Button className="transaction-view-btn" onClick={this.handleTransactionPanel} >View</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, null)(TransactionsContainer)