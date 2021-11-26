import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

//api
import api from '../../../../api/config'

const index = () => {
    const [content, setContent] = useState([])

    useEffect(() => {
        api().get('vital_users').then(res => {
            setContent(res.data)
            console.log(res.data, "レスポンス")
        })
    }, [])



    return (
        <div className={styles.container}>
            {console.log(content, "content")}
            {content.map(data => {
                return (
                    <div className={styles.miniContainer}>
                        <div className={styles.content}>
                            <h1>{data.name}様</h1>
                            <p>KT:{data.kt}</p>
                            <p>BP: {data.bp}</p>
                            <p>P: {data.plus}回/m</p>
                            <p>SPO2: {data.spo2}%</p>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default index