import React from 'react'
import styles from './index.module.scss'


const index = (props) => {
    const { info } = props
    return (
        <div className={styles.content}>
            {Object.entries(info).map((data, index) => {
                // data[0] === 'care_actions'の時排泄記録を表示する
                if (data[0] === 'care_actions') {
                    return (
                        <div className={styles.dataWrapper}>
                            <div key={index} className={styles.data}>
                                {Object.entries(data[1]).map((data, index) => {
                                    const time = data[1].registered_at
                                    const date = time.slice(0, 10).split('T')
                                    const care_time = time.slice(11, 16).split('T')
                                    return (
                                        <>
                                            <h1>{data[1].title}</h1>
                                            <p className={styles.time}>{date + " " + care_time}</p>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }
                // data[0] === 'care_actions'以外の時はバイタル記録を表示する
                else {
                    return (
                        <div className={styles.dataWrapper}>
                            {console.log(data)}
                            <div key={index} className={styles.data}>
                                <h1>{data[1]}</h1>
                            </div>
                        </div>
                    )
                }
            })
            }
        </div>
    )
}

export default index
