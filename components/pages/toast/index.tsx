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

// token
import { setAuthorizationHeader } from '../../../api/config'

// type
type Inputs = {
    name: string
    email: string
    password: string
}



const Index = () => {
    // react-hook-form
    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>

                <div className={styles.actions}>
                    <Button
                        variant="contained"
                        classes={{ root: styles.Button }}
                    >
                        トーストテスト
                    </Button>
                </div>
            </Container>
        </div >
    )
}

export default Index
