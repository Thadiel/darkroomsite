export default function Services() {
  const services = [
    {
      title: "Film Development",
      description: "Professional C-41, E-6, and B&W processing with expert care",
      icon: "🎞️"
    },
    {
      title: "Darkroom Printing",
      description: "Traditional silver gelatin prints with exceptional quality",
      icon: "🖼️"
    },
    {
      title: "Digital Scanning",
      description: "High-resolution scans that preserve every detail",
      icon: "📷"
    },
    {
      title: "Custom Services",
      description: "Push/pull processing, cross-processing, and special requests",
      icon: "⚙️"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive film processing and darkroom services for every photographer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-200
                         flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}