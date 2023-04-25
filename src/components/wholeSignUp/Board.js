import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../../styles/modules/board.module.scss"


import board from "../../image/sign in B(2).png"
import getback from "../../image/GET BACK.png"
import btn from "../../image/Frame 6.png"



const Board = () => {
    return (
        <div className={styles.container}>
           <img className={styles.board} src={board} alt='board' />
           <Link  to={`/main`}> <img className={styles.getback} src={getback} alt='getback' /></Link>
           <Link  to={`/signUp`}><img className={styles.btn} src={btn} alt='btn' /> </Link>
        </div>
    );
};

export default Board;