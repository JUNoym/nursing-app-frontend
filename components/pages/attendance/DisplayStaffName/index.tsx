import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

// api
import api from '../../../../api/config'
// types
import { InputRegisterStaff } from '../../../../types/pages/register_staff'

// MUI
import { Button } from '@material-ui/core'

type Array = {
    name?: string,
    have_work?: boolean,
    work_in?: string | Date,
    work_out?: string | Date,
}[]
const index = () => {
    const [data, setData] = useState<InputRegisterStaff>()

    useEffect(() => {
        const fetchData = async () => {
            const res = await api().get('/register_staffs')
            // TODO ここの型エラーを直す
            const EditedData: any = Object.entries(res.data).map((d: Array) => {
                return [d[1].name, d[1].have_work, d[1].work_in, d[1].work_out]
            })
            setData(EditedData)
        }
        fetchData()
    }, [])

    return (
        <div className={styles.content}>
            {
                data ? data.map((d) => {
                    let startTime = d[2] ? d[2].slice(11, 16).split('T') : '登録されていません'
                    let endTime = d[3] ? d[3].slice(11, 16).split('T') : '登録されていません'
                    return (
                        <div className={styles.container}>
                            <div className={styles.name_attendance}>
                                <h1>{d[0]}</h1>
                                <div className={styles.ButtonWrapper}>
                                    {d[1] ?
                                        <Button
                                            classes={{ root: styles.Button }}
                                        >
                                            出勤
                                        </Button>
                                        :
                                        <Button
                                            classes={{ root: styles.Button_holiday }}
                                        >
                                            休み
                                        </Button>
                                    }
                                </div>
                            </div>
                            <div className={styles.attendance}>
                                <h1>出勤時間 : {startTime}</h1>
                                <h1>退勤時間 : {endTime}</h1>
                            </div>
                        </div>
                    )
                })
                    :
                    <h1>データないよ</h1>
            }
        </div>
    )
}

export default index