import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {signInUser} from '../actions/userActions'
import {Spring} from 'react-spring/renderprops';

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
// import Logo from '../images/Logo.png'
import Logo from '../images/Moneytree.png'


class SignIn extends React.Component {
    state = {
        email: "dom@gmail.com",
        password: "abc",
        error: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/api/v1/auth', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(userObj => {
            if (userObj.error){
                this.setState({
                    error: userObj.error
                })
            } else {
               localStorage.setItem("jwt_token", userObj.token)
               this.props.signInUser(userObj.user)
               this.props.history.push("/dashboard")
            } 
        })       
    }

    render(){
        return(
            <div className="sign-in-div">

                <Card>

                <Container fluid>
                <div className="row g-0">
                                <Col md={4} className="introLogo">
                                    <Card.Img src={Logo} />
                                </Col>

                                <Col md={8} className="text-center">
                                <Card.Body>
                                    <Card.Title>
                                    <Spring config={{friction: 100}}
                                    from={{ opacity: 0 }}
                                    to={{ opacity: 1 }}>
                                    {props => 
                                    <div style={props}>
                                    <h1>Welcome To Capitall!</h1>
                                    <p>
                                    App that was designed to help you achieve financial success. Every dollar earned should be spent responsibly and we can help you do that by
                                    providing you with tools to track all transactions, budget, set goals and reminders for any upcoming bills. To begin, please sign in our sign up!
                                    </p>
                                    </div>
                                    }
                                    </Spring>
                                    </Card.Title>
                                    <Card.Text>
                                    <Form onSubmit={this.handleSubmit} >
                                    <Form.Group controlId="formBasicEmail">



                                        <h3>Email Address</h3>
                                        {this.state.error ? <p className="error" style={{color: "red"}}>{this.state.error}</p> : null}
                                        <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <h3>Password</h3>
                                        <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" width="100px" >
                                        Sign In
                                    </Button>
                                    </Form>
                                    </Card.Text>
                                </Card.Body>
                                </Col>
                                </div>
                            </Container>
                        </Card>


            </div>
        )
    }
}

const mapDispatchToProps = {
    signInUser: signInUser
}

export default connect(null, mapDispatchToProps)(SignIn)