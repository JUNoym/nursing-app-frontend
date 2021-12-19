import { AppProps } from 'next/app'

// material-ui
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles'

// global css
import '../styles/global.scss'
import '../styles/mixins.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}