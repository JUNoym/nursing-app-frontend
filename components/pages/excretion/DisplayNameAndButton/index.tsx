import React, { useEffect, useCallback, useReducer } from 'react'
import styles from './index.module.scss'

//api
import api from '../../../../api/config'


const initialState = {
    data: [],
    loading: true,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "end": {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
    }
}

const index = () => {

    const [state, dispatch] = useReducer(reducer, initialState)



    const fetchData = useCallback(async () => {
        const result = await api().get("/user_care_actions")
        dispatch({ type: "end", data: result.data })
        console.log(result.data)
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

    const fetchUserCareActions = (user_id, user_name) => {
        api().get(`users/${user_id}`, {
        }).then(response => {
            const care_actions = response.data.map(response => {
                return { "title": response.name, "time": response.updated_at }
            })
            const response_data = { "user_name": user_name, "user_id": user_id, "care_actions": care_actions }
            return response_data
        })
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
                                    const time = care_action.created_at
                                    const date = new Date(time)
                                    const year = date.getFullYear()
                                    const month = date.getMonth() + 1
                                    const day = date.getDate()
                                    const hour = date.getHours()
                                    const minute = date.getMinutes()
                                    const second = date.getSeconds()


                                    return (
                                        <>
                                            <p className={styles.module_space}></p>
                                            <p>{(care_action.name)}</p>
                                            <p>{
                                                (
                                                    month + "/" + day + " " + hour + ":" + minute
                                                )
                                            }
                                            </p>
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