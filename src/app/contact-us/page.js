import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className=' min-h-screen flex flex-col'>
      <Head>
        <title>Foto Dump - Professional Film Development & Darkroom Services</title>
        <meta name="description" content="Professional film development, printing, and darkroom services. Expert handling of 35mm, medium format, and large format photography." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <p className="p-20 m-20 text-center flex-grow"> Contact Us!</p>
      <Footer />
    </div>
  )
}