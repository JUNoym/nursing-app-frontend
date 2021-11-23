import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'

// firebase
import { pushNameAndDiary } from '../../../firebase-config'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import List from '@material-ui/core/List'
import DisplayNameAndDiary from '../SendNameAndDiary/index'

//api
import api from '../../../api/config'


const InputDairy = props => {

    useEffect(() => {
        api().get("/excretion").then(res => {
            console.log(res.data)
        })
    }, [])


    return (
        <div className={styles.content}>
            <div className={styles.form}>
                <TextField
                    classes={{ root: styles.text }}
                    fullWidth
                    required
                    placeholder="名前を入力"
                    margin="none"
                    variant="standard"
                    id="outlined-name"
                // onChange={(e) => setName(e.target.value)}
                // value={name}
                />

            </div>

            <div className={styles.ButtonWrapper}>
                <Button
                    classes={{ root: styles.MButton }}
                    variant="outlined"
                    onClick={() => {
                        setText('')
                        setName('')
                        pushNameAndDiary({ name, text })
                    }}
                >
                    利用者を追加
                </Button>
            </div>
        </div>
    )
}

export default InputDairy
