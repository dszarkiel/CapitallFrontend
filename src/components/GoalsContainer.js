import React from 'react';
import {connect} from 'react-redux'
import GoalContainerItem from './GoalContainerItem'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class GoalsContainer extends React.Component {

    renderGoals = () => {
        return this.props.goals.map(goalObj => {
            return <GoalContainerItem key={goalObj.id} goal={goalObj} />
        })
    }

    render(){
        return(
            <div className="goals-container">
                <h2>Goals</h2>
                <div className="goals-table">
                <ListGroup variant="flush">
                {this.renderGoals()}
                </ListGroup>
                </div>
                <Button className="goals-view-btn" onClick={() => this.props.history.push('/goals')} >View</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        goals: state.goals,
    }
}

export default connect(mapStateToProps)(GoalsContainer)