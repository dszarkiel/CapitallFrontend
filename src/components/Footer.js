import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
class Footer extends React.Component {


    render(){
        return(
            <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="bottom">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Container fluid>
                <Col lg={4} className="text-center">
                    Col1
                </Col>

                <Col lg={4} className="text-center">
                    Col2
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