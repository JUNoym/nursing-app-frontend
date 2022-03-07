import React, { useEffect, useState, useCallback } from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { proxy, useSnapshot } from 'valtio'



// api
import api from '../../../../api/config'
// types
import { InputRegisterStaff } from '../../../../types/pages/register_staff'

// MUI
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
// Store
import { GlobalData } from './..//././../../../State/state'


type Array = {
    id?: number
    name?: string,
    have_work?: boolean,
    work_in?: string | Date,
    work_out?: string | Date,
}[]
const index = () => {
    const [data, setData] = useState<InputRegisterStaff>()
    // const [Gdata, setGData] = useState<InputRegisterStaff>()
    const res = useSnapshot(GlobalData.data)


    const fetchData = useCallback(async () => {
        const res = await api().get("/register_staffs")
        setData(res.data)
    }, [])

    const handleClickDelete = (id: number) => {
        api().delete(`/register_staffs/${id}`)
            .then(() => {
                fetchData()
            })
    }

    const update_has_work = async (id: number, value: boolean) => {
        await api().put(`/register_staffs/update_status/?id=${id}&have_work=${value}`)
            .then((res) => {
                console.log(res.data)
                fetchData()
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await api().get('/register_staffs')
            // TODO ここの型エラーを直す
            const EditedData: any = Object.entries(res.data).map((d: Array) => {
                return [d[1].id, d[1].name, d[1].have_work, d[1].work_in, d[1].work_out]
            })
            setData(EditedData)
        }
        fetchData()
    }, [res])

    return (
        <div className={styles.content}>
            {
                res ? res.map((d) => {
                    // let startTime = d[3] ? d[3].slice(11, 16).split('T') : '登録されていません'
                    // let endTime = d[4] ? d[4].slice(11, 16).split('T') : '登録されていません'
                    return (
                        <div className={styles.container}>
                            <div className={styles.name_attendance}>
                                <h1>{d[1]}</h1>
                                <div className={styles.Delate_icon}>
                                    <button
                                        className={styles.deleteButton}
                                        onClick={() => {
                                            handleClickDelete(d[0])
                                        }}
                                    >
                                        <DeleteIcon />
                                    </button>
                                </div>
                                <div className={styles.ButtonWrapper}>
                                    {d[2] ?
                                        <Button
                                            classes={{ root: styles.Button }}
                                            onClick={() => {
                                                update_has_work(d[0], !d[2])
                                            }}
                                        >
                                            出勤
                                        </Button>
                                        :
                                        <Button
                                            classes={{ root: styles.Button_holiday }}
                                            onClick={() => {
                                                update_has_work(d[0], !d[2])
                                            }}
                                        >
                                            休み
                                        </Button>
                                    }
                                </div>
                            </div>
                            <div className={styles.attendance}>
                                {/* <h1>出勤時間 : {startTime}</h1> */}
                                {/* <h1>退勤時間 : {endTime}</h1> */}
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