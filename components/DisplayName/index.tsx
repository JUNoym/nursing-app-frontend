import React from 'react'
import styles from './index.module.scss'


const index = (props) => {
    const { info } = props
    // {kt: '12', bp: '12', plus: '12', spo2: '132'}
    // {care_actions: Array(1)}
    return (
        <div className={styles.content}>
            {Object.entries(info).map((data, index) => {
                // console.log(data, 'data')
                // data[0] === 'care_actions'の時排泄と表示する
                if (data[0] === 'care_actions') {
                    return (
                        <div key={index}>
                            <h1>排泄記録を表示</h1>
                        </div>
                    )
                }
                // data[0] === 'care_actions'以外の時
                else {
                    return (
                        <div key={index}>
                            <h1>{data[1]}</h1>
                        </div>
                    )
                }
            })
            }
        </div>
    )
}

export default index
