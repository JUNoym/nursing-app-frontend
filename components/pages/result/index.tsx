import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

// コンポーネント
import DisplayName from '../../DisplayName'
import { HeadlineLink } from '../../ui/HeadlineLink'

import api from '../../../api/config'

type Array = {
    info?: string[]
    type?: string
    time?: string
    user_name?: string
}[]

const index = () => {
    const router = useRouter()
    const [data, setData] = useState<Array>()

    useEffect(() => {
        const fetchData = async () => {
            if (router.query.type == 'name') {
                const res = await api().get(`/archives/search?type=name&q=${router.query.q}`)
                var array = Object.entries(res.data.result).map((data: Array) => {
                    return [data[1].user_name, data[1].info, data[1].time]
                })
                setData(array as Array)
            }
            // http://localhost:3030/api/v1/archives/search/?type=date&q=2021-12-27
            else if (router.query.type == 'date') {
                const res = await api().get(`/archives/search?type=date&q=${router.query.q}`)
                var array = Object.entries(res.data.result).map((data: Array) => {
                    return [data[1].user_name, data[1].info, data[1].time]
                })
                setData(array as Array)

            }

        }
        fetchData()
    }, [])

    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <HeadlineLink />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {
                            // <p>{JSON.stringify(data)}</p>
                            // 三項演算子
                            data ? data.map((item, index) => {
                                let date = item[2] ? item[2].slice(0, 10).split('T') : ''
                                return (
                                    <>
                                        <div className={styles.name_and_date}>
                                            <h1>{item[0]}</h1>
                                            {date ? <p className={styles.time}>{date}</p> : null}
                                        </div>
                                        <DisplayName
                                            key={index}
                                            info={item[1]}
                                        />
                                    </>
                                )
                            }) : <p>データがありません</p>

                        }
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}



export default index
