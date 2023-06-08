import React,{useContext} from 'react'
import { Link,useParams } from 'react-router-dom';
import{ FaArrowLeft} from 'react-icons/fa'


// context
import { ProductsContext } from '../../context/ProductContextProvider';
// components
import Navbar from '../Navbar';
// styles
import styles from '../../styles/modules/review.module.scss'








const ProductReview = (props) => {
    const params = useParams();
    const id = params.id;
    const data = useContext(ProductsContext)
    const product = data[id -1]
    const {imageUrl,title ,description,price} = product



   

  
 
    return (
        
        <>
        <Navbar/>
        <Link   to={`/store`}> <FaArrowLeft className='fixed z-20 top-4 left-5 text-3xl text-[color:var(--icons)]'/> </Link>
        <div className={styles.container}>
            <img src={imageUrl} alt='img' className={styles.img} />
            
            
                
       
            <div className={styles.title}>
                <h3>{title}</h3>
                <span >{price} $</span>
            </div>
            <p >{description}</p>
            
                <Link to="/Store" >Back to Shop</Link>


               
    </div>
    </>
    );
};

export default ProductReview;