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
                    <th>id-{account_id}</th>
                    <th>id-{to_account_id}</th>
                    <th>id-{goal_id}</th>
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

const mapDispatchToProps = {
    deleteTransaction: deleteTransaction,
    selectTransaction: selectTransaction
}

export default connect(null, mapDispatchToProps)(withRouter(TransactionPanelItem))