import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { href: "#home", label: t("navbar.home") },
    { href: "#about", label: t("navbar.about") },
    { href: "#how-to-use", label: t("navbar.howToUse") },
    { href: "#learn", label: t("navbar.learn") },
    { href: "#faq", label: t("navbar.faq") },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[var(--light-gray)] bg-[var(--background-white)] pt-20">
      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[var(--section-background)] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-container px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <a href="#home" className="group flex w-fit items-center gap-3">
              <div className="icon-glow flex h-12 w-12 !rounded-xl text-[var(--primary-green)] transition-all duration-300 group-hover:bg-[var(--primary-green)] group-hover:text-white">
                <i className="ri-plant-line text-2xl" />
              </div>
              <div>
                <p className="text-xl font-black tracking-tight text-[var(--neutral-black)] transition-colors group-hover:text-[var(--primary-green)]">
                  POTENTIAL
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-gray)]">
                  {t("footer.subtitle")}
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--text-gray)]">
              {t("footer.desc")}
            </p>

            {/* Stats */}
            <div className="mt-8 flex gap-8">
              {[
                { value: t("footer.stat1_value"), label: t("footer.stat1_label") },
                { value: t("footer.stat2_value"), label: t("footer.stat2_label") },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-gradient">{s.value}</p>
                  <p className="mt-1 text-xs font-semibold text-[var(--text-gray)] uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[var(--neutral-black)]">
              {t("footer.nav_title")}
            </h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-base text-[var(--text-gray)] transition-colors hover:text-[var(--primary-green)]"
                  >
                    <span className="h-px w-0 bg-[var(--primary-green)] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Widget */}
          <div className="lg:col-span-4">
            <div className="premium-card p-8 text-center sm:text-left">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-green-light)]/20 text-[var(--primary-green)]">
                <i className="ri-rocket-2-line text-2xl" />
              </div>
              
              <h4 className="mb-3 text-lg font-bold text-[var(--neutral-black)]">
                {t("footer.cta_title")}
              </h4>
              
              <p className="mb-6 text-sm leading-relaxed text-[var(--text-gray)]">
                {t("footer.cta_desc")}
              </p>
              
              <a
                href="https://dev.d23ggi28ujjgg2.amplifyapp.com/"
                target="_blank"
                rel="noreferrer"
                className="btn-premium w-full justify-center"
              >
                {t("footer.cta_btn")}
                <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[var(--light-gray)] pb-8 pt-8 sm:flex-row">
          <p className="text-sm font-medium text-[var(--text-gray)]">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-3 rounded-full border border-[var(--light-gray)] bg-[var(--background-white)] px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary-green)] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--primary-green)]"></span>
            </span>
            <span className="text-xs font-bold text-[var(--neutral-black)] uppercase tracking-wide">
              {t("footer.sysOnline")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
