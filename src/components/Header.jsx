import React from 'react'
import { Container, Navbar, Nav, NavDropdown, FormControl, Dropdown, Badge, Button } from 'react-bootstrap'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { AiFillAccountBook, AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';


const Header = () => {

  const {state:{products, cart}, dispatch} = CartState();
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
                    <Badge>{cart.length}</Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mw-20rem">
                    {cart.length>0?(
                      <>
                                            {cart.map((details) => (
                      <span className="cartitem" key={details.id}>
                        <img src={details.image} alt={details.name} className='cartItemImg' />
                        <div className="cartItemDetail">
                          <span>{details.name}</span>
                          <span>Rs. {details.price.split(".")[0]}</span>
                          </div>
                          <AiFillDelete fontSize={"20px"}
                          style = {{cursor:"pointer"}}
                          onClick = {()=> dispatch({type:"REMOVE_FROM_CART", payload: details})}
/>
                      </span>
                                            ))}

                                            <Link to="/cart">
 <Button>
                                            Go to cart
                                            </Button>
                                            </Link>
                                           
                                            

                      </>
                    ):(
                                          <span className="p-5">The cart is empty</span>

                    )}
                  </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
        </>
    </div>
  )
}

export default Header