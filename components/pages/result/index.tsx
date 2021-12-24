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


const index = () => {
    const router = useRouter()
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await api().get(`/archives/search_name?name=${router.query.name}`)
            setData(result.data)
        }
        fetchData()
    }, [])


    for (const [key, value] of Object.entries(data)) {
        console.log(value, "バリュ０")
    }

    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <HeadlineLink />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {
                            (() => {
                                for (const [key, value] of Object.entries(data)) {
                                    return (
                                        <>
                                            <h1>{JSON.stringify(value)}</h1>
                                        </>
                                    )
                                }
                            })()

                        }
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default index
