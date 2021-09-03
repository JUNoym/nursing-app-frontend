import React, { useState } from 'react'
import styles from './index.module.scss'

// material-ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const InputName = props => {
    const [name, setName] = useState('')

    return (
        <div className={styles.Wrapper}>
            <div className={styles.content}>
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
            </div>
            <div className={styles.ButtonWrapper}>
                <Button
                    variant="contained"
                    classes={{ root: styles.Button }}
                    onClick={() => {
                        setName(name)
                    }}
                >
                    名前を保存
                </Button>
            </div>
        </div>
    )
}

export default InputName
