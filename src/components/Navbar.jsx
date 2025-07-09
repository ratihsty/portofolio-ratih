import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // auto close saat klik link di mobile
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a192f] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Ratih</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium list-none">
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#Portofolio" className="hover:text-cyan-400 transition">
              Portfolio
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 bg-[#0a192f] text-sm font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
              onClick={handleLinkClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:text-cyan-400 transition"
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
              onClick={handleLinkClick}
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
