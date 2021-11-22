import React from 'react'
import Layout from "../components/Layout"
import Index from '../components/pages/vital/index'
import TodoList from '../components/pages/Todo/index'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';


const Todo = () => {
    return (
        < Layout title="Todo" >
            <CssBaseline />
            <TodoList />
        </Layout >
    )
}

export default Todo