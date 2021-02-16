import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { deleteBudget, selectBudget } from '../actions/budgetActions';
import {TrashFill, GearWideConnected} from 'react-bootstrap-icons'

class BudgetPanelItem extends React.Component {

    handleUpdate = (e) => {
        const id = e.currentTarget.id
        this.props.selectBudget(this.props.budget)
        this.props.history.push(`/budgets/edit/${id}`)
    }

    handleDelete = (e) => {
        const id = parseInt(e.currentTarget.id)
        fetch(`http://localhost:3000/budgets/${id}`, {method: "DELETE"})
        .then(response => response.json())
        .then(() => {
            this.props.deleteBudget(id)
        })
    }

    handleView = () => {
        this.props.selectBudget(this.props.budget)
        this.props.history.push('/budgetview')
    }

    render(){

        const {id, name, amount, category} = this.props.budget

        return(
                 <tr>
                    <td className="align-middle">{name}</td>
                    <td className="align-middle">{category}</td>
                    <td className="align-middle">${amount.toLocaleString()} / Month</td>
                    <td className="align-middle" >
                    <Button size="sm" id={id} onClick={this.handleView}>View</Button>
                    <Button size="sm" id={id} onClick={this.handleUpdate}>{<GearWideConnected/>}</Button>
                    <Button size="sm" id={id} variant="danger" onClick={this.handleDelete}>{<TrashFill/>}</Button>
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