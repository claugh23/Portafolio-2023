/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import './index.css';
import facebookIcon from '../../assets/icons/facebook.png';
import instagramIcon from '../../assets/icons/instagram.png';
import { useNavigate } from 'react-router-dom';

export const GeneralNavigation = () => {
    
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mx-auto">
                        <Nav.Link href="/">INICIO </Nav.Link>
                        <Nav.Link href="/Perfil">PERFIL PROFESIONAL</Nav.Link>
                        <Nav.Link href="/Stack">TECNOLOGIAS</Nav.Link>
                        <Nav.Link href="/Proyectos">PROYECTOS</Nav.Link>
                        <Nav.Link href="/Servicios-Web">CONSTRUYAMOS TU WEB</Nav.Link>
                        <Nav.Link href="/Contactame">CONTACTAME</Nav.Link>
                        <Nav.Link target='_blank' href="https://www.facebook.com/webdeveloperscr"> <img src={facebookIcon} alt="facebook account"
                            width="30"
                            height="30" /></Nav.Link>
                        <Nav.Link target='_blank' href="https://www.instagram.com/cr_developer/"><img src={instagramIcon} alt="Instagram account"
                            width="30"
                            height="30" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}
