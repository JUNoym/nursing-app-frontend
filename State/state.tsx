import React from 'react';
import { proxy, useSnapshot } from 'valtio'

// どこからでもアクセスできるようにexport
export const state = proxy(
    {
        count: 0,
        Todo: [
            {
                id: 1,
                title: "やること1",
                is_done: false
            },
            {
                id: 2,
                title: "やること2",
                is_done: false
            },
            {
                id: 3,
                title: "やること3",
                is_done: true
            }
        ]
    }
)