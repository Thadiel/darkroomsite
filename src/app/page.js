import Head from 'next/head'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Pricing from '../components/Pricing'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url('/images/upside_down_tree.png')"}}>
      <Head>
        <title>Foto Dump - Professional Film Development & Darkroom Services</title>
        <meta name="description" content="Professional film development, printing, and darkroom services. Expert handling of 35mm, medium format, and large format photography." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Pricing/>
      <Carousel/>

      <div id="contact">
        <Form />
      </div>
      <Footer />
    </div>
  )
}