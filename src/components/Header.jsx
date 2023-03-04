import React from 'react'
import { Container, Navbar, Nav, NavDropdown, FormControl, Dropdown } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/">React-Bootstrap</Link>
                <Navbar.Text>
                    <FormControl className="w-25rem m-auto">
                    </FormControl>
                </Navbar.Text>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaShoppingCart/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mw-20rem">
                    <span className="p-5">The cart is empty</span>
                  </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
        </>
    </div>
  )
}

export default Header