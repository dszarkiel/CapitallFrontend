import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

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
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand >Finate</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                {this.props.currentUser ?
                <div className="btn-group">    
                <Button className="pull-right" variant="info">Account</Button>
                <Button variant="info">Sign Out</Button>
                </div>
                    :
                <div className="btn-group" >
                <Button variant="info" onClick={this.handleSignIn}>Sign In</Button>
                <Button variant="info" onClick={this.handleSignUp}>Sign Up</Button>
                </div>
            }
                {/* </Navbar.Collapse> */}
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