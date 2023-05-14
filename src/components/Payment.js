import React,{useContext}  from 'react';
import { Link } from 'react-router-dom';
import{ FaArrowLeft} from 'react-icons/fa'

// component
import Navbar from './Navbar';

// icon

import master_card from "../image/MasterCard.png"
import close from "../image/carbon_close-outline.png"
import arrow from "../image/Arrow 3.png"
import eicredit from "../image/ei_credit-card.png"
import paypal from "../image/Vector.png"
import applepay from "../image/ApplePay.jpg"


// context
import { CartContext } from '../context/CartContextProvider';


// styles 
import styles from "../styles/modules/payment.module.scss"


const Payment = () => {

    const{state, dispatch} = useContext(CartContext)
    return (
        <div className={styles.container}>
        <Navbar/>
       
        <Link  to={`/credit`}><FaArrowLeft className={styles.gettback}/> </Link>

        <div className={styles.cart_container}>
           <h2>Payment</h2>
           <div className={styles.payment_container}>
             <img src={master_card} alt='img'/>
                <div>
                     <h4>Credit Card **** 9253</h4>
                     <p>ANA LARSON</p>
                </div>
             <img   src={close} alt='close'/>
           </div>
           <h3>Choose another method</h3>
           <div className={styles.payment_container}>
             <img src={eicredit} alt='img'/>
                <div>
                     <h4>Credit Or Debit Card</h4>
                     <p>Pay With Visa Or MasterCard</p>
                </div>
             <img   src={arrow} alt='arrow'/>
           </div>
           <div className={styles.payment_container}>
             <img  src={paypal} alt='img'/>
                <div>
                     <h4 className={styles.title_1}>Pay Pal</h4>
                    
                </div>
             <img   src={arrow} alt='arrow'/>
           </div>
           <div className={styles.payment_container}>
             <img  src={applepay} alt='img'/>
                <div>
                     <h4 className={styles.title_2}>Apple Pay</h4>
                     
                </div>
             <img   src={arrow} alt='arrow'/>
           </div>
        </div>
        

        <div className={styles.back}>
            <h2>order Summary</h2>
                    <Link to="/store">
                     <button className={styles.clear}  onClick={() => dispatch({type: "CLEAR"})}><img   src={close} alt='close'/></button>
                    </Link>
                 <div >
                        <p>Total Items:<span>{state.itemsCounter}</span> </p> 
                        {/* <br style={{borderBottom:"1px solid black"}}/> */}
                        <p>subtotal :<span>{state.total} $</span> </p>
                        <div className={styles.btn_container}>
                           
                        </div>
                    </div>
                            <Link to="/purchase">
                            <button className={styles.checkout}  onClick={() => dispatch({type: "CHECKOUT"})}>complete Payment</button>
                            </Link>
            
            
            
        </div>
        </div>
    )
};

export default Payment;