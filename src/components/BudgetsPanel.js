import React from 'react'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import BudgetPanelItem from './BudgetPanelItem'



class BudgetsPanel extends React.Component {

    renderBudgets = () => {
        return this.props.budgets.map(budget => {
            return <BudgetPanelItem key={budget.id} budget={budget} />
        })
    }

    render(){
        return(
            <div className="budgets-panel shadow-lg rounded" >
                <h2>Budgets Panel</h2>
                <div className="budgets-panel-table">
                <Table striped bordered hover size="lg" responsive>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderBudgets()}
                </tbody>
                </Table>
                </div>
                <Button onClick={() => this.props.history.push('/dashboard')}>Back</Button>
                <Button onClick={() => this.props.history.push('/budgets/new')} variant="success">Add New Budget</Button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        budgets: state.budgets
    }
}



export default connect(mapStateToProps, null)(BudgetsPanel)