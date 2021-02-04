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

    componentDidMount(){
        if (!this.props.currentUser) {
            this.props.history.push("/")
        }
    }

    render(){
        return(
            <div className="dashboard" >
                <Container fluid>
                <Row>
                    <Col lg={8}><TransactionContainer history={this.props.history}/></Col>
                    <Col sm={4}><AccountsContainer/></Col>
                </Row>
                <Row>
                    <Col sm><BudgetsContainer/></Col>
                    <Col md><GoalsContainer/></Col>
                    <Col sm><BillsContainer/></Col>
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