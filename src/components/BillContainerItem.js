import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import moment from 'moment'

class BillContainerItem extends React.Component {

    renderDaysRemaining = () => {
        let daysLeft = moment().diff(this.props.bill.due_date, "days")
        if (daysLeft > 0) {
            return `${daysLeft} past due`
        } else {
            let posInteger = Math.abs(daysLeft)
            return `${posInteger} days left`
        }
    }

    renderColor = () => {
        const status  = this.renderDaysRemaining()
        const day = status.split(" ")
        let days = parseInt(day[0])
        if (days <= 0 || day[1] === "past") {
            return "red"
        } else if( days <= 7) {
            return "orange"
        } else {
            return "black"
        }
    }


    render(){

        const {name, amount} = this.props.bill

        return (
            <div>
                <ListGroup.Item>
                <Container fluid>
                    <Row>
                    <Col sm><h5>{name}</h5></Col>
                    <Col sm><h5>${amount.toLocaleString()}</h5></Col>
                    <Col sm><h5 style={{color: this.renderColor()}}>{this.renderDaysRemaining()}</h5></Col>
                    </Row>
                    </Container>
                </ListGroup.Item>
            </div>
        )
    }
}

export default BillContainerItem