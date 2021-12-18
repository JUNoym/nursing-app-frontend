import React from 'react'
import styles from './index.module.scss'


const index = (props) => {
    const { time, care_action } = props
    const date = new Date(time)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()


    return (
        <>
            <p className={styles.module_space}></p>
            <div className={styles.content}>
                <button>
                    <p>
                        {care_action.title}
                    </p>
                    <p>
                        {hour}時{minute}分
                    </p>
                </button>
            </div>
        </>
    )
}

export default index
