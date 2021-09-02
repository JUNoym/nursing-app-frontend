import React from 'react'
import styles from './index.module.scss'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'


const SendNameAndDiary = (props) => {
    const { name, text, setText, setName } = props
    return (
        <div className={styles.content}>
            <CssBaseline />
            <div className={styles.Wrapper}>
                <Button
                    variant="contained"
                    classes={{ root: styles.Button }}
                    onClick={() => {
                        setText(text)
                        setName(name)
                        console.log(`${name}と${text}が送信された`)
                    }}
                >
                    日誌を保存
                </Button>
            </div>
        </div>
    )
}


export default SendNameAndDiary
