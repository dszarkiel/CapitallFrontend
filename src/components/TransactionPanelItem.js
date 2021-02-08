import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {deleteTransaction, selectTransaction} from '../actions/transactionActions'

class TransactionPanelItem extends React.Component {

    handleDelete = (e) => {
        const id = parseInt(e.target.id)
        fetch(`http://localhost:3000/transactions/${id}`, {method: "DELETE"})
        .then(resp => resp.json())
        .then(() => {
            this.props.deleteTransaction(id)
        })
    }

    returnAccountName = (id) => {
        return this.props.accounts.map(acc => {
            if (acc.id === id) {
                return acc.name
            }
        })
    }
    returnFromAccountName = (id) => {
        return this.props.accounts.map(acc => {
            if (acc.id === id) {
                return acc.name
            }
        })
    }
    // returnGoalName = (id) => {
    //     return this.props.goals.map(goal => {
    //         if (goal.id === id) {
    //             return goal.name
    //         }
    //     })
    // }

    handleUpdate = (e) => {
        this.props.selectTransaction(this.props.transaction)
        this.props.history.push(`/transactions/edit/${e.target.id}`)
    }
    
    render(){

        const {id, date, description, amount, category, account_id, to_account_id, goal_id} = this.props.transaction

        return(
  
                <tr>
                    <th>{date}</th>
                    <th>{description}</th>
                    <th>{category}</th>
                    <th>{this.returnAccountName(account_id)}</th>
                    <th>{this.returnFromAccountName(to_account_id)}</th>
                    <th></th>
                    {/* <th>{this.returnGoalName(goal_id)}</th> */}
                    <th>${amount}</th>
                    <th className="transaction-btns" >
                    <Button size="sm" id={id} onClick={this.handleUpdate} >Update</Button>
                    <Button size="sm" id={id} variant="danger"  onClick={this.handleDelete} >Delete</Button>
                    </th>
                    <th></th>
                </tr>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts,
        budgets: state.budgets,
        goals: state.goals
    }
}

const mapDispatchToProps = {
    deleteTransaction: deleteTransaction,
    selectTransaction: selectTransaction
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TransactionPanelItem))