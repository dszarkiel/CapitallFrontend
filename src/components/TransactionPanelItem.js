import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {deleteTransaction} from '../actions/transactionActions'

class TransactionPanelItem extends React.Component {

    handleDelete = (e) => {
        const id = parseInt(e.target.id)
        fetch(`http://localhost:3000/transactions/${id}`, {method: "DELETE"})
        .then(resp => resp.json())
        .then(() => {
            this.props.deleteTransaction(id)
        })
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
                    <Button size="sm">Update</Button>
                    <Button size="sm" variant="danger" id={id} onClick={this.handleDelete} >Delete</Button>
                    </th>
                    <th></th>
                </tr>

        )
    }
}

const mapDispatchToProps = {
    deleteTransaction: deleteTransaction
}

export default connect(null, mapDispatchToProps)(TransactionPanelItem)