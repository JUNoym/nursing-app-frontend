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
                loading: false,
            }
        }
    }
}


const index = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getContent = useCallback(async () => {
        const response = await api().get('/vital_users')
        dispatch({
            type: "end",
            data: response.data,
        })
    }, [])


    useEffect(() => {
        getContent()
    }, [getContent])


    if (state.loading) {
        return <h1>loading...</h1>
    }

    if (state.data.length === 0) {
        return <h1>no data</h1>
    }

    return (
        <div className={styles.container}>
            {(state.data.map(d => {
                return (
                    <div className={styles.miniContainer}>
                        <div className={styles.content}>
                            <h1>{d.name}様</h1>
                            <p>KT:{d.kt}</p>
                            <p>BP: {d.bp}</p>
                            <p>P: {d.plus}回/m</p>
                            <p>SPO2: {d.spo2}%</p>
                        </div>
                    </div>
                )
            })
            )
            }
        </div >
    )
}

export default index