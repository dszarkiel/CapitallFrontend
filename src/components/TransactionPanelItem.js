import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {deleteTransaction, selectTransaction} from '../actions/transactionActions'
import {TrashFill, GearWideConnected} from 'react-bootstrap-icons'

class TransactionPanelItem extends React.Component {

    handleDelete = (e) => {
        const id = parseInt(e.currentTarget.id)
        fetch(`http://localhost:3000/transactions/${id}`, {method: "DELETE"})
        .then(resp => resp.json())
        .then(() => {
            this.props.deleteTransaction(id)
        })
    }

    returnAccountName = (id) => {
        let accountName;
        let a = this.props.accounts.find(account => account.id === id)
        if (a) {
            accountName = a.name
        } else {
            accountName = "-"
        }
        return accountName
    }
    returnBudgetName = (id) => {
        let budgetName;
        let b = this.props.budgets.find(budget => budget.id === id)
        if (b) {
            budgetName = b.name
        } else {
            budgetName = "-"
        }
        return budgetName
    }
    returnGoalName = (id) => {
     let goalName;
        let g = this.props.goals.find(goal => goal.id === id)
        if (g) {
            goalName = g.name
        } else {
            goalName = "-"
        }
        return goalName
    }

    handleUpdate = (e) => {
        this.props.selectTransaction(this.props.transaction)
        this.props.history.push(`/transactions/edit/${e.currentTarget.id}`)
    }
    
    render(){

        const {id, date, description, amount, category, budget_id, account_id, to_account_id, goal_id} = this.props.transaction

        return(
  
                <tr size="sm">
                    <td className="align-middle">{date}</td>
                    <td className="align-middle">{description}</td>
                    <td className="align-middle">{category}</td>
                    <td className="align-middle">{this.returnBudgetName(budget_id)}</td>
                    <td className="align-middle">{this.returnAccountName(account_id)}</td>
                    <td className="align-middle">{this.returnAccountName(to_account_id)}</td>
                    <td className="align-middle">{this.returnGoalName(goal_id)}</td>
                    <td className="align-middle">${amount.toLocaleString()}</td>
                    <td className="transaction-btns" >
                    <Button size="sm" id={id} onClick={this.handleUpdate}>{<GearWideConnected/>}</Button>
                    <Button size="sm" id={id} variant="danger" onClick={this.handleDelete}>{<TrashFill/>}</Button>
                    </td>
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