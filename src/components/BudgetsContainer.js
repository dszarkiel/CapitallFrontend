import React from 'react';
import {connect} from 'react-redux'
import BudgetsContainerItem from './BudgetContainerItem'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class BudgetsContainer extends React.Component {

    renderBudgets = () => {
        return this.props.budgets.map(budgetObj => {
            return <BudgetsContainerItem key={budgetObj.id} budget={budgetObj} />
        })
    }

    render(){
        return(
            <div className="budgets-container">
                <h2>Budgets</h2>
                <div className="budgets-table">
                <ListGroup variant="flush">
                {this.renderBudgets()}
                </ListGroup>
                </div>
                <Button className="budgets-view-btn" >View</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        budgets: state.budgets
    }
}

export default connect(mapStateToProps)(BudgetsContainer)