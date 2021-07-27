import React from 'react'
import styles from './styles.module.css'
import logo from '../../assets/toyota.png'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Toyota Logo" />
                <h6>TOYOTA CCTV</h6>
            </div>

        </div>
    )
}

export default Navbar
