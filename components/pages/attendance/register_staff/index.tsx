import React, { useState } from 'react'
import styles from './index.module.scss'

// material-ui
import Button from '@material-ui/core/Button'

//api
import api from '../../../../api/config'

// types
// import { InputRegisterStaff } from '../../../../types/pages/register_staff'
const index = () => {
    const initialState: any = {
        // TODO ここの型エラーをanyではなくInputRegisterStaffを使うようにする
        name: '',
        have_work: true,
        work_in: '',
        work_out: '',
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
            have_work: false,
            work_in: '',
            work_out: '',
        }
        api().post('/register_staffs', data)
        window.location.reload()
    }

    return (
        <div className={styles.content}>
            <div className={styles.form}>
                <div className={styles.input_field}>
                    <h1>名前</h1>
                    <input
                        type="text"
                        placeholder="スタッフを追加"
                        value={name.name}
                        onChange={handleInputChange}
                        name="name"
                    />
                </div>
                <div className={styles.input_field}>
                    <div>
                        <h1>出勤時間</h1>
                    </div>
                    <div className={styles.time_select}>
                        <input
                            type="time"
                            name="example"
                        />
                        <input
                            type="time"
                            name="example"
                        />
                    </div>
                </div>
                <div className={styles.input_field}>
                    <div>
                        <h1>出勤有無</h1>
                    </div>

                    <div className={styles.is_attendance}>
                        <input
                            type="radio"
                            name="is_attendance"
                            checked
                        />
                        <label htmlFor="huey">有</label>
                        <input
                            type="radio"
                            name="is_attendance"
                        />
                        <label htmlFor="huey">無</label>
                    </div>
                </div>
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
        </div >
    )
}

export default index
