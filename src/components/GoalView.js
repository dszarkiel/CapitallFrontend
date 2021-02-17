import React from 'react'
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Doughnut } from 'react-chartjs-2';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import GoalViewItem from './GoalViewItem'

class GoalView extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [100, 50],
            ratio: 0
        }
    }

    renderTransactions = () => {
        let goalTransactions = this.props.transactions.filter(trans => trans.goal_id === this.props.selectGoal.id)
        let sortedTransactions = goalTransactions.slice().sort((a,b) => b.date > a.date ? 1: -1)
        
        return sortedTransactions.map(transObj => {
            return <GoalViewItem key={transObj.id} transaction={transObj} />
        })
    }

    componentWillMount = () => {
        let spentAmount = [0];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        
        let goalTransactions = this.props.transactions.filter(trans => trans.goal_id === this.props.selectGoal.id)
        goalTransactions.forEach(trans => spentAmount.push(trans.amount))

        let totalSpent = Math.round(spentAmount.reduce(reducer))

        let leftOverAmount = this.props.selectGoal.amount - totalSpent
        if (leftOverAmount < 0) {
            leftOverAmount = 0
        }
        let ratio = (totalSpent/this.props.selectGoal.amount * 100)
        ratio = Math.round(ratio)
        
        if (ratio > 100) {
            ratio = 100
        }
        console.log(ratio)
        this.setState({
            data: [totalSpent, leftOverAmount],
            ratio: ratio
        })  
    }



    render(){

        return(
        <div className="goal-view shadow-lg rounded" >
        <Card className="goal-view-card">
        <Container fluid>
            <div className="row g-0">
            <Col md={6}>
            <div className="inner">
                <h1>{this.state.ratio}%</h1>
            </div>
            <div className="budget-chart">
            <Doughnut 
                data={{
                    labels: ['Saved', 'Remaining'],
                    datasets: [{
                        label: 'Goal',
                        data: this.state.data,
                        backgroundColor: [
                            'rgba(145, 246, 198, .8)',
                            'rgba(119, 190, 243, .8)',
                        ],
                        borderColor: [
                            'rgba(255, 255, 255, 1)',
                            'rgba(255, 255, 255, 1)',
                        ],
                        borderWidth: 5,
                    }]
                }}
                height={600}
                width={200}
                options={{
                    maintainAspectRatio: false,
                    cutoutPercentage: 75,
                }}
                />
                </div>
            </Col>

            <Col md={6}>
                <h1>{this.props.selectGoal.name}</h1>
                <div className="goal-transactions">
                <Table striped bordered hover size="md" responsive>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderTransactions()}
                </tbody>
                </Table>
                </div>
            </Col>

            </div>
            </Container>
            </Card>
            <div className="goal-view-back-button">
                <Button onClick={()=>this.props.history.goBack()} >Back</Button>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions,
        selectGoal: state.selectGoal
    }
}

export default connect(mapStateToProps, null)(GoalView)