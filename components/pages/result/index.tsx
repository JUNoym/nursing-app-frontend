import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router';

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

// コンポーネント
import DisplayName from '../../DisplayName'
import { HeadlineLink } from '../../ui/HeadlineLink'

import api from '../../../api/config'


const index = () => {
    const router = useRouter()
    const [data, setData] = useState()
    const [name, setName] = useState()
    const [info, setInfo] = useState()

    useEffect(() => {
        const fetchData = async () => {
            let array_name: any = []
            let array_info: any = []
            if (router.query.type == 'name') {
                const res = await api().get(`/archives/search?type=name&q=${router.query.q}`)
                for (let i of res.data.result) {
                    const name = i.user_name
                    const info = i.info
                    array_name.push(name)
                    array_info.push(info)
                    setName(array_name)
                    setInfo(array_info)
                }
            }
            // http://localhost:3030/api/v1/archives/search/?type=date&q=2021-12-27
            else if (router.query.type == 'date') {
                const res = await api().get(`/archives/search?type=date&q=${router.query.q}`)
                setData(res.data)
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
                            <>
                                <DisplayName key={index} name={name} info={info} />
                            </>
                        }
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}



export default index
