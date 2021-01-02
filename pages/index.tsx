import Head from 'next/head'
import { Fragment } from 'react'
import Header from '../components/Header'
import ScrollIndicator from '../components/ScrollIndicator'
import PageSelector from '../components/PageSelector'
import Image from 'next/image'

export default function Home () {
  return (
    <Fragment>
      <Head>
        <title>Berly Dai</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main>
        {/* Intro page */}
        <div className="flex items-center bg-landing_pink h-screen">
          <div className="relative left-1/4">
            <div className="" style={{ fontSize: '10rem', fontFamily: 'Yesteryear, sans-serif' }}>Berly Dai</div>
            <div className="text-4xl">I&apos;m a creater, designer, and a life lover.</div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-8 w-8" style={{ bottom: '8%' }}>
            <ScrollIndicator />
          </div>
        </div>

        {/* Mojo */}
        <div className="flex items-center bg-mojo_bg h-screen">
          <PageSelector color="mojo_text" page={1}></PageSelector>
          <div style={{ width: '20vw' }}>
            <div className="text-mojo_text" style={{ fontSize: '10rem', fontFamily: 'Yesteryear, sans-serif' }}>Mojo</div>
            <div className="text-mojo_text">Mojito</div>
            <div className="text-mojo_text">a delightful taste from Havana</div>
          </div>
          <div style={{ width: '65vw' }}>
            <Image src="/mojo.png" alt="Mojo photo" width="8001" height="4501" layout="responsive"></Image>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </Fragment>
  )
}
