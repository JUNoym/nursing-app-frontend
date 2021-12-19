import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'


// material-ui
import Button from '@material-ui/core/Button'


// コンポーネント

interface Props {
}

export const HeadlineLink = (props: Props) => {
    return (
        <div className={styles.content}>
            <div className={styles.link}>
                <Button classes={{ root: styles.button }}>
                    <Link href="/excretion">
                        <a>排泄記録表</a>
                    </Link>
                </Button>
                <Button classes={{ root: styles.button }}>
                    <Link href="/vital">
                        <a>バイタルチェック</a>
                    </Link>
                </Button>
                <Button classes={{ root: styles.button }}>
                    <Link href="/">
                        <a>夜間日誌</a>
                    </Link>
                </Button>
                {/* <Button classes={{ root: styles.button }}>
                    <Link href="/todo">
                        <a className={styles.todo}>Todoリスト</a>
                    </Link>
                </Button> */}
            </div>
        </div>
    )
}

