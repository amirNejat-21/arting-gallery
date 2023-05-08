import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

// components
import Cart from './shared/Cart';
import Navbar from "./Navbar"

// context
import { CartContext } from '../context/CartContextProvider';

// styles
import styles from "../styles/modules/shopCart.module.scss"

// icons
import close from "../image/carbon_close-outline.png"
import getback from "../image/GET BACK.png"
const ShopCart = () => {

    const{state, dispatch} = useContext(CartContext)

    return (
        <div  style={{backgroundColor:"#E3E4EA",height:"91vh"}}>
         <Navbar className={styles.nav}/>
         <Link  to={`/store`}> <img className={styles.gettback} src={getback} alt='getback' /></Link>
         <div  className={styles.cart_container} >
            <h2 >CheckOut</h2>
            <div  className={styles.container}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
         </div>

        <div className={styles.back_container}>

        <div className={styles.back}>
            <h2>order Summary</h2>
            {
                state.itemsCounter > 0 && <div >
                    <Link to="/store">
                     <button className={styles.clear}  onClick={() => dispatch({type: "CLEAR"})}><img   src={close} alt='close'/></button>
                    </Link>
                        <p>Total Items:<span>{state.itemsCounter}</span> </p> 
                        {/* <br style={{borderBottom:"1px solid black"}}/> */}
                        <p>subtotal :<span>{state.total} $</span> </p>
                        <div className={styles.btn_container}>
                            <Link to="/Credit">
                            <button className={styles.checkout}  onClick={() => dispatch({type: "CHECKOUT"})}>Proceed To Payment</button>
                            </Link>
                           
                        </div>
                    </div>
            }
            {
                // state.itemsCounter === 0 && !state.checkout && <div >
                //         <h3>Want to buy?</h3>
                //         <Link to="/store">Go to shop</Link>
                //     </div>
            }
            {/* {
                state.checkout && <div >
                        <h3>Checked out successfully</h3>
                        <Link to="/store">Buy More</Link>
                    </div>
            } */}
        </div>
        </div>
        </div>
    );
};

export default ShopCart;