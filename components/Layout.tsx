import React, { ReactNode } from 'react'
import Head from 'next/head'

// component
import Header from '../components/ui/header/service'
// ↓ログイン後のヘッダー
// import Header from '../components/ui/header/app'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div >
)

export default Layout
