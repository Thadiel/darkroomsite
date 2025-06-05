export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Film Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Expert darkroom services for photographers who demand quality. From vintage film to modern emulsions, we handle your memories with care.
          </p>
          {/*
          <div className="space-x-4">
            <a href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200">
              View Services
            </a>
            <a href="/contact" className="border-2 border-white hover:bg-white hover:!text-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200">
              Get Quote
            </a>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}