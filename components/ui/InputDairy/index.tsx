import React, { useState } from 'react'
import styles from './index.module.scss'

// firebase
import { pushNameAndDiary } from '../../../firebase-config'

// material-ui
import AddTaskIcon from '@material-ui/icons/AddCircleOutline'
import Button from '@material-ui/core/Button'


const InputDairy = props => {
    const { name, text, setName, setText } = props

    return (
        <div className={styles.content}>
            <div className={styles.form}>
                <input
                    className={styles.input}
                    required
                    placeholder="名前を入力"
                    id="outlined-name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    className={styles.input}
                    required
                    placeholder="利用者の様子を記録"
                    id="outlined-name"
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
                        pushNameAndDiary({ name, text })
                    }}
                >
                    <AddTaskIcon classes={{ root: styles.add }} />
                    利用者を追加
                </Button>
            </div>
        </div>
    )
}

export default InputDairy
