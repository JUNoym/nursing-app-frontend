import Link from 'next/link'
import Layout from '../components/Layout'
import Shit from '../components/shit'

export const disPlatShit = () => {
    return (
        <Shit />
    )
}

const HelloPage = () => (

    <Layout title="About | Next.js + TypeScript Example">
        <h1>Hello World</h1>
        <p>ハローページ</p>
        <p>
            <Link href="/foo">
                <a>Fooページへ</a>
            </Link>{' '}

            <button onClick={disPlatShit}>うんこコンポーネント表示</button>
        </p>
    </Layout>
)

export default HelloPage
