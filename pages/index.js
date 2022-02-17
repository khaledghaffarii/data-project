import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import { useSession } from 'next-auth/react'
export default function Home({}) {
  const { data: session } = useSession()
  return (
    <div>
      <Head>
        <title>Data Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session ? <Login /> : <Header />}
    </div>
  )
}
