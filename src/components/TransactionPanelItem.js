import React from 'react';
import Button from 'react-bootstrap/Button'

class TransactionPanelItem extends React.Component {
    
    render(){

        const {date, description, amount, category, account_id, to_account_id, goal_id} = this.props.transaction

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
                    <Button size="sm" variant="danger" >Delete</Button>
                    </th>
                    <th></th>
                </tr>

        )
    }
}

export default TransactionPanelItem