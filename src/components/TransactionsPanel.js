import React from 'react'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import TransactionPanelItem from './TransactionPanelItem'


class TransactionsPanel extends React.Component {

    renderTransactions = () => {
        return this.props.transactions.map(transObj => {
            return <TransactionPanelItem key={transObj.id} transaction={transObj} />
        })
    }

    handleBackBtn = () => {
        this.props.history.push('./dashboard')
    }

    render(){
        return(
            <div className="transactions-panel" >
                <h2>Transactions Panel</h2>
                <Table responsive>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>From Account</th>
                    <th>To Account</th>
                    <th>Goal</th>
                    <th>Amount</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {this.renderTransactions()}
                </tbody>
                </Table>

                <Button onClick={this.handleBackBtn} >Back</Button>
                <Button>Create New Transaction</Button>

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