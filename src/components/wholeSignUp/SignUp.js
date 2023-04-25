import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from "../../styles/modules/SignUp.module.scss"

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
    return (
        <>
        <div>
            <img className={styles.backgrond} src={backgrond} alt='backgrond' />
            <Link  to={`/Board`}> <img className={styles.getback} src={getback} alt='getback' /></Link>
        </div>
        
        <form className={styles.formContainer}>
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
                    <input  type="text" name='name' placeholder='Name' className={styles.formInput} />
                    <img className={styles.icon} src={name} alt='name' />
                </div>
                <div className={styles.formField}>
                    <input  type="email" name='email' placeholder='Email' className={styles.formInput} />
                    <img className={styles.icon} src={email} alt='email' />
                </div>
                <div className={styles.formField}>
                    <input  type="password" name='password' placeholder='Password' className={styles.formInput} />
                    <img className={styles.icon} src={password} alt='password' />
                </div>
                <div className={styles.formField}>
                    <input  type="password" name='confirmPassword' placeholder='ConfirmPassword' className={styles.formInput} />
                    {/* <img className={styles.comfirmpassword} src={comfirmpassword} alt='comfirmpassword' /> */}
                </div>
                  <div className={styles.formField}>
                    <div className={styles.checkboxContainer}>
                    <label>i accept terms of privacy policy</label>
                    <input type="checkbox" name='isAccepted' />
                    </div>
                 </div>

                    <button type='submit'  className={styles.SignUp}>SignUp</button>
              
                    <p className={styles.Login}>Already have a account ? <Link to='/login'>Login</Link></p>
                   
              
                </div>
        </form>
       
        </>
    );
};

export default SignUp;