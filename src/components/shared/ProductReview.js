import React from 'react'
import { Link } from 'react-router-dom';
import data from '../../Api/data';
const ProductReview = () => {
    // const id = data.id;
    // const product = data[id - 1];
    // const {imageUrl, title, description, price} = product;
    return (
        <>
       
        <div >
        <img   alt="product" />
        <div >
            <h3></h3>
            <p ></p>
            
            <div >
                <span > $</span>
                <Link to="/Store" >Back to Shop</Link>
            </div>
        </div>
    </div>
    </>
    );
};

export default ProductReview;