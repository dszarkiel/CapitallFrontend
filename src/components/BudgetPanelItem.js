import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { deleteBudget, selectBudget } from '../actions/budgetActions';

class BudgetPanelItem extends React.Component {

    handleUpdate = (e) => {
        const id = e.target.id
        this.props.selectBudget(this.props.budget)
        this.props.history.push(`/budgets/edit/${id}`)
    }

    handleDelete = (e) => {
        const id = parseInt(e.target.id)
        fetch(`http://localhost:3000/budgets/${id}`, {method: "DELETE"})
        .then(response => response.json())
        .then(() => {
            this.props.deleteBudget(id)
        })
    }

    render(){

        const {id, name, amount, category} = this.props.budget

        return(
                 <tr>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>${amount} / Month</td>
                    <td className="budget-btns" >
                    <Button size="sm" id={id} onClick={this.handleUpdate}>Update</Button>
                    <Button size="sm" id={id} variant="danger" onClick={this.handleDelete}>Delete</Button>
                    </td>
                </tr>
        )
    }
}

const mapDispatchToProps = {
    deleteBudget: deleteBudget,
    selectBudget: selectBudget
}

export default connect(null, mapDispatchToProps)(withRouter(BudgetPanelItem))