import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

//api
import api from '../../../../api/config'

const index = () => {
    const [name, setName] = useState([])

    useEffect(() => {
        api().get('vital_users').then(res => {
            setName(res.data)
            console.log(res.data)
        })
    }, [])



    return (
        <div className={styles.container}>
            {name.map(data => {
                return (
                    <div className={styles.miniContainer}>
                        <div className={styles.content}>
                            <h1>{data.name}</h1>
                            <p>KT: 36.6</p>
                            <p>BP: 122/65</p>
                            <p>P: 55</p>
                            <p>SPO2: 98%</p>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default index