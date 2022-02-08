import { AppProps } from 'next/app'
import React, { useState } from 'react'
import Layout from "../components/Layout2"
import Index from '../components/pages/login'


// material-ui
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles'

// global css
import '../styles/global.scss'
import '../styles/mixins.scss'

export default function MyApp({ Component, pageProps }) {
    const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
    if (loggedInStatus === "ログイン中") {
        return (
            <div>
                <Component {...pageProps} />
            </div>
        )
    } else {
        return (
            <div>
                < Layout title="夜勤日誌アプリ" >
                    <CssBaseline />
                    <Index loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus} />
                </Layout >
            </div>
        )
    }
}