import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import useSWR from 'swr'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

// コンポーネント
import DisplayName from '../../DisplayName'
import { HeadlineLink } from '../../ui/HeadlineLink'

import api from '../../../api/config'

type Array = {
    info: string[]
    type: string
    user_name: string
}[]

const index = () => {
    const router = useRouter()
    const [data, setData] = useState<Array>()
    // const { data, error } = useSWR(`api().get('/search?q=${router.query.q}')`)

    useEffect(() => {
        const fetchData = async () => {
            if (router.query.type == 'name') {
                const res = await api().get(`/archives/search?type=name&q=${router.query.q}`)
                console.log(res.data.result, 'res.data')
                setData(res.data.result)
                // {type: 'vital', user_name: 'isomura', info: {…}}
                var array = Object.entries(data)
                console.log(array, 'array')
                setData(array)
            }
            // http://localhost:3030/api/v1/archives/search/?type=date&q=2021-12-27
            else if (router.query.type == 'date') {
                const res = await api().get(`/archives/search?type=date&q=${router.query.q}`)
                setData(res.data)
                var array = Object.entries(data)
                console.log(array, 'array')
                setData(array)

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
                                return (
                                    <DisplayName
                                        key={index}
                                        info={item.info}
                                        type={item.type}
                                        user_name={item.user_name}
                                    />
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
