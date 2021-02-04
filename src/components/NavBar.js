import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Nav from 'react-bootstrap/Nav'

class NavBar extends React.Component {

    handleSignUp = () => {
        this.props.history.push("/signup")
    }

    handleSignIn = () => {
        this.props.history.push("/")
    }

    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Finate</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    {this.props.currentUser ?
                <div className=" mr-sm-2">    
                <Button className="pull-right" variant="info">Account</Button>
                <Button variant="info">Sign Out</Button>
                </div>
                    :
                    <div className=" mr-sm-2" >
                <Button variant="info" onClick={this.handleSignIn}>Sign In</Button>
                <Button variant="info" onClick={this.handleSignUp}>Sign Up</Button>
                </div>
            }
                </Navbar.Collapse>
                </Navbar>




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