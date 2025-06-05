export default function Services() {
  const services = [
    {
      name: "Affordable Pricing",
      description: "$15 - Developing & Scanning \n $8 Only Developing"
    },
    {
      name: "Film Development",
      description: "35mm & 120mm \n C-41 color film processing \n Medium Res Scan \n Sent via Email "
    },
    {
      name: "Pick Up & Drop Off",
      description: "LA AREA ONLY \n Contact us for more info"
    }
  ]

  const formatDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line.trim()}
        {index < description.split('\n').length - 1 && <br />}
      </span>
    ))
  }

  return (
    <main className="pt-30 pb-16 flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Film Development and Scanning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast Turnaround and Quality Scans
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 w-80 flex flex-col items-center text-center">
                <div className="text-4xl mb-4 justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{formatDescription(service.description)}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}