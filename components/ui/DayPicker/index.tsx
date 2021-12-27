import React, { useState } from 'react'
import styles from './index.module.scss'

import api from '../../../api/config'
import router from 'next/router';

// material-ui
import Button from '@material-ui/core/Button'



const Index = props => {
    const [date, setDate] = useState()

    const handleClick = (date) => {
        router.push({
            pathname: '/result',
            query: {
                type: 'date',
                q: date
            }
        })
    }

    return (
        <div className={styles.content}>
            <div className={styles.Wrapper}>
                <input
                    type="date"
                    name="name"
                    onChange={(e: any) => setDate(e.target.value)}
                />

                <Button
                    variant="contained"
                    classes={{ root: styles.Button }}
                    onClick={() => {
                        handleClick(date)
                    }}
                >
                    指定した日付で検索
                </Button>
            </div>
        </div>
    )
}

export default Index