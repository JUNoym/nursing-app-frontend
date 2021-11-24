import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

//api
import api from '../../../../api/config'
import { resourceLimits } from 'worker_threads'


const index = () => {
    const [name, setName] = useState([])
    useEffect(() => {
        api().get("/excretion").then(res => {
            console.log(res.data)
            const result = res.data.map(r => {
                return r.name
            })
            setName(result)
        })
    }, [])

    { console.log(name, "name") }
    return (
        <div className={styles.container}>
            {name.map(n => {
                return (
                    <div className={styles.miniContainer}>
                        <div className={styles.content}>
                            <h1>{n}</h1>
                            <div className={styles.buttonContainer}>
                                <button>排便</button>
                                <button>排尿</button>
                                <button>パッド交換</button>
                            </div>
                        </div>
                        <div className={styles.time}>
                            <p>時間を表示</p>
                        </div>
                    </div>

                )
            })}
        </div >
    )
}

export default index
