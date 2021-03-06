import React from 'react';
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TransactionContainer from './TransactionsContainer'
import AccountsContainer from './AccountsContainer'
import BudgetsContainer from './BudgetsContainer'
import GoalsContainer from './GoalsContainer'
import BillsContainer from './BillsContainer'



class Dashboard extends React.Component {

    render(){
        return(
            <div className="dashboard">
                <Container fluid>
                <Row>
                    <Col lg={8}><TransactionContainer history={this.props.history}/></Col>
                    <Col sm={4}><AccountsContainer history={this.props.history}/></Col>
                </Row>
                <Row>
                    <Col sm><BudgetsContainer history={this.props.history}/></Col>
                    <Col md><GoalsContainer history={this.props.history}/></Col>
                    <Col sm><BillsContainer history={this.props.history}/></Col>
                </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Dashboard)