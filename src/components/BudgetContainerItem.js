import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {connect} from 'react-redux'

class BudgetsContainerItem extends React.Component {

    renderRatio = () => {
        let budgetTransactions = [0];
        let ratio = 0;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        this.props.transactions.map(transaction => {
            if (transaction.budget_id === this.props.budget.id) {
                budgetTransactions.push(transaction.amount)
            }
        })
            budgetTransactions = Math.round(budgetTransactions.reduce(reducer))
            ratio = ((budgetTransactions/this.props.budget.amount)*100)
            return ratio
    }

    render(){
        return (
            <div>
                <ListGroup.Item>
                <h4>{this.props.budget.name}</h4>
                <div>
                <ProgressBar striped variant="success" now={this.renderRatio()} />
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

export default connect(mapStateToProps, null)(BudgetsContainerItem)