import React, { useState } from 'react'
import styles from './index.module.scss'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import List from '@material-ui/core/List'
import DisplayNameAndDiary from '../SendNameAndDiary/index'


const InputDairy = props => {
    const { name, text, setName, setText } = props

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
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    classes={{ root: styles.text }}
                    fullWidth
                    required
                    placeholder="利用者の様子を記録"
                    margin="none"
                    variant="standard"
                    id="outlined-name"
                    multiline="true"
                    minRows='3'
                    onChange={(e) => setText(e.target.value)}
                />

            </div>

            <div className={styles.ButtonWrapper}>
                <Button
                    classes={{ root: styles.MButton }}
                    variant="outlined"
                    onClick={() => {
                        setText(text)
                        setName(name)
                        console.log(`${name}と${text}が送信された`)
                    }}
                >
                    利用者を追加
                </Button>
            </div>
        </div>
    )
}

export default InputDairy
