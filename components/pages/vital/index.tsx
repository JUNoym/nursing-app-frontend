import React, { useState } from 'react'
import styles from './index.module.scss'
import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

// コンポーネント
import { HeadlineLink } from '../../ui/HeadlineLink'
import InputName from '../vital/InputName'
import DisplayNameAndContents from '../vital/DisplayNameAndContents'


const Index = () => {
    const date = format(new Date(), 'MM月dd日のバイタル記録', { locale: ja })
    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <HeadlineLink />
                <h1>{date}</h1>
                <div className={styles.form}>
                    <Box sx={{ flexGrow: 1 }}>
                        <DisplayNameAndContents />
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <h1>バイタルチェック</h1>
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
