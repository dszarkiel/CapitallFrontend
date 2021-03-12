import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import {Linkedin, Github, CameraReelsFill} from 'react-bootstrap-icons'

class Footer extends React.Component {
    constructor(){
        super();
        this.state = {
            showModal : false
        }
    }

    handleAboutTeam = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    openInNewTab = (url) => {
        let win = window.open(url, '_blank');
        win.focus();
      }

    render(){
        return(
            <div className="footer-div">
                <footer>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="bottom">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Container fluid>
                <Col lg={4} className="text-center">
                <Nav.Link onClick={this.handleAboutTeam}>
                         About Team
                    </Nav.Link>

                </Col>

                <Col lg={4} className="text-center">
                    Copyright &copy; 2021 Capitall
                </Col>

                <Col lg={4} className="text-center">
                    Privacy Policy 
                </Col>
            </Container>
            </Navbar.Collapse>
            </Navbar>

                <Modal show={this.state.showModal} dialogClassName="user-view" size="lg">
                    <div className="footer-links">
                        <Modal.Header closeButton onClick={() => this.handleAboutTeam()}>
                        <Modal.Title>About Design Team</Modal.Title>

                        </Modal.Header>
                        <Modal.Body>
                            <ListGroup.Item>
                            <h1 className="designer-link" onClick={() => this.openInNewTab("https://github.com/dszarkiel")}>
                                Github <Github/>
                            </h1>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <h1 className="designer-link" onClick={() => this.openInNewTab("https://www.linkedin.com/in/dominikszarkiel/")}>
                                LinkedIn <Linkedin/>
                            </h1>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <h1 className="designer-link"  onClick={() => this.openInNewTab("https://www.youtube.com/watch?v=HMUNP0uMqzs&t=2s")}>
                                Demo <CameraReelsFill/>
                            </h1>
                            </ListGroup.Item>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleAboutTeam()}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </div>
                </Modal>
                </footer>
            </div>
        )
    }
}

export default Footer