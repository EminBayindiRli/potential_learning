import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function AboutSection() {
  const { t } = useTranslation();
  const [sectionRef, isVisible] = useScrollReveal();

  const features = [
    {
      icon: "ri-radar-line",
      title: t("about.feat1_title"),
      desc: t("about.feat1_title_desc"),
    },
    {
      icon: "ri-flight-takeoff-line",
      title: t("about.feat2_title"),
      desc: t("about.feat2_title_desc"),
    },
    {
      icon: "ri-line-chart-line",
      title: t("about.feat3_title"),
      desc: t("about.feat3_title_desc"),
    },
    {
      icon: "ri-seedling-line",
      title: t("about.feat4_title"),
      desc: t("about.feat4_title_desc"),
    },
  ];

  return (
    <section id="about" className="relative border-b border-[var(--light-gray)] bg-[var(--background-white)] py-20 lg:py-28 overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-container px-6 lg:px-8">
        <div className={`grid gap-16 lg:grid-cols-2 lg:items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left: Text */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--light-gray)] bg-[var(--section-background)] px-4 py-2 text-sm font-semibold text-[var(--primary-green)] shadow-sm">
              <i className="ri-information-fill text-lg animate-pulse-slow" />
              {t("about.badge")}
            </div>

            <h2 className="text-heading-3 lg:text-heading-2 font-normal text-[var(--neutral-black)] mt-4">
              {t("about.title_start")}
              <span className="text-gradient hover:opacity-90">{t("about.title_highlight")}</span>
              {t("about.title_end")}
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[var(--text-gray)]">
              {t("about.desc1").split(t("about.desc1_bold1")).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="font-semibold text-[var(--neutral-black)]">{t("about.desc1_bold1")}</span>}
                </span>
              ))}
            </p>

            <p className="mt-4 text-lg leading-relaxed text-[var(--text-gray)]">
              {t("about.desc2")}
            </p>

            <a
              href="#how-to-use"
              className="group mt-10 inline-flex items-center gap-3 text-base font-bold text-[var(--primary-green)] transition-all duration-300 hover:gap-5"
            >
              {t("about.cta")}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-green-light)]/20 text-[var(--primary-green)] transition-transform group-hover:bg-[var(--primary-green)] group-hover:text-white">
                <i className="ri-arrow-right-line" />
              </span>
            </a>
          </div>

          {/* Right: Feature Cards Grid */}
          <div className="relative">
            {/* Background decorative square */}
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-[var(--section-background)] opacity-50 blur-xl" />

            <div className="grid gap-6 sm:grid-cols-2 relative z-10 p-4">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="premium-card group p-8 pb-10"
                  style={{ transform: `translateY(${i % 2 !== 0 ? '2rem' : '0'})` }}
                >
                  <div className="icon-glow mb-6 h-12 w-12 rounded-2xl">
                    <i className={`${f.icon} text-xl`} />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--neutral-black)] mb-3">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-gray)]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
