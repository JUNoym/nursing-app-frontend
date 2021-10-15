import React, { useState } from 'react'
import styles from './index.module.scss'
import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

// firebase
import { pushNameAndDiary } from '../../../firebase-config'

// material-ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


const InputDairy = props => {
    const { name, text, setName, setText, today, getTime, date } = props

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
                    onClick={() => getTime()}
                    value={name}
                />
                <TextField
                    classes={{ root: styles.text }}
                    fullWidth
                    required
                    placeholder="利用者の様子を記録"
                    margin="none"
                    variant="standard"
                    id="outlined-name"
                    multiline={true}
                    minRows='3'
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />

            </div>

            <div className={styles.ButtonWrapper}>
                <Button
                    classes={{ root: styles.MButton }}
                    variant="outlined"
                    onClick={() => {
                        setText('')
                        setName('')
                        getTime()
                        pushNameAndDiary({ name, text, date })
                    }}
                >
                    利用者を追加
                </Button>
            </div>
        </div>
    )
}

export default InputDairy
