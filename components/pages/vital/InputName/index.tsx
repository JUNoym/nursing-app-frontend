import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'

//ui
import Button from '@material-ui/core/Button'


//api
import api from '../../../../api/config'

const index = () => {
    const inisialState = {
        id: null,
        name: '',
    }

    const [name, setName] = useState(inisialState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setName({
            ...name,
            [name]: value
        })
    }

    const saveName = async () => {
        var data = {
            name: name.name,
        }

        api().post('/vital_users', data)
        window.location.reload()
    }


    return (
        <div className={styles.content}>
            <div className={styles.form}>
                <input
                    type="text"
                    placeholder="利用者を追加"
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
                    利用者を追加
                </Button>
            </div>
        </div>
    )
}

export default index
