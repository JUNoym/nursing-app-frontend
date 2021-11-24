import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

//api
import api from '../../../../api/config'
import { resourceLimits } from 'worker_threads'
import { getTime } from 'date-fns'


const index = () => {
    const [name, setName] = useState([])
    const [time, setTime] = useState('')
    useEffect(() => {
        api().get("/users").then(res => {
            console.log(res.data)
            const result = res.data.map(r => {
                return r.name
            })
            setName(result)
        })
    }, [])

    const getTime = () => {
        console.log("時間が取得された！")
        const date = new Date()
        const res = date.getHours() + ":" + date.getMinutes()
        console.log(res)
        setTime(res)
    }

    const saveAction = () => {
        console.log("保存した！")
        // api().post("/users", {
        //     name: time
        // }).then(res => {
        //     console.log(res.data)
        // })
    }

    const saveTime = (time) => {



        console.log((time), "ボタンが押された！")
        // var data {
        //     time: time.time,
        // }
        // apiに時間を送る
        api().post("/excretion", {
            time: time
        }).then(res => {
            console.log(res.data)
        }
        )
    }

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
                                <button
                                    onClick={
                                        () => {
                                            saveAction()
                                        }
                                    }>
                                    パッド交換
                                    value={3}
                                </button>
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
