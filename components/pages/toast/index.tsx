import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import styles from './index.module.scss'


const notify = () => toast('Here is your toast.')

const Index = () => {
    return (
        <div className={styles.button}>
            <button onClick={notify}>Make me a toast</button>
            <Toaster />
        </div >
    )
}

export default Index