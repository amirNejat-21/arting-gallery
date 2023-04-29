import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from "../../styles/modules/product.module.scss"

// context
import { CartContext } from '../../context/CartContextProvider';
// function
import { isInCart } from '../../helpers/functionss';
import { quantityCount } from '../../helpers/functionss';
// icons
import trashIcon from "../../image/trash.svg"


const Product = ({productsData}) => {
    const{state,dispatch} = useContext(CartContext)
    return (
        <div className={styles.container}>
            <img src={productsData.imageUrl} alt='img'  className={styles.img}/>
            <h3>{productsData.title}</h3>
            <p>{productsData.price}</p>
            <div>
                <Link to={`/ProductReview/${productsData.id}`}>Review this product!</Link>
                <div>
                    {quantityCount(state, productsData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productsData})}><img style={{width:"10px"}} src={trashIcon} alt="trash" /></button>}
                    {quantityCount(state, productsData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productsData})}>-</button>}
                    {quantityCount(state, productsData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productsData.id)}</span>}
                    {
                        isInCart(state, productsData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productsData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productsData})}>Add to Cart</button>
                    }

                </div>
            </div>
           
        </div>
    );
};

export default Product;