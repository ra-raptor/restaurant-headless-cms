import React,{useState,useContext, useEffect} from 'react'
import CartNav from '../components/cartPage/CartNav'
import '../components/cartPage/cart.scss'
import { ContextInterface, CartDataInterface, Food } from '../utils/Interface';
import { GlobalContextData } from '../context/GlobalContext';
import CartItem from '../components/cartPage/CartItem';
const cart = () => {
    const contextData:ContextInterface = useContext(GlobalContextData);
    const cartData = contextData.cartData;
    
    const calcTotal = () =>{
        let x = 0;
        cartData.map(item => {
            x+=item.totalPrice
        })
        return x
    }

  return (
      <>
      <div className="cart-page-wrapper">
            <CartNav />
            <h2>Your Cart</h2>
            <p className='sub'>You have {cartData.length} items in your cart</p>
            {cartData.map((item) =>  <CartItem {...item}/>)}
            <div className="checkout-wrapper">
                <div className="checkout">
                    <div className="price">
                        <div className="left">
                            <h4>Order Sub-Total</h4>
                            <p>{cartData.length} items</p>
                        </div>
                        <div className="right"> ₹ {calcTotal()}</div>
                    </div>
                    <div className="btn" onClick={() => window.alert("thank you")} >Checkout</div>
                </div>
            </div>
    </div>
        
    </>
  )
}

export default cart