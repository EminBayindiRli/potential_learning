import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";

function Navbar({ darkMode, toggleDarkMode, showNav }) {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "#home", label: t("navbar.home") },
    { href: "#about", label: t("navbar.about") },
    { href: "#how-to-use", label: t("navbar.howToUse") },
    { href: "#learn", label: t("navbar.learn") },
    { href: "#faq", label: t("navbar.faq") },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const currentLang = i18n.language ? i18n.language.substring(0, 2).toUpperCase() : 'EN';
  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'tr', label: 'Türkçe', short: 'TR' },
    { code: 'pl', label: 'Polski', short: 'PL' }
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[1000] transition-all duration-700 ease-out ${
        scrolled
          ? "top-0 rounded-2xl mx-4 sm:mx-6 mt-4 py-2 sm:py-3 shadow-[0_6px_16px_rgba(0,0,0,0.1)]"
          : "top-0 bg-transparent py-4 sm:py-5"
      } ${
        showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      style={{
        backgroundColor: scrolled
          ? (darkMode ? '#162119' : '#FFFFFF')
          : 'transparent',
        boxShadow: scrolled && darkMode ? 'none' : undefined,
      }}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2 sm:gap-3 z-10">
          <img src={logo} alt="Potential logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg object-contain" />
          <div>
            <p className="text-lg sm:text-xl font-bold tracking-tight text-[var(--primary-green)]">
              POTENTIAL
            </p>
            <p className="hidden text-xs text-[var(--text-gray)] sm:block">
              {t("navbar.subtitle")}
            </p>
          </div>
        </a>

        {/* Desktop Nav — Centered */}
        <nav className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[var(--neutral-black)] transition-colors duration-150 hover:text-[#6B8F47] whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 z-10">
          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex h-8 sm:h-10 w-auto min-w-[2.5rem] sm:min-w-[3rem] px-2 sm:px-3 items-center gap-1 sm:gap-1.5 rounded-full border border-[var(--light-gray)] bg-[var(--section-background)] text-[var(--neutral-black)] transition-all duration-200 hover:border-[var(--primary-green)]"
              aria-label="Change Language"
            >
              <i className="ri-global-line text-sm sm:text-[15px]" />
              <span className="text-[10px] sm:text-xs font-semibold leading-none">{currentLang}</span>
            </button>

            <div
              className={`absolute right-0 mt-2 w-36 origin-top-right overflow-hidden rounded-xl border border-[var(--light-gray)] bg-[var(--background-white)] p-1 shadow-lg transition-all duration-200 ${
                langOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-[var(--subtle-green)] hover:text-[var(--primary-green)] ${
                    currentLang === lng.short ? "text-[var(--primary-green)] bg-[var(--subtle-green)]/50" : "text-[var(--text-gray)]"
                  }`}
                >
                  {lng.label}
                  {currentLang === lng.short && <i className="ri-check-line" />}
                </button>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[var(--light-gray)] bg-[var(--section-background)] text-[var(--neutral-black)] transition-all duration-200 hover:border-[var(--primary-green)]"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <i className={`text-sm sm:text-lg transition-transform duration-300 ${darkMode ? "ri-sun-line rotate-90" : "ri-moon-line -rotate-90"}`} />
          </button>

          {/* CTA Button */}
          <a
            href="https://dev.d23ggi28ujjgg2.amplifyapp.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline hidden gap-2 sm:inline-flex !py-2 !px-5 text-[13px]"
          >
            <span className="whitespace-nowrap">{t("navbar.goToPanel_desktop")}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[var(--light-gray)] bg-[var(--section-background)] text-[var(--neutral-black)] lg:hidden"
            aria-label="Toggle menu"
          >
            <i className={`text-lg sm:text-xl transition-transform duration-300 ${mobileOpen ? "ri-close-line rotate-90" : "ri-menu-line"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full origin-top transform overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-2 flex flex-col gap-1 rounded-2xl border border-[var(--light-gray)] bg-[var(--background-white)] p-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--neutral-black)] transition-all hover:bg-[var(--subtle-green)] hover:text-[var(--primary-green)]"
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
            {t("navbar.openPanel")}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
