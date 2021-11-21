import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import api from '../../../../api/config'
import { useRouter } from 'next/router'

const index = (props) => {
    const initialTodoState = {
        id: null,
        name: '',
        is_completed: false
    }

    const [todo, setTodo] = useState(initialTodoState)


    const router = useRouter()

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setTodo({ ...todo, [name]: value })
        // todoをスプレッド構文で展開して、その中の要素であるnameカラムを更新している
    }

    const saveTodo = () => {
        var data = {
            name: todo.name,
        }

        api().post('/todos', data)
            .then(res => {
                setTodo({
                    id: res.data.id,
                    name: res.data.name,
                    is_completed: res.data.is_completed
                })
                setTodo(initialTodoState)
                //他に書き方があるので改善する↓
                window.location.reload()
            })
    }

    return (
        <div className={styles.input}>
            <input
                type="text"
                placeholder="タスクを追加する"
                value={todo.name}
                onChange={handleInputChange}
                name="name"
            />
            <button
                onClick={saveTodo}
                disabled={!todo.name}
            >
                追加
            </button>
        </div>
    )
}

export default index
