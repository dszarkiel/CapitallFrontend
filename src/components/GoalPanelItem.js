import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { deleteGoal, selectGoal, updateGoal } from '../actions/goalsActions';
import moment from 'moment'

class GoalPanelItem extends React.Component {

    handleUpdate = (e) => {
        const id = e.target.id
        this.props.selectGoal(this.props.goal)
        this.props.history.push(`/goals/edit/${id}`)
    }

    handleMarkComplete = (e) => {
        const id = e.target.id
        fetch(`http://localhost:3000/goals/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                complete: true
            })
        })
        .then(response => response.json())
        .then(updatedGoal => {
            this.props.updateGoal(updatedGoal)
        })
    }

    handleDelete = (e) => {
        const id = parseInt(e.target.id)
        fetch(`http://localhost:3000/goals/${id}`, {method: "DELETE"})
        .then(response => response.json())
        .then(() => {
            this.props.deleteGoal(id)
        })
    }

    handleView = () => {
        this.props.selectGoal(this.props.goal)
        this.props.history.push('/goalview')
    }

    renderDaysLeft = () => {
        let daysLeft = Math.abs(moment().diff(this.props.goal.due_date, "days"))
        return daysLeft
    }

    renderAmountLeft = () => {
        let goalTransactions = [0];
        let balanceRemaining = 0;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        this.props.transactions.map(transaction => {
            if (transaction.goal_id === this.props.goal.id) {
                goalTransactions.push(transaction.amount)
            }
        })
        goalTransactions = Math.round(goalTransactions.reduce(reducer))
        balanceRemaining = this.props.goal.amount - goalTransactions
        return balanceRemaining.toLocaleString()
    }

    render(){

        const {id, name, description, amount, due_date, complete} = this.props.goal

        return(
                 <tr>
                    <td className="align-middle">{name}</td>
                    <td className="align-middle">{due_date}</td>
                    <td className="align-middle">{description}</td>
                    <td className="align-middle">${amount.toLocaleString()}</td>
                    <td className="align-middle">${this.renderAmountLeft()} left</td>
                    <td className="align-middle">{this.renderDaysLeft()}</td>
                    <td className="align-middle">
                    {complete ? 
                    <Button size="sm" disabled variant="success" >Completed</Button>
                    :
                    <span>
                    <Button size="sm" id={id} variant="success" onClick={this.handleMarkComplete} >Complete</Button>
                    <Button size="sm" id={id} onClick={this.handleView}>View</Button>
                    <Button size="sm" id={id} onClick={this.handleUpdate} >Update</Button>
                    </span>
                    }
                    <Button size="sm" id={id} variant="danger" onClick={this.handleDelete}>Delete</Button>
                    </td>
                </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    }
}

const mapDispatchToProps = {
    deleteGoal: deleteGoal,
    selectGoal: selectGoal,
    updateGoal: updateGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GoalPanelItem))