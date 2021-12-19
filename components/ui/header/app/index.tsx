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
import { Modal } from '@material-ui/core'
import Box from '@material-ui/core/Box'


interface Props { }

const Header = (props: Props) => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => {
        setOpen(true)
        console.log('open')
    }
    const handleClose = () => {
        setOpen(false)
    }


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
                                onClick={() => {
                                    console.log('click')
                                    handleOpen()
                                }}
                            >
                                <Link href="/">
                                    <MenuIcon fontSize="large" className={styles.MenuIcon} />
                                </Link>
                            </Button>


                        </div>
                    </Toolbar>

                    <Modal
                        hideBackdrop
                        open={open}
                        onClose={handleClose}
                    >
                        <Box className={styles.Box}>
                            <Link href="/search">
                                <Button
                                    onClick={handleClose}
                                    className={styles.Button}
                                >
                                    <SearchIcon fontSize="large" className={styles.icon1} />
                                    <div className={styles.text}>
                                        検索
                                    </div>
                                </Button>
                            </Link>
                            <Link href="/archive">
                                <Button
                                    onClick={handleClose}
                                    className={styles.Button}
                                >
                                    <CalendarTodayIcon fontSize="large" className={styles.icon} />
                                    アーカイブ
                                </Button>
                            </Link>
                            <Link href="/excretion">
                                <Button
                                    onClick={handleClose}
                                    className={styles.Button}
                                >
                                    <LogoutIcon fontSize="large" className={styles.icon} />
                                    ログアウト
                                </Button>
                            </Link>
                        </Box>
                    </Modal>


                </Container>
            </AppBar>
        </div >
    )
}

export default Header
