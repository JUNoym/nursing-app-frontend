import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'

// material-ui
import Button from '@material-ui/core/Button'


export const HeadlineLink = () => {
    const router = useRouter()
    const isActive = (url: string) => {
        return router.pathname === url
    }
    return (
        <div className={styles.content}>
            <div className={styles.link}>
                <Button>
                    <div className={clsx(styles.li, isActive('/excretion') && styles.active)}>
                        <Link href="/excretion">
                            <a>排泄記録表</a>
                        </Link>
                    </div>
                </Button>
                <Button>
                    <div className={clsx(styles.li, isActive('/vital') && styles.active)}>
                        <Link href="/vital">
                            <a>バイタル記録表</a>
                        </Link>
                    </div>
                </Button>
                <Button>
                    <div className={clsx(styles.li, isActive('/') && styles.active)}>
                        <Link href="/">
                            <a>夜勤日誌</a>
                        </Link>
                    </div>
                </Button>
                <Button>
                    <div className={clsx(styles.li, isActive('/attendance') && styles.active)}>
                        <Link href="/attendance">
                            <a>出勤表</a>
                        </Link>
                    </div>
                </Button>
                <Button>
                    <div className={clsx(styles.li, isActive('/chat') && styles.active)}>
                        <Link href="/chat">
                            <a>掲示板(実装中)</a>
                        </Link>
                    </div>
                </Button>
            </div>
        </div>
    )
}

