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

    const removeAllTodos = () => {
        const sure = window.confirm('本当に全てのTodoを削除しますか？')
        if (sure) {
            api().delete('/todos/destroy_all')
                .then(res => {
                    console.log(res.data, "レスポンス")
                    setTodos([])
                })
        }
    }

    const updateIsCompleted = (index, value) => {
        var data = {
            id: value.id,
            name: value.name,
            is_completed: !value.is_completed
        }
        api().patch(`/todos/${value.id}`, data)
            .then(res => {
                const newTodos = [...todos]
                newTodos[index].is_completed = res.data.is_completed
                setTodos(newTodos)
            }
            )
    }

    return (
        <>
            <h1>Todoリスト</h1>
            <button onClick={removeAllTodos}>
                Remove All
            </button>
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
