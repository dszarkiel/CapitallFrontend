import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends React.Component {
    state = {
        email: "dom@gmail.com",
        password: "abc"
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        return(
            <div className="sign-in-div">
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId="formBasicEmail">
                        <h3>Email Address</h3><br></br>
                        <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group><br></br>

                    <Form.Group controlId="formBasicPassword">
                        <h3>Password</h3><br></br>
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

export default SignIn