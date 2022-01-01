import React from 'react'
import styles from './index.module.scss'


const index = (props) => {
    const { name, info } = props
    return (
        <div className={styles.content}>
            <p>{name}</p>
        </div>
    )
}

export default index
