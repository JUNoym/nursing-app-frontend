import React, { useState } from 'react'
import styles from './index.module.scss'
import Router from 'next/router';
import Link from 'next/link';

// material-ui
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';

import api from '../../../api/config'
import router from 'next/router';




const Index = () => {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {

        router.push({
            pathname: '/result',
            query: {
                type: 'name',
                q: search
            }
        })
    }

    return (
        <div className={styles.Wrapper}>
            <div className={styles.content}>
                <input
                    type="text"
                    placeholder="利用者を追加"
                    name="name"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <Button
                    variant="contained"
                    classes={{ root: styles.Button }}
                    onClick={() => {
                        handleSearch()
                    }}
                >
                    <SearchIcon />
                </Button>
            </div>
        </div>
    )
}

export default Index
