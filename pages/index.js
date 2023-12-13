import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import How from '@/components/how'
import GetStarted from '@/components/get-started'
import Packages from '@/components/packages'
import Contact from '@/components/contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cross Novia - 1:1 Coaching</title>
        <meta name='description' content='Mental Health and Well-being coach' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${inter.className} mx-4 pb-16 lg:mx-16 relative`}>
        <Navbar />
        <Hero />
        <About />
        <How />
        <GetStarted />
        <Packages />
        <Contact />
      </main>
    </>
  )
}
