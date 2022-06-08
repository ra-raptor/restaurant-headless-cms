import React,{useContext} from 'react'
import CartNav from '../components/cartPage/CartNav'
import '../components/cartPage/cart.scss'
import { ContextInterface} from '../utils/Interface';
import { GlobalContextData } from '../context/GlobalContext';
import CartItem from '../components/cartPage/CartItem';
import { Link } from 'gatsby';
import { motion } from 'framer-motion'
import { FadeInDown,FadeInUp } from '../utils/variants';

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
      <motion.div variants={FadeInUp} initial="initial" animate="animate" className="cart-page-wrapper">
            <CartNav />
            <h2>Your Cart</h2>
            <p className='sub'>You have {cartData.length} items in your cart</p>
            {cartData.map((item) =>  <CartItem {...item}/>)}
            {cartData.length > 0 && (
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
            )}
            {cartData.length === 0 && (
                <Link to="/menu"><div className="to-menu">
                MENU
            </div></Link>
            )}
            
    </motion.div>
        
    </>
  )
}

export default cart