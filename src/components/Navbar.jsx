import React, { useState } from 'react';

const navLinks = [
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "My Skills" },
  { href: "#projects", label: "My Projects" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Scroll to top handler
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 shadow-xl">
      <div className="navbar max-w-7xl mx-auto px-4 flex items-center justify-between py-2">
        {/* Logo/Title Left */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center text-2xl font-extrabold tracking-tight cursor-pointer"
          >
            <span className="bg-white text-blue-700 rounded-full px-3 py-1 mr-2 shadow-lg border-2 border-blue-500">SR</span>
            <span className="text-white drop-shadow">Portfolio</span>
          </a>
        </div>
        {/* Center Nav */}
        <div className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="btn btn-ghost text-white font-semibold text-lg hover:bg-blue-700 hover:text-accent transition-all duration-200 rounded-full px-5"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Right Contact Button */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="btn btn-accent btn-md font-bold shadow-lg rounded-full px-6 text-white border-0 hover:scale-105 transition-transform duration-200"
          >
            Contact Me
          </a>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button className="btn btn-ghost" onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="menu bg-base-100 rounded-box shadow-lg mt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="btn btn-ghost justify-start font-semibold text-lg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn btn-accent font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
