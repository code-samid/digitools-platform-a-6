import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-300">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-10">

        {/* Logo + Description */}
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-semibold mb-4">
            DigiTools
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>


        {/* Product column */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Product
          </h3>

          <ul className="space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>


        {/* Company column */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>


        {/* Resources + Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Resources
          </h3>

          <ul className="space-y-2 mb-6">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>


          {/* Social icons */}
          <div className="flex gap-4">

            <div className="bg-white text-black rounded-full p-2">
              <FaInstagram size={16} />
            </div>

            <div className="bg-white text-black rounded-full p-2">
              <FaFacebookF size={16} />
            </div>

            <div className="bg-white text-black rounded-full p-2">
              <FaXTwitter size={16} />
            </div>

          </div>
        </div>

      </div>


      {/* Bottom bar */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>

        </div>

      </div>

    </footer>
  );
};