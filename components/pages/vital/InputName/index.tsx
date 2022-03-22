import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import clsx from 'clsx'
import toast, { Toaster } from 'react-hot-toast'

//ui
import Button from '@material-ui/core/Button'
import AddTaskIcon from '@material-ui/icons/AddCircleOutline'


//api
import api from '../../../../api/config'

const notify = () => toast.success(
    'データを保存しました。', {
    icon: '💉',
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

    const [content, setContent] = useState(initialState)
    const [kt, setKT] = useState('')
    const [bp, setBT] = useState('')
    const [plus, setPLUS] = useState('')
    const [spo2, setSPO2] = useState('')

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setContent({
            ...content,
            [name]: value,
        })
    }
    const handleInputChange2 = (e) => {
        setKT(e.target.value)
    }

    const handleInputChange3 = (e) => {
        setBT(e.target.value)
    }

    const handleInputChange4 = (e) => {
        setPLUS(e.target.value)
    }

    const handleInputChange5 = (e) => {
        setSPO2(e.target.value)
    }


    const isActive = (content, kt, bp, plus, spo2) => {
        if (content.name !== '' && kt !== '' && bp !== '' && plus !== '' && spo2 !== '') {
            return true
        }
    }



    const saveName = async () => {
        var data = {
            name: content.name,
            kt: kt,
            bp: bp,
            plus: plus,
            spo2: spo2,
        }

        api().post('/vital_users', data)
    }


    return (
        <div className={styles.content}>
            <div className={styles.formGrope}>
                <div className={styles.form}>
                    <input
                        type="text"
                        placeholder="名前"
                        value={content.name}
                        onChange={handleInputChange}
                        name="name"
                    />
                </div>
            </div>
            <div className={styles.formGrope}>
                <div className={styles.form}>
                    <input
                        type="text"
                        placeholder="体温"
                        value={kt}
                        onChange={handleInputChange2}
                        name="kt"
                    />
                </div>
                <div className={styles.form}>
                    <input
                        type="text"
                        placeholder="血圧"
                        value={bp}
                        onChange={handleInputChange3}
                        name="bp"
                    />
                </div>
            </div>
            <div className={styles.formGrope}>
                <div className={styles.form}>
                    <input
                        type="text"
                        placeholder="心拍数"
                        value={plus}
                        onChange={handleInputChange4}
                        name="plus"
                    />
                </div>
                <div className={styles.form}>
                    <input
                        type="text"
                        placeholder="SPO2"
                        value={spo2}
                        onChange={handleInputChange5}
                        name="spo2"
                    />
                </div>
            </div>


            <div className={styles.ButtonWrapper}>
                <Button
                    className={clsx(styles.Button, isActive(content.name, kt, bp, plus, spo2) && styles.Active)}
                    variant="contained"
                    disabled={!content.name || !kt || !bp || !plus || !spo2}
                    onClick={() => {
                        saveName()
                        notify()
                    }}
                >
                    <AddTaskIcon classes={{ root: styles.add }} />
                    データを追加
                </Button>
            </div>
        </div>
    )
}

export default index
