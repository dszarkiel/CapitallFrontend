import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import { deleteAccount } from '../actions/accountActions';

class AccountPanelItem extends React.Component {

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
                    <th>{name}</th>
                    <th>{category}</th>
                    <th>${balance}</th>
                    <th className="account-btns" >
                    <Button size="sm" id={id}>Update</Button>
                    <Button size="sm" id={id} variant="primary" >View Transactions</Button>
                    <Button size="sm" id={id} variant="danger" onClick={this.handleDelete}>Delete</Button>
                    
                    
                    </th>
                </tr>
        )
    }
}

const mapDispatchToProps = {
    deleteAccount: deleteAccount
}

export default connect(null, mapDispatchToProps)(AccountPanelItem)