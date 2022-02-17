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

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
