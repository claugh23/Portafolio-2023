import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './index.css';
import { FaHome, FaBriefcase, FaProjectDiagram, FaScroll, FaEnvelope } from 'react-icons/fa';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

export const GeneralNavigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">CR Developer Freelancer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link href='/'><FaHome /> HOME</Nav.Link>
                        <Nav.Link href='/Perfil'><FaBriefcase /> WORK EXPERIENCE</Nav.Link>
                        <Nav.Link href='/Proyectos'><FaProjectDiagram /> PROJECTS</Nav.Link>
                        <Nav.Link href='/Servicios-Web'><FaScroll /> OFFERS</Nav.Link>
                        <Nav.Link href='/Contactame'><FaEnvelope /> CONTACT ME</Nav.Link>
                        <Nav.Link target="_blank" href="https://www.facebook.com/webdeveloperscr"><FiFacebook size={24} /> </Nav.Link>
                        <Nav.Link target="_blank" href="https://www.instagram.com/cr_developer/"><FiInstagram size={24} /> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default GeneralNavigation;
