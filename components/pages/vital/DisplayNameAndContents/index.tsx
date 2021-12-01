import React, { useEffect, useState, useCallback } from 'react'
import styles from './index.module.scss'

//api
import api from '../../../../api/config'

const index = () => {
    const [content, setContent] = useState([])

    const getContent = useCallback(async () => {
        const response = await api().get('/vital_users')
        setContent(response.data)
    }, [])


    useEffect(() => {
        getContent()
    }, [getContent])



    return (
        <div className={styles.container}>
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