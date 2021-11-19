import styles from './index.module.scss'
import React, { useState, useEffect } from 'react'
import api from '../../../api/config'

const index = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        api().get('/todos.json')
            .then(res => {
                console.log(res.data, "レスポンス")
                setTodos(res.data)
            })
    }, [])

    return (
        <>
            <h1>Todoリスト</h1>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <p>{todo.name}</p>
                    </div>
                )
            })}
        </>
    )
}

export default index
