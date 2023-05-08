import React,{useContext,useState} from 'react';
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

// search
const [search, setSearch] = useState("");
 
const searchHandler = (event) =>{
    setSearch(event.target.value);
}

const searchSkate = data.filter(item => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
// search

    return (
        <> 
        <div >
             
            <Navbar/>
            <Link   to={`/cart`}><img className={styles.cart} src={cart} alt='cart' /> </Link>
            <span className={styles.counter}>{state.itemsCounter}</span>
            
            <div style={{display:'flex',flexDirection:"column",alignItems:"center",backgroundColor:"#E3E4EA",}}>
              
                    <input  value={search}  onChange={searchHandler} id="outlined-basic"  variant="outlined"  label="Search"  type='text' placeholder='search' className='mt-[100px] pl-7 pt-2 pb-2 rounded-[10px] w-[84%]' />
                    
               

            {
                searchSkate.map(item => <Product  key={item.id} productsData={item}/>)
            }
          

            </div>
            </div>
       
        </>
    );
};

export default Store;