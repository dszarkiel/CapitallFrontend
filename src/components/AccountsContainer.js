import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class AccountsContainer extends React.Component {

    calculateAssets = () => {
        let assetAccountAmt = [0];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let assets = this.props.accounts.filter(account => account.category === "Checking" || account.category === "Savings" || account.category === "Cash")
        assets.forEach(asset => assetAccountAmt.push(asset.balance))
        let totalAssets = Math.round(assetAccountAmt.reduce(reducer))
        return totalAssets
    }
    calculateLiabilities = () => {
        let liabilityAccountAmt = [0];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let liabilities = this.props.accounts.filter(account => account.category === "Loan" || account.category === "Credit Card" || account.category === "Mortgage")
        liabilities.forEach(account => liabilityAccountAmt.push(account.balance))
        let totalLiabilities = Math.round(liabilityAccountAmt.reduce(reducer))
        return totalLiabilities
    }
    calculateInvestments = () => {
        let investmentAccountAmt = [0];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let Investments = this.props.accounts.filter(account => account.category === "Investments")
        Investments.forEach(account => investmentAccountAmt.push(account.balance))
        let totalInvestments = Math.round(investmentAccountAmt.reduce(reducer))
        return totalInvestments
    }
    renderNetWorth = () => {
        let assets = this.calculateAssets()
        let liabilities = this.calculateLiabilities()
        let investments = this.calculateInvestments()
        let netWorth = assets + investments - liabilities
        return netWorth
    }

    render(){
        return(
            <div className="accounts-container shadow-lg rounded">
                <h2>Accounts</h2>
                <div className="accounts-table" >

                <ListGroup.Item>
                    <Container fluid>
                    <Row>
                    <Col sm><h5>Assets</h5></Col>
                    <Col sm><h5 className="assets">${this.calculateAssets().toLocaleString()}</h5></Col>
                    </Row>
                    </Container>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Container fluid>
                    <Row>
                    <Col sm><h5>Liabilities</h5></Col>
                    <Col sm><h5 className="liabilities">${this.calculateLiabilities().toLocaleString()}</h5></Col>
                    </Row>
                    </Container>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Container fluid>
                    <Row>
                    <Col sm><h5>Investments</h5></Col>
                    <Col sm><h5 className="assets">${this.calculateInvestments().toLocaleString()}</h5></Col>
                    </Row>
                    </Container>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Container fluid>
                    <Row>
                    <Col sm><h4>Net Worth</h4></Col>
                    <Col sm><h4>${this.renderNetWorth().toLocaleString()}</h4></Col>
                    </Row>
                    </Container>
                </ListGroup.Item>
                
                </div>
                <Button className="account-view-btn" onClick={() => this.props.history.push('/accounts')} >View Accounts</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, null)(AccountsContainer)