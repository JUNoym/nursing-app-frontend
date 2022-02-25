import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
// api
import api from '../../../../api/config'
// types
import { InputRegisterStaff } from '../../../../types/pages/register_staff'

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
            console.log(EditedData, "data")
        }
        fetchData()
    }, [])

    return (
        <>
            <CssBaseline />
            {
                data ? data.map((d) => {
                    let startTime = d[2] ? d[2].slice(11, 16).split('T') : '登録されていません'
                    let endTime = d[3] ? d[3].slice(11, 16).split('T') : '登録されていません'
                    return (
                        <>
                            <h1>{d[0]}</h1>
                            {d[1] ? <h1>出勤しています</h1> : <h1>出勤していません</h1>}
                            <h1>出勤時間 : {startTime}</h1>
                            <h1>退勤時間 : {endTime}</h1>
                        </>
                    )
                })
                    :
                    <h1>データないよ</h1>
            }
        </>
    )
}

export default index