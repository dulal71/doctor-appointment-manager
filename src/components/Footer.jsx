
import Link from "next/link";
import { Stethoscope } from "lucide-react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
   <footer className="mt-24">
  <div className="p-[1.5px] shadow-2xl">
    <div className="bg-[#050816] px-8 py-12">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* Brand */}
        <div className="max-w-md">
          <div className="flex items-center gap-3">

            <div className="p-2 rounded-xl group-hover:rotate-12 bg-linear-to-r from-blue-600 to-cyan-500 transition-transform">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white tracking-wide">
                Doctor Appointment
              </h2>
              <p className="text-cyan-400 text-sm">
                Smart Healthcare Platform
              </p>
            </div>
          </div>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Manage appointments, connect with experienced doctors,
            and access healthcare services with a modern digital experience.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 text-gray-400">
           
 <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
  </a>

  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
  </a>

  <a href="https://github.com" target="_blank" rel="noreferrer">
    <FaGithub className="hover:text-white cursor-pointer transition" />
  </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link href="/" className="hover:text-cyan-400 transition-all hover:translate-x-1">
              Home
            </Link>

            <Link href="/all-appointment" className="hover:text-cyan-400 transition-all hover:translate-x-1">
              Doctors
            </Link>

            <Link href="/dashboard" className="hover:text-cyan-400 transition-all hover:translate-x-1">
              Dashboard
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">
            <p>support@doctorapp.com</p>
            <p>+880 1234-567890</p>
            <p>Available 24/7</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-gray-500">
          © 2026 Doctor Appointment. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <Link href="/privacy-policy" className="hover:text-cyan-400 transition">
            Privacy Policy
          </Link>

          <Link href="/terms" className="hover:text-cyan-400 transition">
            Terms
          </Link>
        </div>
      </div>

    </div>
  </div>
</footer>
  );
};

export default Footer;