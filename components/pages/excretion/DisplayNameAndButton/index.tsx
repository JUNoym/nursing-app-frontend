import React, { useEffect, useCallback, useReducer } from 'react'
import styles from './index.module.scss'

//api
import api from '../../../../api/config'
// components
import DisplayTimeAndAction from "../DisplayTimeAndAction"

// mui
import DeleteIcon from '@material-ui/icons/Delete'
import ja from 'date-fns/locale/ja'
import { parseISO, format } from 'date-fns'





const initialState = {
    data: [],
    loading: true,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "end": {
            return {
                ...state,
                data: action.data.user_care_actions,
                loading: false
            }
        }
    }
}

const index = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const date = format(new Date(), 'MM月dd日の排泄記録', { locale: ja })



    const fetchData = useCallback(async () => {
        const result = await api().get("/user_care_actions")
        dispatch({ type: "end", data: result.data })
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])


    const saveAction = (user_id, care_action_id) => {
        api().post(`/user_care_actions?user_id=${user_id}&care_action_id=${care_action_id}`, {
        }).then(res => {
            fetchData()
        })
    }

    const deleteAction = (user_id) => {
        api().delete(`/users/${user_id}`, {
        }).then(res => {
            fetchData()
        }
        )
    }



    if (state.loading) {
        return <h1>Loading...</h1>
    }

    if (state.data.length === 0) {
        return <h1>No data</h1>
    }

    return (
        <div className={styles.container}>
            {state.data.map(data => {
                return (
                    <div className={styles.miniContainer}>
                        <div className={styles.content}>
                            <h1>{data.user_name}様</h1>

                            <div className={styles.buttonContainer}>
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => {
                                        deleteAction(data.user_id)
                                    }}
                                >
                                    <DeleteIcon />
                                </button>
                                <button
                                    onClick={
                                        () => {
                                            saveAction(data.user_id, 1)
                                        }
                                    }>排便</button>
                                <button
                                    onClick={
                                        () => {
                                            saveAction(data.user_id, 2)
                                        }
                                    }>排尿</button>
                                <button
                                    onClick={
                                        () => {
                                            saveAction(data.user_id, 3)
                                        }
                                    }>
                                    パッド交換
                                </button>

                                <button
                                    onClick={
                                        () => {
                                            saveAction(data.user_id, 4)
                                        }
                                    }>
                                    失禁
                                </button>
                            </div>
                        </div>
                        <div className={styles.timeWrapper}>
                            <div className={styles.time}>
                                {data.care_actions.map(care_action => {
                                    const time = care_action.registered_at
                                    const date = new Date(time)
                                    const month = date.getMonth() + 1
                                    const day = date.getDate()
                                    const hour = date.getHours()
                                    const minute = date.getMinutes()


                                    return (
                                        <>
                                            <DisplayTimeAndAction care_action={care_action} time={time} />
                                        </>
                                    )
                                }
                                )}
                            </div>
                        </div>
                    </div>

                )
            })
            }
        </div >
    )
}

export default index