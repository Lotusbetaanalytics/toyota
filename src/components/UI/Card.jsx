import React from 'react'
import styles from './styles.module.css'

const Card = (props) => {
    return (
        <div className={`${styles.card} ${props.background}`}>
            <div className={styles.cardGrid}>
                <div className={styles.cards}>

                </div>
                <div className={styles.cards}>
                    <h6>{props.title}</h6>
                    <h3>{props.count}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card
