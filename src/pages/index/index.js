import React, { Component } from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './index.css'

export default class index extends Component {
    render() {
        return (
            <div className='index_page'>

                <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#link" className='index_navbar_text'>Project</Nav.Link>
                            </Nav>
                            <Nav>
                                <NavDropdown title="Utils" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className='index_navbar_text'>Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className='index_navbar_text'>Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className='index_navbar_text'>Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" className='index_navbar_text'>Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#deets" className='index_navbar_text'>More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes" className='index_navbar_text'>
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container className='index_page_banner'>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>zz</Col>
                    </Row>
                </Container>

                <div id='home'>
                    a
                </div>
            </div>
        )
    }
}
