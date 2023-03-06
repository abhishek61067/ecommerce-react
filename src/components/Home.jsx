import React from 'react'
import { CartState } from '../context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';



const Home = () => {

// destructuring the CartState
const { state:{products, cart} } = CartState();
// console.log(CartState);
console.log(products);

  return (
    <div className='home'>
      <Filters/>
      <div className="productContainer">
        {
          products.map((product)=>{
            return <SingleProduct key={product.id} details={product} />
          })
        }
      </div>
    </div>
  )
}

export default Home