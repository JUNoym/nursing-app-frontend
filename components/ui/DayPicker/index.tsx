import React, { useState } from 'react'
import styles from './index.module.scss'

// material-ui
import Button from '@material-ui/core/Button'



const Index = props => {

    return (
        <div className={styles.content}>
            <div className={styles.Wrapper}>
                <input
                    type="date"
                    name="name"
                />

                <Button
                    variant="contained"
                    classes={{ root: styles.Button }}
                    onClick={() => {
                    }}
                >
                    指定した日付で検索
                </Button>
            </div>
        </div>
    )
}

export default Index