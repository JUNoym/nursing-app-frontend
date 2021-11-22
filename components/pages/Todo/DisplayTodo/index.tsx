import React from 'react'
import styles from './index.module.scss'


const index = (props) => {
    const { todos, updateIsCompleted } = props
    return (
        <div className={styles.container}>
            {
                todos.map((value, key) => {
                    return (
                        <div className={styles.Todo}>
                            <div className={styles.Todo__name}>
                                {value.name}
                                {value.is_completed ?
                                    <input type="checkbox" checked="checked" onClick={() => updateIsCompleted(key, value)} />
                                    :
                                    <input type="checkbox" onClick={() => updateIsCompleted(key, value)} />
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default index
