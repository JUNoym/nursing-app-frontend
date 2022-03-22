import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import clsx from 'clsx'
import toast, { Toaster } from 'react-hot-toast'


// material-ui
import Button from '@material-ui/core/Button'
import AddTaskIcon from '@material-ui/icons/AddCircleOutline'

//api
import api from '../../../../api/config'

const notify = () => toast.success(
    'データを保存しました。', {
    icon: '👏',
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
}
)


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

        api().post('/users', data)
    }

    const isActive = (name) => {
        if (name === !null) {
            return true
        }
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
                    className={clsx(styles.Button, isActive(name) && styles.Active)}
                    variant="contained"
                    disabled={!name.name}
                    onClick={() => {
                        saveName()
                        notify()
                    }}
                >
                    <AddTaskIcon classes={{ root: styles.add }} />
                    利用者を追加
                </Button>
            </div>
        </div >
    )
}

export default index
