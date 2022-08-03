import React from "react"
import {Link} from "react-router-dom"
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
//import SearchBar from '../Components/SearchBar'
import '../Styles/Menu.css'

function Menu(){



  return(
    <Navbar expand="lg" id='Navbar' >
          <Container fluid >
            <Navbar.Brand as={Link} to='/'>Online React Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px'}}
                navbarScroll
              >
              <Nav.Link href="#" disabled> Bienvenido </Nav.Link>

              <NavDropdown title="Iniciar sesion" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to='/Pages/Login'>Login</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/Pages/Registro'>Registro</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5"> Cerrar sesión
                  </NavDropdown.Item>
                </NavDropdown>


                <NavDropdown title="Productos" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to='/Pages/NewProduct'>Alta</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Modificar</NavDropdown.Item>

                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}

export default Menu