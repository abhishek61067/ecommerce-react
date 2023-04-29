// context is like a component
// import * as faker from 'faker';
import { faker } from '@faker-js/faker';
import React, { createContext, useContext, useReducer } from 'react'
import { cartReducer, productReducer } from './Reducers';


const Cart =  createContext()
// createContext returns object which contains provider(Cart.provider in our case) 
// and Cart.Consumer which i am not sure we have used. But i am confused if
//  it is useContext going through this article(https://beta.reactjs.org/reference/react/createContext)
faker.seed(99);


const Context = ({children}) => {
  // for products
  const products = [...Array(20)].map(()=> ({
    id : faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(),
    inStock: faker.helpers.arrayElement([3,4,5,1,0]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  
  // useReducer usecase
  const initialState = {products: products, cart: []};
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // for filters in sidebar
  const [productState, productDispatch] =  useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery:""
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}  
    </Cart.Provider>
  )
}

export default Context;


export const CartState = () => useContext(Cart);
