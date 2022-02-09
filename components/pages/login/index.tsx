import React, { HtmlHTMLAttributes } from 'react'
import styles from './index.module.scss'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



const Index = (props) => {
    const { loggedInStatus, setLoggedInStatus } = props

    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <p>password : qqqq</p>
                <div className={styles.form}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <h1>パスワードを入力して入室 </h1>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={styles.textField}
                                    id="outlined-helperText"
                                    label="パスワードを入力"
                                    type='password'
                                    onChange={(e) => {
                                        e.target.value === process.env.NEXT_PUBLIC_PASSWORD ? setLoggedInStatus("ログイン中") : setLoggedInStatus("未ログイン")
                                    }}
                                />
                            </Grid>


                        </Grid>
                    </Box>
                </div>
            </Container >
        </div >
    )
}

export default Index

