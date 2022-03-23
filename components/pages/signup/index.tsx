import React, { useState } from 'react'
import styles from './index.module.scss'
import { useForm } from 'react-hook-form'
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

// token
import { setAuthorizationHeader } from '../../../api/config'

// type
type Inputs = {
    name: string
    email: string
    password: string
}

const notify = () => toast.success(
    'アカウントを作成しました', {
    icon: '👤',
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
}
)


const reload = () => {
    setTimeout(() => {
        window.location.href = "/"
    }, 2000)
}




const Index = () => {
    // react-hook-form
    const { register, handleSubmit } = useForm()

    const onSubmit = async (input: Inputs) => {
        const res = await api().post("/auth/", input)
        setAuthorizationHeader(res.data.data.name)
        var name = localStorage.getItem("deviseAuthToken1")
        if (res.data.status === "success") {
            notify()
            reload()
        }
        else {
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
