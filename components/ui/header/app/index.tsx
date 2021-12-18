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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

interface Props { }

const Header = (props: Props) => {

    return (
        <div className={styles.content}>
            <AppBar position="fixed" classes={{ root: styles.RootBar }}>
                <Container className={styles.container}>
                    <Toolbar className={styles.tool}>
                        <h3>夜勤日誌アプリ</h3>
                        <div className={styles.link}>
                            <Button variant="outlined">
                                <Link href="/search">
                                    <SearchIcon color="primary" fontSize="large" />
                                </Link>
                            </Button>
                            <Button variant="outlined">
                                <Link href="/archive">
                                    <CalendarTodayIcon color="primary" fontSize="large" />
                                </Link>
                            </Button>
                            <Button variant="outlined">
                                <Link href="/">
                                    <AccountCircleIcon color="primary" fontSize="large" />
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
