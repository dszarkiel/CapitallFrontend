import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {connect} from 'react-redux'


class GoalContainerItem extends React.Component {

    renderGoalProgress = () => {
        if(!this.props.goal.complete){

            let goalTransactions = [0];
            let progress = 0;
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
            this.props.transactions.map(transaction => {
                if(transaction.goal_id === this.props.goal.id) {
                    goalTransactions.push(transaction.amount)
                }
            })
    
            goalTransactions = Math.round(goalTransactions.reduce(reducer))
            progress = ((goalTransactions/this.props.goal.amount)*100)
            return progress
        } else {
            return 100
        }
    }



    render(){
        return (
            <div>
                <ListGroup.Item>
                <h5>{this.props.goal.name}</h5>
                <div>
                <ProgressBar animated striped variant="info" now={this.renderGoalProgress()} />
                </div>
                </ListGroup.Item>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, null)(GoalContainerItem)