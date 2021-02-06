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

    render(){
        return(
            <div className="transactions-panel" >
                <h2>Transactions Panel</h2>
                <div className="transactions-panel-table">
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