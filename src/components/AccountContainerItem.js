import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class AccountContainerItem extends React.Component {


    render(){

        const {name, balance, category} = this.props.account

        return (
            <div>
                <ListGroup.Item>
                {name} - {category} - ${balance} 
                </ListGroup.Item>
            </div>
        )
    }
}

export default AccountContainerItem