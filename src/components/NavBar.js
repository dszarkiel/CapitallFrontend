import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'


class NavBar extends React.Component {

    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand >Finate</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Button variant="info">Sign In</Button>
                    <Button variant="info">Account</Button>
                    <Button variant="info">Sign Out</Button>
                    
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar