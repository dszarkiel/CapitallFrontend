import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class Footer extends React.Component {


    render(){
        return(
            <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="bottom">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Container fluid>
                <Col lg={4} className="text-center">
                    Weather API
                </Col>

                <Col lg={4} className="text-center">

                    <DropdownButton
                        menuAlign="left"
                        title="About Team"
                        menuRole="menu"
                        size="lg"
                        variant="light"
                        drop="up"
                        id="dropdown-menu-align-up"
                        >
                        <Dropdown.Item eventKey="1">GitHub</Dropdown.Item>
                        <Dropdown.Item eventKey="1">LinkedIn</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Demo Video</Dropdown.Item>
                        </DropdownButton>
                </Col>

                <Col lg={4} className="text-center">
                    Col3
                </Col>
            </Container>
            </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default Footer