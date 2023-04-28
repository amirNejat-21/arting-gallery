import React from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from "../../styles/modules/product.module.scss"


const Product = ({productsData}) => {
    
    
    return (

        <div className={styles.container}>
            

            <img src={productsData.imageUrl} alt='img'  className={styles.img}/>
            
            <h3>{productsData.title}</h3>
            <p>{productsData.price}</p>
            <div>
                <Link to={`/ProductReview/${productsData.id}`}>Review this product!</Link>
                <div>
                    <button>Add To Cart</button>
                </div>
            </div>
           
        </div>
    );
};

export default Product;