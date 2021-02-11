import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class BillContainerItem extends React.Component {


    render(){

        const {name, amount, due_date} = this.props.bill

        return (
            <div>
                <ListGroup.Item>
                {name} / ${amount} / {due_date} 
                </ListGroup.Item>
            </div>
        )
    }
}

export default BillContainerItem