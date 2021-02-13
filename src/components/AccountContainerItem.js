import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
class AccountContainerItem extends React.Component {


    render(){

        const {name, balance, category} = this.props.account

        return (
            <div>
                <ListGroup.Item>
                    <Container fluid>
                    <Row>
                    <Col sm><h4>{name}</h4></Col>
                    <Col sm><h4>${balance}</h4></Col>
                    </Row>
                    </Container>
                </ListGroup.Item>
            </div>
        )
    }
}

export default AccountContainerItem