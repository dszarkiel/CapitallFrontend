import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Doughnut } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button'

class BudgetView extends React.Component {


    render(){



        return(
        <div className="budget-view shadow-lg rounded" >
        <Card >
        <Container>
            <div className="row g-0">
            <Col md={6}>
            <Doughnut 
                data={{
                    labels: ['Spent', 'Left Over'],
                    datasets: [{
                        label: 'Budget',
                        data: [100, 60],
                        backgroundColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 2,
                        weight: 4,
                    }]
                }}
                height={600}
                width={200}
                options={{
                    maintainAspectRatio: false,
                }}
                />
            </Col>

            <Col md={6}>
            <h1>TEST</h1>
            </Col>

            </div>
            </Container>
            </Card>
            <div>
                <Button onClick={()=>this.props.history.push('/budgets')} >Back</Button>
            </div>
            </div>
        )
    }
}



export default BudgetView