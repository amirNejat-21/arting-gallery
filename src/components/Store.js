import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={`/cart`}><img className='UserIcon' src={cart} alt='logo' /> </Link>
            <span>{state.itemsCounter}</span>
            
            <div style={{display:'flex',flexDirection:"column",alignItems:"center",marginTop:"100px" }}>

            {
                data.map(item => <Product  key={item.id} productsData={item}/>)
            }
            
            </div>
            </div>
       
        </>
    );
};

export default Store;