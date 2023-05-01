import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from "../styles/modules/store.module.scss"
// icon
import cart from "../image/iconoir_add-to-cart.png"

// data
import data from "../Api/data.js"

// component
import Product from './shared/Product';
import Navbar from './Navbar';

// context
import { CartContext } from '../context/CartContextProvider';

const Store = () => {

   const {state} = useContext(CartContext)

    return (
        <> 
        <div >
             
            <Navbar/>
            <Link   to={`/cart`}><img className={styles.cart} src={cart} alt='cart' /> </Link>
            <span className={styles.counter}>{state.itemsCounter}</span>
            
            <div style={{display:'flex',flexDirection:"column",alignItems:"center",marginTop:"60px",backgroundColor:"#E3E4EA" }}>

            {
                data.map(item => <Product  key={item.id} productsData={item}/>)
            }

            </div>
            </div>
       
        </>
    );
};

export default Store;