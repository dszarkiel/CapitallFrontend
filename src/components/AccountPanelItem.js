import React from 'react';
import Button from 'react-bootstrap/Button'
import { TrashFill } from 'react-bootstrap-icons';

class AccountPanelItem extends React.Component {

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
                    <Button size="sm" id={id} variant="danger" ><TrashFill/></Button>
                    
                    </th>
                </tr>
        )
    }
}

export default AccountPanelItem