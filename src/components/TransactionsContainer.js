import React from 'react';
import Table from 'react-bootstrap/Table';
import {connect} from 'react-redux';
import TransactionItem from './TransactionItem'

class TransactionsContainer extends React.Component {

    renderTransactions = () => {
        return this.props.transactions.map(transObj => {
            return <TransactionItem key={transObj.id} transaction={transObj} />
        })
    }

    render(){
        return(
            <div className="transactions-container">
                <h2>Transactions</h2>
                <Table responsive>
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, null)(TransactionsContainer)