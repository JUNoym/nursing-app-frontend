import React, { useState } from 'react'
import styles from './index.module.scss'

// material-ui
import Button from '@material-ui/core/Button'

//api
import api from '../../../../api/config'

const index = () => {
    const initialState = {
        id: null,
        name: '',
    }
    const [name, setName] = useState(initialState)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setName({
            ...name,
            [name]: value
        })
    }

    const saveName = async () => {
        var data = {
            name: name.name,
        }
        // apiが完成したらここを修正
        // api().post('/users', data)
        // window.location.reload()
    }

    return (
        <div className={styles.content}>
            <div className={styles.form}>
                <input
                    type="text"
                    placeholder="スタッフを追加"
                    value={name.name}
                    onChange={handleInputChange}
                    name="name"
                />
            </div>

            <div className={styles.ButtonWrapper}>
                <Button
                    classes={{ root: styles.Button }}
                    variant="contained"
                    disabled={!name.name}
                    onClick={() => {
                        saveName()
                    }}
                >
                    スタッフ追加
                </Button>
            </div>
        </div>
    )
}

export default index
