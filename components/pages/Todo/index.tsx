import styles from './index.module.scss'
import React, { useState, useEffect } from 'react'
import api from '../../../api/config'
import DisplayTodo from '../../../components/pages/Todo/DisplayTodo'
import AddTodo from '../../../components/pages/Todo/AddTodo'
import { HeadlineLink } from '../../ui/HeadlineLink';


const index = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        api().get('/todos')
            .then(res => {
                setTodos(res.data)
            })
    }, [])

    const removeAllTodos = () => {
        const sure = window.confirm('本当に全てのTodoを削除しますか？')
        if (sure) {
            api().delete('/todos/destroy_all')
                .then(res => {
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
        <div className={styles.content_top}>
            <div className={styles.content}>
                <HeadlineLink />
                <div className={styles.Todo__list}>
                    <button className={styles.button} onClick={removeAllTodos}>
                        Remove All
                    </button>
                    <AddTodo />
                </div>
                <DisplayTodo todos={todos} updateIsCompleted={updateIsCompleted} />
            </div>
        </div>
    )
}

export default index
