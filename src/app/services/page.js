import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Services() {
  const services = [
    {
      name: "Film Development",
      description: "Professional C-41, E-6, and B&W film processing",
      price: "Starting at $8",
      turnaround: "24-48 hours"
    },
    {
      name: "Prints & Enlargements",
      description: "High-quality darkroom prints from 4x6 to 16x20",
      price: "Starting at $2",
      turnaround: "3-5 days"
    },
    {
      name: "Digital Scanning",
      description: "High-resolution scanning up to 6400 DPI",
      price: "Starting at $15",
      turnaround: "3-7 days"
    },
    {
      name: "Push/Pull Processing",
      description: "Custom exposure compensation for your creative vision",
      price: "Additional $5",
      turnaround: "48-72 hours"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Services - Analog Lab</title>
        <meta name="description" content="Complete film development and darkroom services including C-41, E-6, B&W processing, printing, and scanning." />
      </Head>

      <Header />
      
      <main className="pt-20 pb-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional film processing and darkroom services with decades of experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border">
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">{service.price}</p>
                  <p className="text-sm text-gray-500">Turnaround: {service.turnaround}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}