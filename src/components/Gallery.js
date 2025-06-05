export default function Gallery() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality You Can See
          </h2>
          <p className="text-xl text-gray-600">
            Examples of our professional development and printing work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-200">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Sample Image {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}