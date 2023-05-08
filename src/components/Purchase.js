import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from "../styles/modules/Purchase.module.scss"

// components
import Navbar from './Navbar';

// icons
import getback from "../image/GET BACK.png"
import twitter from "../image/icons8-twitter.svg"
import facebook from "../image/icons8-facebook.svg"
import instagram from "../image/icons8-instagram.svg"

// img
import map from "../image/map img.png"
import arrow from "../image/Line 17.png"


const Purchase = () => {
    const [showpopup, setShowpopup] = useState(false);

     useEffect(() => {
            setInterval(() => {
                setShowpopup(true)
            }, 100);
         }, []);
    return (
        <div >
            
           <Navbar/>
        <Link  to={`/payment`}> <img className={styles.gettback} src={getback} alt='getback' /></Link>

        <img className={styles.map} src={map} alt='map'/>
        <div className={styles.container}>
        <h1>Congratulations!</h1>
        <h3>Your Order Is On Its Way.</h3>
       
      { showpopup ?
       <img  data-effect="mfp-move-horizontal" className={styles.arrow} src={arrow} alt='popup'/> 
        : null }
      
       
        <div className={styles.box_container}>
            <p>Tell Your Friends About Your Great Hobby Choice</p>
            <div className={styles.Social}>
                <img src={twitter} alt="facebook" /> 
                <img src={facebook} alt="facebook" /> 
                <img src={instagram} alt="facebook" /> 
                </div>
        </div>
        <Link to="/store">
            <button className={styles.Purchase}  >continue to Purchase</button>
        </Link>
        


        </div>
        </div>





// Now to show the modal, conditionally render it in your component's JSX.

// return (
//    <Layout>
//      { showModal ? <Modal/> : null }
//      ...
//    </Layout>
// )

    );
};

export default Purchase;