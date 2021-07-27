import React from 'react'
import styles from './styles.module.css'
import cctv from '../../assets/cctv.png'

const WelcomeScreen = () => {
    return (
        <div className={styles.welcome}>
            <h3>CCTV Application</h3>
            <img src={cctv} alt="Toyota CCTV" />
        </div>
    )
}

export default WelcomeScreen
