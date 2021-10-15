import React, { useState, useEffect, VFC } from 'react'
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

interface Props {
    today: string
}

const Index: VFC<Props> = () => {
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const today = format(new Date(), 'MM月dd日', { locale: ja })
    const [date, setDate] = useState('')

    const getTime = async () => {
        const time = (await (format(new Date(), 'MM月dd日', { locale: ja })))
        setDate(time)
    }
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
                            <h1>{today}の日誌</h1>
                        </Grid>
                        <DisplayNameAndDiary today={today} />
                    </Grid>
                </Box>

                <div className={styles.form}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <h1>夜勤日誌</h1>
                            </Grid>

                            <Grid item xs={12}>
                                <InputDairy name={name} text={text} setName={setName} setText={setText} today={today} getTime={getTime} date={date} />
                            </Grid>

                        </Grid>
                    </Box>
                </div>
            </Container>
        </div >
    )
}

export default Index
