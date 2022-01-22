import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

// material-ui
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

//api
import api from '../../../api/config'



const Index = () => {

    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const date = format(new Date(), 'MM月dd日の排泄記録表', { locale: ja })
    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <HeadlineLink />
                <h1>{date}</h1>
                <DisplayNameAndButton />
                <div className={styles.form}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <h1>排泄記録表</h1>
                            </Grid>

                            <Grid item xs={12}>
                                <InputName />
                            </Grid>

                        </Grid>
                    </Box>
                </div>
            </Container>
        </div >
    )
}

export default Index
