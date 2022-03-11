import React, { useState } from 'react';
import { proxy, useSnapshot } from 'valtio'
import api from '../api/config'

type Array = {
    id?: number
    name?: string,
    have_work?: boolean,
    work_in?: string | Date,
    work_out?: string | Date,
}[]

// どこからでもアクセスできるようにexport
export const GlobalData = proxy(
    {
        data: []
    }
)

export const fetchData = async () => {
    const res = await api().get('/register_staffs')
    const EditedData: any = Object.entries(res.data).map((d: Array) => {
        return [d[1].id, d[1].name, d[1].have_work, d[1].work_in, d[1].work_out]
    })
    GlobalData.data.push(EditedData)
}


