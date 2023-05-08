import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// component
import Navbar from './Navbar';
// styles 
import styles from "../styles/modules/credit.module.scss"
// icon
import getback from "../image/GET BACK.png"
import master_card from "../image/MasterCard.png"

const Credit = () => {

    // function addSpace(str) {
    //     return  str.replace(/(.{2})/g,"$1$") 
      
      function addspace(s) {
        return s.toString().replace(/\d{4}(?=.)/g, '$& ');
    }
    function format (s) {
        return s.toString().replace(/\d{2}(?=.)/g, '$&/ ');
    }
   
      
      
      
      
    const[number,SetNumber] = useState("")
    const[holder,SetHolder] = useState("")
    const[valid,SetValid] = useState("")

    const numberHandler = (e) => {
        SetNumber(e.target.value)
    }
    const holderHandler = (e) => {
        SetHolder(e.target.value)
    }
    const validHandler = (e) => {
        SetValid(e.target.value)
    }

    const back = () =>{
        
    }
       
    return (
        <div className={styles.container}>
             <Navbar/>
             <Link  to={`/cart`}> <img className={styles.gettback} src={getback} alt='getback' /></Link>

             <div className={styles.cart_container}>
                <h2>Credit Card</h2>
                <div className={styles.cart}>
                    <img src={master_card} alt='img'/>
                    <h4>{addspace(number)}</h4>
                    <div className={styles.information_container}>
                        <div>
                            <p>Card Holder</p>
                            <h3>{holder}</h3>
                        </div>
                        <div>
                            <p>valid thru</p>
                            <h3>{format(valid) }</h3>
                        </div>
                    </div>
                </div>
             </div>
             <form className={styles.form_container}>
                <div className={styles.form_field}>
                    <label>Card number</label>
                    <input maxLength={16} type="text" name='name' onChange={numberHandler} />
                </div>
                <div className={styles.form_field}>
                    <label>card holder name</label>
                    <input maxLength={22}  type="text" name='name' onChange={holderHandler}/>
                </div>
                <div className={styles.valid_field}>

                <div className={styles.form_field}>
                    <label>valid thru</label>
                    <input maxLength={4}  type="text" name='name' onChange={validHandler}/>
                </div>
                <div className={styles.form_field}>
                    <label>ccv</label>
                    <input maxLength={4} className={styles.form_left} type="text" name='name' onMouseEnter={back}/>
                </div>
                </div>
                <Link to="/payment">
                <button className={styles.save_card}>SAVE card</button>
                </Link>
             </form>
        </div>
    );
};

export default Credit;