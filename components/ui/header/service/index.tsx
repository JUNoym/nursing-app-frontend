import styles from './index.module.scss'
import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

// material
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { useRouter } from 'next/router'

interface Props { }

const Header = (props: Props) => {
    const router = useRouter()
    const isActive = (url: string) => {
        return router.pathname === url
    }
    return (
        <div className={styles.content}>
            <AppBar position="fixed" classes={{ root: styles.RootBar }}>
                <Container className={styles.container}>
                    <Toolbar className={styles.tool}>
                        <Link href="/">
                            <h1>夜勤日誌アプリ</h1>
                        </Link>
                        <div className={styles.signupWrapper}>
                            <div className={styles.signin}>
                                <Link href="/signIn">
                                    <div className={clsx(styles.li, isActive("/signIn") && styles.active)}>
                                        <Button color="inherit">
                                            Login
                                        </Button>
                                    </div>
                                </Link>
                            </div>

                            <Link href="/signup">
                                <div className={clsx(styles.li, isActive("/signup") && styles.active)}>
                                    <Button color="inherit">
                                        Signup
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    )
}

export default Header
