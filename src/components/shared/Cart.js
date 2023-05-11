import React,{useContext} from 'react';
import{ FaBackward } from 'react-icons/fa'
// context
import { CartContext } from '../../context/CartContextProvider';

// icons
import trashIcon from "../../image/trash.svg"

// styles
import styles from "../../styles/modules/Cart.module.scss"


const Cart = (props) => {
    const{dispatch} = useContext(CartContext)

    const{imageUrl,title,price,quantity} = props.data;

    return (
        <div className={styles.container}>
            <img   className={styles.product__img} src={imageUrl} alt='img'/>
            <div >
                <h3>{title}</h3>
                <p>{price} $</p>
            </div>
            
            <div  className={styles.counter}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}  >-</button> :
                    // <Link to="/store">
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})} ><img  src={trashIcon} alt="trash" /></button>
                    /* </Link> */
                }
                <span >{quantity}</span>
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})} >+</button>
            </div>
        </div>
    );
};

export default Cart;