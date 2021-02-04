import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import ProgressBar from 'react-bootstrap/ProgressBar'

class BudgetsContainerItem extends React.Component {
    state = {
        budgetAmount: this.props.budget.amount
    }


    render(){
        return (
            <div>
                <ListGroup.Item>
                <h4>{this.props.budget.category}</h4>
                <div>
                <ProgressBar striped variant="success" now={40} />
                </div>
                </ListGroup.Item>
            </div>
        )
    }
}

export default BudgetsContainerItem