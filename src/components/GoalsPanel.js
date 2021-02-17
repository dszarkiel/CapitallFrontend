import React from 'react'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import GoalPanelItem from './GoalPanelItem'


class GoalsPanel extends React.Component {

    renderGoals = () => {
        return this.props.goals.map(goalObj => {
            return <GoalPanelItem key={goalObj.id} goal={goalObj} />
        })
    }

    render(){
        return(
            <div className="goals-panel shadow-lg rounded" >
                <h2>Goals Panel</h2>
                <div className="goals-panel-table">
                <Table striped bordered hover size="lg" responsive>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Due Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Left to save</th>
                    <th>Days left</th>
                    <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderGoals()}
                </tbody>
                </Table>
                </div>
                <Button onClick={() => this.props.history.push('/dashboard')}>Back</Button>
                <Button onClick={() => this.props.history.push('/goals/new')} variant="success">Add New Goal</Button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        goals: state.goals
    }
}



export default connect(mapStateToProps, null)(GoalsPanel)