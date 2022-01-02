import React from 'react'
import styles from './index.module.scss'


const index = (props) => {
    const { user_name } = props
    return (
        <div className={styles.content}>
            <p>{user_name}</p>
        </div>
    )
}

export default index
