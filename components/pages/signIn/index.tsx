import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { useForm } from 'react-hook-form'
import { proxy, useSnapshot } from 'valtio'
import toast, { Toaster } from 'react-hot-toast'


// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'

// api
import api from '../../../api/config'
import { useGetMe } from '../../../api/useGetMe';

// token
import { setAuthorizationHeader } from '../../../api/config'

// type
type Inputs = {
    name: string
    email: string
    password: string
}

const notify = () => toast('ログインしました')



const Index = () => {
    // react-hook-form
    const { register, handleSubmit } = useForm()

    const onSubmit = async (input: Inputs) => {
        const res = await api().post("/auth/sign_in", input)
        const res_id = res.data.data.id
        const res_name = res.data.data.name
        setAuthorizationHeader([res_name, res_id])
        var name = localStorage.getItem("deviseAuthToken1")
        var id = localStorage.getItem("deviseAuthToken2")
        if (res.statusText === "OK") {
            notify()
            window.location.href = "/"
        }
        else {
            alert("ログインに失敗しました")
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
                                <h1>Sign in</h1>
                            </Grid>

                            <Grid item xs={12}>
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
                                <div className={styles.actions}>
                                    <Button
                                        variant="contained"
                                        classes={{ root: styles.Button }}
                                        onClick={handleSubmit(onSubmit)}

                                    >
                                        sign in
                                    </Button>
                                    <Toaster />
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
