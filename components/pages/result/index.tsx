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
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const result = await api().get(`/archives/search_name?name=${router.query.name}`)
            // console.log(result.data, 'result')
            const data = result.data
            const array = Object.entries(data)
            const array2 = array.map(([key, value]) => {
                return value
            })
            // console.log(array2, 'array2')
            const array3 = array2.flat()
            console.log(array3.flat(), 'array3')

            // setData(array3)
            const list = array3.map(obj => {
                const 体調 = [obj.name, obj.kt, obj.bp, obj.plus, obj.spo2]
                // const excretion = [obj.user_name, obj.care_actions]
                return { 体調 }
            })
            const list2 = array3.map(obj => {
                const 排泄 = [obj.user_name, obj.care_actions]
                return { 排泄 }
            })
            // console.log(...list, 'list')
            // console.log(...list2, 'list2')
            const list3 = [...list, ...list2]
            // console.log(list3, 'list3')
            setData(...list3)
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
                            <h1>{JSON.stringify(data)}</h1>
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}



export default index
