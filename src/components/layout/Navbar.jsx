import { useState, useEffect } from "react";

function Navbar({ darkMode, toggleDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#how-to-use", label: "How to Use" },
    { href: "#learn", label: "Learn" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-effect py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="icon-glow flex h-10 w-10">
            <i className="ri-plant-line text-xl" />
          </div>
          <div>
            <p className="text-xl font-bold tracking-tight text-gradient">
              POTENTIAL
            </p>
            <p className="hidden text-xs text-[var(--text-gray)] sm:block">
              Learning Platform
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-gray)] transition-colors hover:text-[var(--primary-green)]"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[var(--primary-green)] transition-all duration-300 hover:w-3/4 opacity-0 hover:opacity-100" />
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="icon-glow flex h-10 w-10 !rounded-lg"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <i className={`text-lg transition-transform duration-300 ${darkMode ? "ri-sun-line rotate-90" : "ri-moon-line -rotate-90"}`} />
          </button>

          {/* CTA Button */}
          <a
            href="https://dev.d23ggi28ujjgg2.amplifyapp.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-premium hidden sm:inline-flex"
          >
            <i className="ri-external-link-line text-sm" />
            Go to Panel
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="icon-glow flex h-10 w-10 !rounded-lg md:hidden"
            aria-label="Toggle menu"
          >
            <i className={`text-xl transition-transform duration-300 ${mobileOpen ? "ri-close-line rotate-90" : "ri-menu-line"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full origin-top transform overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="glass-effect mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-4 shadow-xl border border-[var(--light-gray)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--dark-gray)] transition-all hover:bg-[var(--subtle-green)] hover:text-[var(--primary-green)]"
            >
              {link.label}
            </a>
          ))}
          <div className="my-2 h-px w-full bg-[var(--light-gray)]" />
          <a
            href="https://dev.d23ggi28ujjgg2.amplifyapp.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-premium w-full justify-center"
          >
            <i className="ri-external-link-line" />
            Open Potential Panel
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
