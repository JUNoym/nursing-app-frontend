import React from 'react'
import styles from './index.module.scss'


const index = (props) => {
    const { info } = props
    return (
        <div className={styles.content}>
            {Object.entries(info).map((data, index) => {
                console.log(data[1], 'data')
                // data[0] === 'care_actions'の時排泄記録を表示する
                if (data[0] === 'care_actions') {
                    return (
                        <div key={index}>
                            {Object.entries(data[1]).map((data, index) => {
                                return <h1>{data[1].title}</h1>
                            })}
                        </div>
                    )
                }
                // data[0] === 'care_actions'以外の時はバイタル記録を表示する
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
