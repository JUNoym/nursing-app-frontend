import React, { useState } from 'react'
import styles from './index.module.scss'

// material-ui
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';



const Index = props => {

    return (
        <div className={styles.Wrapper}>
            <div className={styles.content}>
                <input
                    type="text"
                    placeholder="利用者を追加"
                    name="name"
                />

                <Button
                    variant="contained"
                    classes={{ root: styles.Button }}
                    onClick={() => {
                    }}
                >
                    <SearchIcon />
                </Button>
            </div>
        </div>
    )
}

export default Index
