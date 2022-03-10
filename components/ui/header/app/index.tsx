import styles from './index.module.scss'
import React from 'react'
import Link from 'next/link'


// material
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'

// mui
import SearchIcon from '@material-ui/icons/Search';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';

interface Props { }

const Header = (props: Props) => {

    return (
        <div className={styles.content}>
            <AppBar position="fixed" classes={{ root: styles.RootBar }}>
                <Container className={styles.container}>
                    <Toolbar className={styles.tool}>
                        <Link href="/">
                            <h3 className={styles.logo}>夜勤日誌アプリ</h3>
                        </Link>
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
                            <Button variant="outlined">
                                <Link href="/">
                                    <LogoutIcon fontSize="large" className={styles.icon} onClick={
                                        () => {
                                            localStorage.clear()
                                            window.location.reload()
                                        }
                                    } />
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
