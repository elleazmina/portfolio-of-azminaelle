import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './MyNavbar.css';
import Logo from "../../assets/icons/logo.png";

const MyNavbar = () => {
    return (
        <div>
        <Navbar
          fixed="top"
          variant="dark"
          expand="md"
          className="animate-navbar nav-theme justify-content-between"
        >
          <div>
            <Navbar.Brand href="#home">
              <img className="logo" src={Logo} alt="" />
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#blogs">Blogs</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
};

export default MyNavbar;