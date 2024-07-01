import React, { useContext, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../../styles/HeaderStyle.css";
import { CartContext } from "../../contexts/CartContext";

const Header = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="sticky">
        <Container>
          <Navbar.Brand href="#home">
            <h1 to="/" className="brand-text">
              Kabul Express
            </h1>
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <div className="cart d-lg-none">
              <Link to="/cart">
                <i className="bi bi-bag fs-5"></i>
                <em className="roundpoint">{totalItems}</em>
              </Link>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="d-none d-lg-block">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">{totalItems}</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
