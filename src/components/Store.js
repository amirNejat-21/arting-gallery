import React,{useContext,useState} from 'react';
import { Link } from 'react-router-dom';
import{ BiCart } from 'react-icons/bi'
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
            <Link   to={`/cart`}> <BiCart className='fixed z-20 top-4 left-5 text-3xl text-[color:var(--icons)]'/> </Link>
           
            <span className={styles.counter}>{state.itemsCounter}</span>
            
            <div className='flex flex-col items-center bg-[color:var(--body)]' >
              
                   
                  
                    <div className={styles.search_box} >
                        <button className={styles.btn_search}><i className="fas fa-search"></i></button>
                        <input value={search} onChange={searchHandler} type="text" className={styles.input_search} placeholder="Type to Search..."/>
                    </div>

            {
                searchSkate.map(item => <Product  key={item.id} productsData={item}/>)
            }
          

            </div>
            </div>
       
        </>
    );
};

export default Store;