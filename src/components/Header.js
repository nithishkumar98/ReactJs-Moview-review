import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';


const Header = () =>{
    return(
        <div>
    <Navbar bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand href="/"><b>Mo-View</b> </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
      <LinkContainer to="/">
          <Nav.Link><b>Home</b></Nav.Link>
      </LinkContainer>

      <LinkContainer to="/review">
          <Nav.Link><b>Review</b></Nav.Link>
      </LinkContainer>

      <LinkContainer to="/now-playing">
          <Nav.Link><b>Now Playing</b></Nav.Link>
      </LinkContainer>

      <LinkContainer to="/favourites">
          <Nav.Link><b>Favourites</b></Nav.Link>
      </LinkContainer>
    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


            </div>
    )
}

export default Header;