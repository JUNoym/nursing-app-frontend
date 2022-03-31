import React, { useState } from 'react'
import styles from './index.module.scss'
import toast, { Toaster } from 'react-hot-toast'
import clsx from 'clsx'



// material-ui
import Button from '@material-ui/core/Button'
import AddTaskIcon from '@material-ui/icons/AddCircleOutline'

//api
import api from '../../../../api/config'
// コンポーネント

// types
// import { InputRegisterStaff } from '../../../../types/pages/register_staff'

const notify = () => toast.success(
    'スタッフを追加しました', {
    icon: '👤',
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
}
)

const index = () => {
    const initialState: any = {
        // TODO ここの型エラーをanyではなくInputRegisterStaffを使うようにする
        name: '',
        have_work: true,
        work_in: '',
        work_out: '',
    }
    const [state, setState] = useState(initialState)

    const handleInputChange = (e) => {
        const { value } = e.target
        setState({
            ...state,
            name: value,
        })
    }

    const handleWorkInChange = (e) => {
        const { value } = e.target
        setState({
            ...state,
            work_in: value,
        })
    }

    const handleWorkOutChange = (e) => {
        const { value } = e.target
        setState({
            ...state,
            work_out: value,
        })
    }

    const handleHasWorkChange = () => {
        setState({
            ...state,
            have_work: true,
        })
    }

    const handleHasNotWorkChange = () => {
        setState({
            ...state,
            have_work: false,
        })
    }

    const saveName = async () => {
        var data = {
            name: state.name,
            have_work: state.have_work,
            work_in: state.work_in,
            work_out: state.work_out,
        }
        api().post('/register_staffs', data)
    }

    const isActive = (state) => {
        if (state.name !== '', state.work_in !== '', state.work_out !== '') {
            return true
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.form}>
                <div className={styles.input_field}>
                    <h1>名前</h1>
                    <input
                        type="text"
                        placeholder="スタッフを追加"
                        value={state.name}
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
                            onChange={handleWorkInChange}
                        />
                        <input
                            type="time"
                            name="example"
                            onChange={handleWorkOutChange}
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
                            onChange={handleHasWorkChange}
                        />
                        <label>有</label>
                        <input
                            type="radio"
                            name="is_attendance"
                            onChange={handleHasNotWorkChange}
                        />
                        <label>無</label>
                    </div>
                </div>
            </div>

            <div className={styles.ButtonWrapper}>
                <Button
                    className={clsx(styles.Button, isActive(state) && styles.Active)}
                    variant="contained"
                    onClick={() => {
                        saveName()
                        notify()
                    }}
                >
                    <AddTaskIcon classes={{ root: styles.add }} />
                    スタッフ追加
                </Button>
            </div>
        </div >
    )
}

export default index
