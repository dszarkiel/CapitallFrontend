import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { deleteAccount, selectAccount } from '../actions/accountActions';

class AccountPanelItem extends React.Component {

    handleUpdate = (e) => {
        const id = e.target.id
        this.props.selectAccount(this.props.account)
        this.props.history.push(`/accounts/edit/${id}`)
    }

    handleDelete = (e) => {
        const id = parseInt(e.target.id)
        fetch(`http://localhost:3000/accounts/${id}`, {method: "DELETE"})
        .then(response => response.json())
        .then(() => {
            this.props.deleteAccount(id)
        })
    }

    render(){

        const {id, name, balance, category} = this.props.account

        return(
                 <tr>
                    <th className="align-middle">{name}</th>
                    <th className="align-middle">{category}</th>
                    <th className="align-middle">${balance}</th>
                    <th className="align-middle" >
                    <Button size="sm" id={id} onClick={this.handleUpdate} >Update</Button>
                    <Button size="sm" id={id} >View Transactions</Button>
                    <Button size="sm" id={id} variant="danger" onClick={this.handleDelete}>Delete</Button>
                    </th>
                </tr>
        )
    }
}

const mapDispatchToProps = {
    deleteAccount: deleteAccount,
    selectAccount: selectAccount
}

export default connect(null, mapDispatchToProps)(withRouter(AccountPanelItem))