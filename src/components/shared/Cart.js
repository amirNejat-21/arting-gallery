import React,{useContext} from 'react';

// context
import { CartContext } from '../../context/CartContextProvider';

// icons
import trashIcon from "../../image/trash.svg"
const Cart = (props) => {
    const{dispatch} = useContext(CartContext)

    const{imageUrl,title,price,quantity} = props.data;

    return (
        <div>
            <img  src={imageUrl} alt='img'/>
            <div >
                <h3>{title}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span >{quantity}</span>
            </div>
            <div >
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})} >-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})} ><img style={{width:"10px"}} src={trashIcon} alt="trash" /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})} >+</button>
            </div>
        </div>
    );
};

export default Cart;