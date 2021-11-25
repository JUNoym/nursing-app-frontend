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
import { HeadlineLink } from '../../ui/HeadlineLink';


const Index = () => {
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const date = format(new Date(), 'MM月dd日の日誌', { locale: ja })
    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <HeadlineLink />

                <div className={styles.form}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <h1>バイタルチェック</h1>
                                {/* テスト */}
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
