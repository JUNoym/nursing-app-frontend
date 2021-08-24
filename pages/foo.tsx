import Link from 'next/link'
import Layout from '../components/Layout'

const HelloPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <h1>Fooページ</h1>
        <p>FOOページ</p>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
)

export default HelloPage
