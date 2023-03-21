import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../context/Context';

const SingleProduct = ({details}) => {
  const {state: {cart }, dispatch} = CartState();
  return (
    <div className='products'>
     <Card>
<Card.Img variant={"top"} src = {details.image} alt= {details.name} />
<Card.Body>
  <Card.Title>{details.name}</Card.Title>
  <Card.Subtitle style= {{paddingBottom : '10'}} > 
  <span>
      Rs.  {details.price.split(".")[0]}
  </span>
  {details.fastDelivery ? (
      <div className="">Fast Delivery</div>
  ):(
          <div className="">4 days Delivery</div>

  ) }
  <Rating rating={details.ratings}/>
  </Card.Subtitle>

{/* some will return true if at least one element in the array pass the test expression */}
{/* It looks like a filter but it returns boolean unlike filter which returns an array */}

{cart.some((c) => c.id === details.id)?(<Button onClick = {()=>{
  dispatch({
    type:"REMOVE_FROM_CART",
payload: details
  }
  )
  }} variant = "danger">
  Remove From Cart
</Button>):
(<Button onClick = {()=>{
  dispatch({
    type:"ADD_TO_CART",
payload: details
  }
  )
  }} disabled={!details.inStock}>
  {!details.inStock ? "Out of stock" :
"Add to Cart"}</Button>)

}



  
</Card.Body>
     </Card>
      </div>
  )
}

export default SingleProduct