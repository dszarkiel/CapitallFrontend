import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import ProgressBar from 'react-bootstrap/ProgressBar'
import moment from 'moment'
import {connect} from 'react-redux'


class BudgetsContainerItem extends React.Component {


    // FILTERS OUT TRANSACTION AMOUNTS FROM TRANSACTIONS THAT ONLY PERTAIN TO OUR CURRENT BUDGET IN CURRENT MONTH 
    filterTransactions = () => {
        let budgetTransactionsAmounts = [0];
        this.props.transactions.map(transaction => {
            if (transaction.budget_id === this.props.budget.id && transaction.date.split("-")[0] + "-" + transaction.date.split("-")[1] === moment().format("YYYY-MM")) {
                budgetTransactionsAmounts.push(transaction.amount)
            }
        })
        return budgetTransactionsAmounts
    }

    // RENDERS RATIO FOR TRANSACTIONS THAT MATCH BUDGET_ID AND CHECKS FOR CURRENT YEAR + MONTH
    renderRatio = () => {
        let ratio = 0;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let budgetTransactionsAmounts = this.filterTransactions()
            budgetTransactionsAmounts = Math.round(budgetTransactionsAmounts.reduce(reducer))
            ratio = ((budgetTransactionsAmounts/this.props.budget.amount)*100)
            return ratio
    }

    // RENDERS PROGRESS BAR COLOR DEPENDING ON RATIO, FUNCTION NEEDS REFACTORING
    renderBarStatus = () => {
        let ratio = 0;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

            let budgetTransactionsAmounts = this.filterTransactions()

            budgetTransactionsAmounts = Math.round(budgetTransactionsAmounts.reduce(reducer))
            ratio = ((budgetTransactionsAmounts/this.props.budget.amount)*100)

            if (ratio > 100) {
                return "danger"
            } if ( ratio > 80) {
                return "warning"
            } else {
                return "success"
            }
    }

    render(){
        return (
            <div>
                <ListGroup.Item>
                <h5>{this.props.budget.name}</h5>
                <div>
                <ProgressBar animated striped variant={this.renderBarStatus()} now={this.renderRatio()} />
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