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


const Index = () => {
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const date = format(new Date(), 'MM月dd日の日誌', { locale: ja })
    const day = format(new Date(), 'ss', { locale: ja })
    // dateが変更されたら、その変更を<DisplayNameAndDiary />に渡してDiariesを初期化すればできそう
    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                            <h1>名前</h1>
                        </Grid>
                        <Grid item xs={7}>
                            <h1>日誌</h1>
                        </Grid>
                        <Grid item xs={3}>
                            <h1>{date}</h1>
                        </Grid>
                        <DisplayNameAndDiary />
                    </Grid>
                </Box>

                <div className={styles.form}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <h1>夜勤日誌</h1>
                            </Grid>

                            <Grid item xs={12}>
                                <InputDairy name={name} text={text} setName={setName} setText={setText} />
                            </Grid>

                        </Grid>
                    </Box>
                </div>
            </Container>
        </div >
    )
}

export default Index
