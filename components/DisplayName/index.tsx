import React from 'react'
import styles from './index.module.scss'


const index = (props) => {
    const { user_name, info } = props
    console.log(info, 'info')
    return (
        <div className={styles.content}>
            <p>{user_name}</p>
            {/* {info ? Object.entries(info).map((item, index) => {
                return (
                    <p>{item}</p>
                )
            }) : <p>まだ投稿はありません</p>} */}
        </div>
    )
}

export default index
