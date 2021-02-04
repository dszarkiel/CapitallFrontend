import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import moment from 'moment'
import Logo from '../images/Logo.png'
import UserShowCard from './UserShowCard'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


class NavBar extends React.Component {
    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    handleSignUp = () => {
        this.props.history.push("/signup")
    }

    handleSignIn = () => {
        this.props.history.push("/")
    }

    handleUserShowCard = () => {
        this.setState({ showHide: !this.state.showHide })
    }

    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                <Container fluid>
                    <Col lg={4}>{moment().format('MMM Do, YY')}</Col>

                    <Col lg={4}>
                        <div className="text-center" >
                        <Navbar.Brand ><img src={Logo} height="50px" /></Navbar.Brand>
                        </div>
                    </Col>

                    <Col lg={4}>        
                        {this.props.currentUser ?
                        <div className="text-right">    
                        <Button variant="info" onClick={this.handleUserShowCard} >Account</Button>
                        <Button variant="info">Sign Out</Button>
                        </div>
                            :
                            <div className="text-right" >
                        <Button variant="info" onClick={this.handleSignIn}>Sign In</Button>
                        <Button variant="info" onClick={this.handleSignUp}>Sign Up</Button>
                        </div>
                    }</Col>
                </Container>
                </Navbar.Collapse>
                </Navbar>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleUserShowCard()}>
                    <Modal.Title>Your Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    <Form>
                    <Form.Row>

                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Readonly input here..." readOnly plaintext/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Readonly input here..." readOnly plaintext/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Readonly input here..." readOnly plaintext/>
                    </Form.Group>

                    </Form.Row>

                    </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleUserShowCard()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.handleUserShowCard()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(withRouter(NavBar))