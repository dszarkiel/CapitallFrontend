import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import moment from 'moment'
import Logo from '../images/Logo.png'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import {signOutUser} from '../actions/userActions'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class NavBar extends React.Component {
    constructor(){
        super();
        this.state = {
            showModal : false
        }
    }

    handleSignUp = () => {
        this.props.history.push("/signup")
    }

    handleSignIn = () => {
        this.props.history.push("/")
    }

    handleSignOut = () => {
        localStorage.removeItem("jwt_token")
        this.props.SignOutUser()
        this.props.history.push("/")
    }

    handleUserShowCard = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    handleUserUpdateForm = () => {
        this.setState({ showModal: !this.state.showModal })
        this.props.history.push('/user/edit')
    }

    handleDeleteUser = () => {
        let id = this.props.currentUser.id
        fetch(`http://localhost:3000/users/${id}`, {method: "DELETE"})
        .then(response=> response.json())
        .then(() => {
            this.setState({ showModal: !this.state.showModal })
            this.props.SignOutUser()
            this.props.history.push('/')
        })
    }

    render(){
        return(
            <div className="nav-div">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                <Container fluid>
                    <Col lg={4}><h3 className="nav-date">{moment().format('MMM Do, YYYY')}</h3></Col>

                    <Col lg={4}>
                        <div className="text-center" >
                        <Navbar.Brand ><img src={Logo} alt="Finate" height="50px" /></Navbar.Brand>
                        </div>
                    </Col>

                    <Col lg={4}>        
                        {this.props.currentUser ?
                        <div className="text-right">    
                        {/* <Button variant="info" onClick={this.handleUserShowCard} >Account</Button>
                        <Button variant="info" onClick={this.handleSignOut} >Sign Out</Button> */}
                        <DropdownButton
                        menuAlign="right"
                        title="Menu"
                        variant=""
                        drop="down"
                        id="dropdown-menu-align-right"
                        >
                        <Dropdown.Item eventKey="1" onClick={this.handleUserShowCard}>Account</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4" onClick={this.handleSignOut}>Sign Out</Dropdown.Item>
                        </DropdownButton>
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



                {/* MODAL THAT SHOWS ALL THE CURRENT USER INFORMATION */}
                {this.props.currentUser?
                <Modal show={this.state.showModal} dialogClassName="user-view" size="lg">
                    <Modal.Header closeButton onClick={() => this.handleUserShowCard()}>
                    <Modal.Title>Your Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Form>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder={this.props.currentUser.first_name} readOnly plaintext/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder={this.props.currentUser.last_name} readOnly plaintext/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="text" placeholder={this.props.currentUser.date_of_birth} readOnly plaintext/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder={this.props.currentUser.email} readOnly plaintext/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder={this.props.currentUser.address} readOnly plaintext />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder={this.props.currentUser.address_two} readOnly plaintext/>
                        </Form.Group>
                </Form.Row>

                <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                         <Form.Label>City</Form.Label>
                         <Form.Control placeholder={this.props.currentUser.city} readOnly plaintext/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                         <Form.Label>State</Form.Label>
                         <Form.Control placeholder={this.props.currentUser.state} readOnly plaintext/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                         <Form.Label>Zip</Form.Label>
                         <Form.Control placeholder={this.props.currentUser.zipcode} readOnly plaintext/>
                        </Form.Group>
                </Form.Row>

                </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleUserShowCard()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.handleUserUpdateForm()}>
                        Edit Information
                    </Button>
                    <Button variant="danger" onClick={() => this.handleDeleteUser()}>
                        Delete Account
                    </Button>
                    </Modal.Footer>
                </Modal>
                : null}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = {
    SignOutUser: signOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))