import React from 'react'
import { CartState } from '../context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';


const Home = () => {

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