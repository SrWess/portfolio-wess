import Head from 'next/head'
import { Aboutme } from '../components/Aboutme'
import { Cursor } from '../components/Cursor'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Projects } from '../components/Projects'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wesley Anjos | Desenvolvedor Front End</title>
        <link rel="icon" href="favicon.svg"/>
      </Head>

      <Cursor/>
      <Header/>
      <Main/>
      <Projects/>
      <Aboutme/>
      <Footer/>
    </div>
  )
}
