export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Analog Lab</h3>
            <p className="text-gray-300">
              Professional film development and darkroom services with over 20 years of experience.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Film Development</li>
              <li>Darkroom Printing</li>
              <li>Digital Scanning</li>
              <li>Custom Processing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="text-gray-300 space-y-2">
              <p>123 Film Street<br />Los Angeles, CA 90028</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@analoglab.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Analog Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}