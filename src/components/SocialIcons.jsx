import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: true,    // hanya animasi sekali
    });
  }, []);

  return (
    <>
      {/* Desktop: Fixed left */}
      <div
        className="hidden md:fixed md:left-8 md:bottom-0 md:flex md:flex-col md:items-center md:space-y-4 text-gray-400"
        data-aos="fade-up" // animasi icon muncul dari bawah
      >
        <a
          href="https://github.com/ratihsty"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://instagram.com/ratihstyy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://linkedin.com/in/ratihsetioningsih"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin size={24} />
        </a>
        

        {/* Vertical Line */}
        <div className="w-px h-24 bg-gray-400 mt-4"></div>
      </div>

      {/* Mobile: Above footer */}
      <div
        className="flex justify-center gap-6 mb-6 md:hidden text-gray-400"
        data-aos="fade-up" // animasi juga untuk versi mobile
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin size={24} />
        </a>
       
      </div>
    </>
  );
}
