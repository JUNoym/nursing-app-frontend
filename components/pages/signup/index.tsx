import React, { useState } from 'react'
import styles from './index.module.scss'
import { useForm } from 'react-hook-form'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'

// api
import api from '../../../api/config'

// type
type Inputs = {
    name: string
    email: string
    password: string
}



const Index = () => {
    // react-hook-form
    const { register, handleSubmit } = useForm()

    const onSubmit = async (input: Inputs) => {
        console.log(input)
        const res = await api().post("/auth_users/", input)
        if (res.data.status === "SUCCESS") {
            alert("登録しました")
            window.location.href = "/"
        }
        else {
            alert("登録に失敗しました")
        }
    }

    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <div className={styles.form}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <h1>Sign Up</h1>
                            </Grid>

                            <Grid item xs={12}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="">お名前</label>
                                    <FormControl
                                        variant="outlined"
                                        className={styles.formControl}
                                        fullWidth
                                    >
                                        <input
                                            required
                                            id="name"
                                            autoComplete="name"
                                            {...register('name')}
                                        />
                                    </FormControl>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="">メールアドレス</label>
                                    <FormControl
                                        variant="outlined"
                                        className={styles.formControl}
                                        fullWidth
                                    >
                                        <input
                                            required
                                            id="email"
                                            autoComplete="email"
                                            {...register('email')}
                                        />
                                    </FormControl>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="">パスワード</label>
                                    <FormControl
                                        variant="outlined"
                                        className={styles.formControl}
                                        fullWidth
                                    >
                                        <input
                                            required
                                            type="password"
                                            id="password"
                                            {...register('password')}
                                            autoComplete="current-password"
                                        />
                                    </FormControl>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="">パスワード確認</label>
                                    <FormControl
                                        variant="outlined"
                                        className={styles.formControl}
                                        fullWidth
                                    >
                                        <input
                                            required
                                            type="password"
                                            id="password_confirmation"
                                            {...register('password_confirmation')}
                                            autoComplete="current-password"
                                        />
                                    </FormControl>
                                </div>
                                <div className={styles.actions}>
                                    <Button
                                        variant="contained"
                                        classes={{ root: styles.Button }}
                                        onClick={handleSubmit(onSubmit)}

                                    >
                                        sign up
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Container>
        </div >
    )
}

export default Index
