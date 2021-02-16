import React from 'react'
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Doughnut } from 'react-chartjs-2';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import moment from 'moment'
import BudgetViewItem from './BudgetViewItem'

class BudgetView extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [100, 50],
            ratio: 0
        }
    }

    renderTransactions = () => {
        let budgetTransactions = this.props.transactions.filter(trans => trans.budget_id === this.props.selectBudget.id && trans.date.split("-")[0] + "-" + trans.date.split("-")[1] === moment().format("YYYY-MM"))
        let sortedTransactions = budgetTransactions.slice().sort((a,b) => b.date > a.date ? 1: -1)
        
        return sortedTransactions.map(transObj => {
            return <BudgetViewItem key={transObj.id} transaction={transObj} />
        })
    }

    getGradient = (canvas) => {
        console.log("test", canvas)
    }

    componentWillMount = () => {
        let spentAmount = [];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        
        let budgetTransactions = this.props.transactions.filter(trans => trans.budget_id === this.props.selectBudget.id && trans.date.split("-")[0] + "-" + trans.date.split("-")[1] === moment().format("YYYY-MM"))
        budgetTransactions.forEach(trans => spentAmount.push(trans.amount))

        let totalSpent = Math.round(spentAmount.reduce(reducer))

        let leftOverAmount = this.props.selectBudget.amount - totalSpent
        if (leftOverAmount < 0) {
            leftOverAmount = 0
        }
        let ratio = (totalSpent/this.props.selectBudget.amount * 100)
        ratio = Math.round(ratio)
        
        if (ratio > 100) {
            ratio = 100
        }
        this.setState({
            data: [totalSpent, leftOverAmount],
            ratio: ratio
        })  
    }



    render(){

        return(
        <div className="budget-view shadow-lg rounded" >
        <Card className="budget-view-card">
        <Container fluid>
            <div className="row g-0">
            <Col md={6}>
            <div className="inner">
                <h1>{this.state.ratio}%</h1>
            </div>
            <Doughnut 
                data={{
                    labels: ['Spent', 'Left Over'],
                    datasets: [{
                        label: 'Budget',
                        data: this.state.data,
                        backgroundColor: [
                            'rgba(119, 190, 243, .8)',
                            'rgba(145, 246, 198, .8)',
                        ],
                        borderColor: [
                            'rgba(255, 255, 255, 1)',
                            'rgba(255, 255, 255, 1)',
                        ],
                        borderWidth: 5,
                    }]
                }}
                height={575}
                width={200}
                options={{
                    maintainAspectRatio: false,
                    cutoutPercentage: 75,
                }}
                />
            </Col>

            <Col md={6}>
                <h1>{this.props.selectBudget.name}</h1>
                <div className="budget-transactions">
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
            <div className="budget-view-back-button">
                <Button onClick={()=>this.props.history.goBack()} >Back</Button>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions,
        selectBudget: state.selectBudget
    }
}

export default connect(mapStateToProps, null)(BudgetView)