import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {signInUser} from '../actions/signInUser'

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
        .then(user => {
            if (user.error){
                this.setState({
                    error: user.error
                })
            } else {
               this.props.signInUser(user)
               this.props.history.push("/dashboard")
            } 
        })       
    }

    render(){
        return(
            <div className="sign-in-div">
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId="formBasicEmail">
                        <h3>Email Address</h3>
                        {this.state.error ? <h5 style={{color: "red"}}>{this.state.error}</h5> : null}
                        <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group><br></br>

                    <Form.Group controlId="formBasicPassword">
                        <h3>Password</h3>
                        <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" width="100px" >
                        Submit
                    </Button>
                    </Form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    signInUser: signInUser
}

export default connect(null, mapDispatchToProps)(SignIn)