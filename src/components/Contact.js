export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Develop Your Film?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get in touch to discuss your project or visit our lab for professional film development services.
        </p>
        <div className="space-x-4">
          <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200">
            Contact Us
          </a>
          <a href="tel:(555)123-4567" className="border-2 border-white hover:bg-white hover:!text-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200">
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}