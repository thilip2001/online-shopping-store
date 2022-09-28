import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/home">
            <i className="fa-solid fa-cart-shopping"></i> |Sqs Online shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/products">All Products</Nav.Link>
            </Nav>
            <Nav className=" m-auto me-sm-2">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p className="text-center bg-dark text-light">Super Deal! Free shipping on Orders Above $50</p>
    </header>
  );
};

export default Header;