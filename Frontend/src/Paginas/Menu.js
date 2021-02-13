import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="">Gestor de Encomendas</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/produtos">Produtos</Nav.Link>
        <Nav.Link href="/utilizadores">Utilizadores</Nav.Link>
        <Nav.Link href="/encomendas">Encomendas</Nav.Link>
     </Nav>

    <Nav className="mr-auto mr-sm-2">
        <Nav.Link href="#">Log Out</Nav.Link> 
    </Nav>

    </Navbar.Collapse>
  </Navbar>

  );
}

export default Menu;
