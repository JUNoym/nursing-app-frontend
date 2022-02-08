import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from './index.module.scss'


// component
import Header from '../components/ui/header/service'
// ↓ログイン後のヘッダー
// import Header from '../components/ui/header/app'
import MainComponents from '../components/ui/main/app'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = (props: Props) => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {props.children}
    {/* <footer className={styles.footer}>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer> */}
  </div >
)

export default Layout
