import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';


const Home = () => {





//Just for test case of what context provides
let {i, iChange} = CartState();




useEffect(()=>{
  console.log('variables provided as prop in context.provider in context component:', i); 
}, [i])

// abc.i++;
// destructuring the CartState
const { state:{products}, productState:{sort, byStock, 
  byFastDelivery, byRating, searchQuery}, } = CartState();


  

  // console.log("sort: ",sort);
  const transformProducts = () => {
    let sortedProducts = products;
    if(sort){
      sortedProducts = sortedProducts.sort((a,b)=>{
return sort === "lowToHigh" ? a.price - b.price : b.price - a.price  

      }
      );
    }
    if (!byStock){
      sortedProducts = sortedProducts.filter((prod)=> prod.inStock)
    }
    if (byFastDelivery){
      sortedProducts = sortedProducts.filter((prod)=> prod.fastDelivery)
    }

    if(byRating){
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      )
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
    }


    return sortedProducts;
  }




// console.log(CartState);
// console.log("products: ", products);

  return (
    <div className='home'>
      <button className='align-self-start p-2' onClick={(e)=>{iChange(++i)}}>Test</button>
      <Filters/>
      <div className="productContainer">
        {
          transformProducts().map((product)=>{
            return <SingleProduct key={product.id} details={product} />
          })
        }
      </div>
    </div>
  )
}

export default Home