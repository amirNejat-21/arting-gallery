import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import{ FaArrowLeft} from 'react-icons/fa'
import{ FaTimes} from 'react-icons/fa'

// components
import Cart from './shared/Cart';
import Navbar from "./Navbar"

// context
import { CartContext } from '../context/CartContextProvider';

// styles
import styles from "../styles/modules/shopCart.module.scss"

// icons
import Empty from "../image/icons8-empty-100.png"

const ShopCart = () => {

    const{state, dispatch} = useContext(CartContext)

    return (
        <div  style={{backgroundColor:"#E3E4EA",height:"100vh"}}>
         <Navbar />
         <Link  to={`/store`}><FaArrowLeft className={styles.gettback}/> </Link>
       
         <div  className={styles.cart_container} >
            <h2 >CheckOut</h2>
            <div  className={styles.container}>
               
                {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
                {
                state.itemsCounter === 0 && !state.checkout && <div >
                     <img src={Empty} alt='Empty' className='relative top-8   left-[690px] cursor-pointer hover:scale-110 '/>
                        <h3 className='relative text-3xl  top-44 left-[600px] text-[color:var(--text)]' >Want to buy?</h3>
                        <Link to="/store" className={styles.back_shop}>Go to shop</Link>
                    </div>
            }
            </div>
         </div>

        <div className={styles.back_container}>

        <div className={styles.back}>
            {
                state.itemsCounter > 0 && <div >
            <h2>order Summary</h2>
                    <Link to="/store">
                     <button className={styles.clear}  onClick={() => dispatch({type: "CLEAR"})}><FaTimes/></button>
                    </Link>
                        <p>Total Items:<span>{state.itemsCounter}</span> </p> 
                       
                        <p>subtotal :<span>{state.total} $</span> </p>
                        <div className={styles.btn_container}>
                            <Link to="/Credit">
                            <button className={styles.checkout}  onClick={() => dispatch({type: "CHECKOUT"})}>Proceed To Payment</button>
                            </Link>
                           
                        </div>
                    </div>
            }
           
            {
                state.checkout && <div >
                        <h3>Checked out successfully</h3>
                        <Link to="/store">Buy More</Link>
                    </div>
            }
        </div>
        </div>
        </div>
    );
};

export default ShopCart;