import styles from './index.module.scss'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'


// material
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'

// mui
import SearchIcon from '@material-ui/icons/Search';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

interface Props { }

const notify = () => toast.success(
    'ログアウトしました', {
    icon: '👤',
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
}
)

const reload = () => {
    setTimeout(() => {
        location.reload()
    }, 2000)
}


const Header = (props: Props) => {
    const [name, setName] = useState(null)
    useEffect(() => {
        const res = localStorage.getItem("deviseAuthToken1")
        setName(res)
    }, [])

    return (
        <div className={styles.content}>
            <AppBar position="fixed" classes={{ root: styles.RootBar }}>
                <Container className={styles.container}>
                    <Toolbar className={styles.tool}>
                        <Link href="/">
                            <h3 className={styles.logo}>
                                夜勤日誌アプリ
                                <img className={styles.icon} src="/favicons/favicon-32x32.png" alt="icon" />
                            </h3>
                        </Link>
                        {name ? <h1>ようこそ{name}さん</h1> : <h1>ようこそゲストさん</h1>}
                        <div className={styles.link}>
                            <Button variant="outlined">
                                <Link href="/search">
                                    <SearchIcon fontSize="large" className={styles.icon} />
                                </Link>
                            </Button>
                            <Button variant="outlined">
                                <Link href="/archive">
                                    <CalendarTodayIcon fontSize="large" className={styles.icon} />
                                </Link>
                            </Button>
                            <Button variant="outlined" onClick={notify}>
                                <Link href="/">
                                    <LogoutIcon fontSize="large" className={styles.icon} onClick={
                                        () => {
                                            localStorage.clear()
                                            reload()
                                        }
                                    } />
                                </Link>
                            </Button>
                            <Toaster />
                            <Button variant="outlined">
                                <Link href="/signup">
                                    <AccountCircleOutlinedIcon fontSize="large" className={styles.icon}
                                    />
                                </Link>
                            </Button>
                        </div>

                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    )
}

export default Header
