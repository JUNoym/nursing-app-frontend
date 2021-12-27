import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router';

// material-ui
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';

// コンポーネント
import DisplayNameAndDiary from '../../ui/DisplayNameAndDiary/index'
import InputDairy from '../../ui/InputDairy/index'
import { HeadlineLink } from '../../ui/HeadlineLink'
import DisplayNameAndButton from '../excretion/DisplayNameAndButton'
import InputName from '../excretion/InputName'

import api from '../../../api/config'
import { InsertEmoticon } from '@material-ui/icons'


const index = () => {
    const router = useRouter()
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            console.log(router.query)
            if (router.query.type == 'name') {
                const res = await api().get(`/archives/search?type=name&q=${router.query.q}`)
                console.log(res.data)
                setData(res.data)
            }
            // http://localhost:3030/api/v1/archives/search/?type=date&q=2021-12-27
            else if (router.query.type == 'date') {
                const res = await api().get(`/archives/search?type=date&q=${router.query.q}`)
                console.log(res.data)
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
                            <h1>{JSON.stringify({ data })}</h1>
                        }
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}



export default index
