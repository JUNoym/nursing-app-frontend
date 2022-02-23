import React, { useState } from 'react'
import { useSnapshot } from 'valtio'
import { state } from '../State/state'

const valtio = () => {
    const snap = useSnapshot(state)
    console.log(snap.Todo)
    const [text, setText] = useState('')
    const handler_click = () => {
        state.count += 10
    }
    const add_todo = () => {
        state.Todo.push({
            id: state.Todo.length + 1,
            title: text,
            is_done: false
        })
        setText('')
    }
    return (
        <>
            <div>valtio_test</div>
            <p>{snap.count}</p>
            <button onClick={handler_click}>+10</button>
            <div>
                {
                    snap.Todo.map((t, index) => {
                        return (
                            <div key={index}>
                                {t.title}
                                {
                                    t.is_done ?
                                        <input type="checkbox" checked />
                                        :
                                        <input type="checkbox" />
                                }
                            </div>
                        )
                    })
                }
            </div>
            <input type="text"
                onChange={(e) => {
                    setText(e.target.value)
                }}
                value={text}
            />
            <button onClick={add_todo}>追加</button>
        </>
    )
}

export default valtio