import React, { useState } from 'react'
import styles from './index.module.scss'

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
    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                            <h1>名前</h1>
                        </Grid>
                        <Grid item xs={9}>
                            <h1>日誌</h1>
                        </Grid>
                        <DisplayNameAndDiary name={name} text={text} />
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
