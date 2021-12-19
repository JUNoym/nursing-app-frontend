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
import MenuIcon from '@material-ui/icons/Menu';

interface Props { }

const Header = (props: Props) => {

    return (
        <div className={styles.content}>
            <AppBar position="fixed" classes={{ root: styles.RootBar }}>
                <Container className={styles.container}>
                    <Toolbar className={styles.tool}>
                        <h3>夜勤日誌アプリ</h3>
                        <div className={styles.link}>
                            <Button
                                variant="outlined"
                                className={styles.button}
                            >
                                <Link href="/search">
                                    <SearchIcon fontSize="large" className={styles.icon} />
                                </Link>
                            </Button>
                            <Button
                                variant="outlined"
                                className={styles.button}

                            >
                                <Link href="/archive">
                                    <CalendarTodayIcon fontSize="large" className={styles.icon} />
                                </Link>
                            </Button>
                            <Button
                                variant="outlined"
                                className={styles.button}
                            >
                                <Link href="/">
                                    <LogoutIcon fontSize="large" className={styles.icon} />
                                </Link>
                            </Button>
                            <Button
                                variant="outlined"
                                className={styles.MenuButton}
                            >
                                <Link href="/">
                                    <MenuIcon fontSize="large" className={styles.MenuIcon} />
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
