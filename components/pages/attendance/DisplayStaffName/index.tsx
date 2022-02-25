import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
// api
import api from '../../../../api/config'
// types
import { InputRegisterStaff } from '../../../../types/pages/register_staff'


const index = () => {
    const [data, setData] = useState<InputRegisterStaff>()
    useEffect(() => {
        const fetchData = async () => {
            const res = await api().get('/register_staffs')
            setData(res.data)
            console.log(res.data)
        }
        fetchData()
    }, [])
    return (
        <>
            <CssBaseline />
            {
                <h1>{JSON.stringify(data)}</h1>
            }
        </>
    )
}

export default index