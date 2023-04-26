import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from "../../styles/modules/SignUp.module.scss"

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// functions
import { validate } from './validate';
import { notify } from './toast';

// img
import backgrond from "../../image/sign in.png"
import getback from "../../image/GET BACK.png"

import google from "../../image/Component 1.png"
import apple from "../../image/Component 2.png"
import facebook from "../../image/Component 3.png"

import name from "../../image/icons8-name-48.png"
import email from "../../image/icons8-email-48.png"
import password from "../../image/icons8-password-48.png"
// import comfirmpassword from "../../image/confirm-lock-4318470-3594591.png"



const SignUp = () => {


    const [data,setData] =  useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    })

    const[errors,setErrors] = useState({});
    const[touched,setTouched] = useState({});

    useEffect(() =>{
        setErrors(validate(data,"signup"));
        
    },[data,touched])

    const changeHandler = event => {
        if (event.target.name === 'isAccepted') {
            setData({...data, [event.target.name]: event.target.checked})
        }else {
            setData({...data, [event.target.name]: event.target.value})
        }
        
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
           
           notify("You Signed in successfully" ,"success")
        }else{
            notify("invalid Data" ,"error")
            setTouched({
                name: true,
                email: true, 
                password: true,
                confirmPassword: true,
                isAccepted: true,
            })
        }
    }
   
    return (
        <>
        <div>
            <img className={styles.backgrond} src={backgrond} alt='backgrond' />
            <Link  to={`/Board`}> <img className={styles.getback} src={getback} alt='getback' /></Link>
        </div>
        
        <form onSubmit={submitHandler} className={styles.formContainer}>
            <h2 className={styles.header}>let me put you on the board</h2>
            <img className={styles.google} src={google} alt='google' />
            <img className={styles.apple} src={apple} alt='apple' />
            <img className={styles.facebook} src={facebook} alt='facebook' />
                <div className={styles.cut}>
                    <span></span>
                    <p>OR</p>
                    <span></span>
                </div>
                <div className={styles.container}>
                <div className={styles.formField}>
                    <input  
                    type="text" 
                    name='name' 
                    value={data.name} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    placeholder='Name' 
                    className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} 
                    />
                    <img className={styles.icon} src={name} alt='name' />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <input  
                    type="password" 
                    name='confirmPassword' 
                    value={data.confirmPassword} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    placeholder='ConfirmPassword' 
                    className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput} 
                    />
                    <img className={styles.icon} src={password} alt='confirmPassword' 
                    />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                    <div className={styles.checkboxContainer}>
                    <label>i accept terms of privacy policy</label>
                    <input 
                    type="checkbox" 
                    name='isAccepted' 
                    value={data.isAccepted} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    />
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                 </div>
                    <button type='submit'  className={styles.SignUp}>SignUp</button>
                    <p className={styles.Login}>Already have a account ? <Link to='/login'>Login</Link></p>
                </div>
        </form>
        <ToastContainer />
       
        </>
    );
};

export default SignUp;