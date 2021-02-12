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

    hanldeTransactionView = () => {
        this.props.selectAccount(this.props.account)
        this.props.history.push(`/accounts/${this.props.account.id}/transactions`)
    }

    render(){

        const {id, name, balance, category} = this.props.account

        return(
                 <tr>
                    <td className="align-middle">{name}</td>
                    <td className="align-middle">{category}</td>
                    <td className="align-middle">${balance}</td>
                    <td className="align-middle" >
                    <Button size="sm" id={id} onClick={this.handleUpdate} >Update</Button>
                    <Button size="sm" id={id} onClick={this.hanldeTransactionView}>View Transactions</Button>
                    <Button size="sm" id={id} variant="danger" onClick={this.handleDelete}>Delete</Button>
                    </td>
                </tr>
        )
    }
}

const mapDispatchToProps = {
    deleteAccount: deleteAccount,
    selectAccount: selectAccount
}

export default connect(null, mapDispatchToProps)(withRouter(AccountPanelItem))