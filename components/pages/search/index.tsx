import React, { useState } from 'react'
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
import Search from '../../../components/ui/InputModule'


const Index = () => {
    const date = format(new Date(), 'MM月dd日', { locale: ja })
    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <HeadlineLink />
                <div className={styles.form}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <h1>検索</h1>
                            </Grid>

                            <Grid item xs={12}>
                                <Search />
                            </Grid>

                        </Grid>
                    </Box>
                </div>
            </Container>
        </div >
    )
}

export default Index
