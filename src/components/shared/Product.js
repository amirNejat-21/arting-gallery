import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
// import Select from 'react-select';
// import { Select, Option } from "@material-tailwind/react";
// import { Select, Option } from "@material-tailwind/react";


// styles
import styles from "../../styles/modules/product.module.scss"

// context
import { CartContext } from '../../context/CartContextProvider';
// function
import { isInCart } from '../../helpers/functionss';
import { quantityCount } from '../../helpers/functionss';
// icons
import trashIcon from "../../image/trash.svg"
// import data from '../../Api/data'



const Product = ({productsData}) => {
    const{state,dispatch} = useContext(CartContext)

 
const [size, setSize] = useState("30*40");

const changeHandler = event => {
    setSize(event.target.value)
    
}



 
    return (
        <>
 

        <div className={styles.container}>
           <img className='relative  rounded-[10px]' src={productsData.imageUrl} alt='/'/>
            <div className={styles.title__container}>
                 <h3  >{productsData.title}</h3>
                 <p >{productsData.variants[size]}</p>
                 
                
            </div>
            <div >
                
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productsData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productsData})}><img  src={trashIcon} alt="trash" /></button>}
                    {quantityCount(state, productsData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productsData})}>-</button>}
                    {quantityCount(state, productsData.id) > 0 && <span className={styles.counter} >{quantityCount(state, productsData.id)}</span>}
                    {
                        isInCart(state, productsData.id) ?
                        <button  onClick={() => dispatch({type: "INCREASE", payload: productsData})}  className={styles.smallButton}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productsData})} >Add to Cart</button>
                    }


                </div>
         
                <div class="relative h-10 w-36  left-32 bottom-10">
<select   onChange={changeHandler} class="  peer h-full w-full rounded-[7px] border-[2px] border-[var(--counter)] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">

  <option  value="30*40">30*40</option>
  <option value="40*40">40*40</option>
  <option value="50*60">50*60</option>
  <option value="80*100">80*100</option>
</select>
<label class="text-[color:var(--text)] before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t-2 before:border-l before:border-[var(--counter)] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t-2 after:border-r after:border-[var(--counter)] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
  Select a Size
</label>
</div>     
   
                     
                
            <Link to={`/ProductReview/${productsData.id}`} className={styles.Review}>Review this product!</Link>
            </div>
            
           
        </div>
        
        </>
    );
};

export default Product;