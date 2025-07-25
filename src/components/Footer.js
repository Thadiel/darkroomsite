import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image src="/images/invert-logo.png" width={150} height={100}/>
            <p className="text-gray-300">
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Film Development</li>
              <li>Digital Scanning</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="text-gray-300 space-y-2">
              <p>Los Angeles, CA</p>
              <p>Phone: (818) 517-5362 </p>
              <p>Email: team.fotodump@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Foto Dump. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}