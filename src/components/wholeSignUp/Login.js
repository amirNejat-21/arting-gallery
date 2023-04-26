import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from "../../styles/modules/login.module.scss"

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// functions
import { validate } from './validate';
import { notify } from './toast';

// img
import backgrond from "../../image/sign in.png"
import getback from "../../image/GET BACK.png"



import email from "../../image/icons8-email-48.png"

import password from "../../image/icons8-password-48.png"




const Login = () => {

    const [data,setData] =  useState({
        email: "",
        password: "",
    })

    const[errors,setErrors] = useState({});
    const[touched,setTouched] = useState({});

    useEffect(() =>{
        setErrors(validate(data,"login"));
    },[data,touched])

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value})
        
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
           
           notify("You Loged in successfully" ,"success")
        }else{
            notify("invalid Data" ,"error")
            setTouched({
                email: true, 
                password: true,
            })
        }
    }
   
    return (
        <>
        <div>
            <img className={styles.backgrond} src={backgrond} alt='backgrond' />
            <Link  to={`/SignUp`}> <img className={styles.getback} src={getback} alt='getback' /></Link>
        </div>
        <form onSubmit={submitHandler} className={styles.formContainer}>
            <h2 className={styles.header}>login into Account</h2>
                <div className={styles.container}>
                <div className={styles.formField}>
                    <input  
                    type="email" 
                    name='email' 
                    value={data.email} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    placeholder='Email' 
                    className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput} 
                    />
                    <img className={styles.icon} src={email} alt='email' />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                
                <div className={styles.formField}>
                    <input  
                    type="password" 
                    name='password' 
                    value={data.password}
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    placeholder='Password' 
                    className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}  
                    />
                    <img className={styles.icon} src={password} alt='password' 
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                    <button type='submit'  className={styles.Login}>Login</button>
                    <p className={styles.forgat}>Forgat your password ? </p>
                    <p className={styles.SignUp}>New to the ema Skateboard ? <Link to='/SignUp'>SignUp</Link></p>
                </div>
        </form>
        <ToastContainer />
       
        </>
    );
};

export default Login;