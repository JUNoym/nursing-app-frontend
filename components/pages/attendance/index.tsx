import React from 'react'
import styles from './index.module.scss'
import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';

// コンポーネント
import { HeadlineLink } from '../../ui/HeadlineLink'
import RegisterName from '../attendance/register_staff'
import DisplayStaffName from './DisplayStaffName'


const Index = () => {

    const date = format(new Date(), 'MM月dd日の出勤表', { locale: ja })
    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <HeadlineLink />
                <h1>{date}</h1>
                <DisplayStaffName />
                <div className={styles.form}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <RegisterName />
                            </Grid>

                        </Grid>
                    </Box>
                </div>
            </Container>
        </div >
    )
}

export default Index
