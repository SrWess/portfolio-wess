import Head from 'next/head'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Projects } from '../components/Projects'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wesley Anjos | Desenvolvedor Front End</title>
      </Head>

      <Header/>
      <Main/>
      <Projects/>
    </div>
  )
}
