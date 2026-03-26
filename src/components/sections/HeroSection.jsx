import { useTranslation } from "react-i18next";
import heroImage from "../../assets/potential-hero.jpeg";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, var(--background-white) 0%, var(--section-background) 50%, var(--subtle-green) 100%)"
      }}
    >
      {/* Animated Floating Meshes */}
      <div className="bg-mesh-1 -left-[10%] -top-[10%] h-[500px] w-[500px] animate-float" />
      <div className="bg-mesh-2 -right-[5%] top-[20%] h-[600px] w-[600px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto grid max-w-container items-center gap-16 px-6 py-12 lg:grid-cols-2 lg:px-8">
        {/* Left: Text Content */}
        <div className="flex max-w-2xl flex-col items-start pt-10 animate-fade-in-up">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-badge border border-[var(--primary-green-light)] bg-white/50 px-5 py-2.5 text-sm font-bold text-[var(--primary-green)] shadow-sm backdrop-blur-md dark:bg-black/20">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary-green)] opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--primary-green)]"></span>
            </span>
            {t("hero.badge")}
          </div>

          {/* Headline */}
          <h1 className="text-heading-2 font-black text-[var(--neutral-black)] lg:text-heading-1">
            {t("hero.title_start")} <br className="hidden lg:block" />
            <span className="text-gradient relative inline-block">
              {t("hero.title_highlight")}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.20337 5.56475C34.3435 2.15579 104.975 -1.53039 198.056 6.6436" stroke="var(--primary-green-light)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--text-gray)]">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="#learn" className="btn-premium">
              <i className="ri-play-circle-fill text-xl" />
              {t("hero.btnStart")}
            </a>
            <a href="https://dev.d23ggi28ujjgg2.amplifyapp.com/" target="_blank" rel="noreferrer" className="btn-outline">
              <i className="ri-external-link-line" />
              {t("hero.btnPanel")}
            </a>
          </div>

          {/* Feature Pills */}
          <div className="mt-14 flex w-full flex-wrap gap-4 border-t border-[var(--light-gray)] pt-8">
            {[
              { icon: "ri-satellite-line", text: t("hero.featSatellite") },
              { icon: "ri-drone-line", text: t("hero.featDrone") },
              { icon: "ri-line-chart-line", text: t("hero.featData") },
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold text-[var(--text-gray)]">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--subtle-green)] text-[var(--primary-green)]">
                  <i className={feat.icon} />
                </div>
                {feat.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero Image Container */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Main Visual */}
          <div className="premium-card relative z-10 p-2 lg:p-4 rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Potential agriculture technology"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ maxHeight: "600px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating verification badge */}
            <div className="absolute -left-6 bottom-12 z-20 animate-float rounded-2xl border border-white/20 bg-white/90 p-4 shadow-card-lg backdrop-blur-md dark:border-white/10 dark:bg-black/80">
              <div className="flex items-center gap-4">
                <div className="icon-glow h-12 w-12 !rounded-xl">
                  <i className="ri-shield-check-fill text-2xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--neutral-black)]">{t("hero.badgeVerifiedTitle")}</p>
                  <p className="text-xs font-medium text-[var(--text-gray)]">{t("hero.badgeVerifiedSub")}</p>
                </div>
              </div>
            </div>

            {/* Floating stats badge */}
            <div className="absolute -right-6 top-12 z-20 animate-float rounded-2xl border border-white/20 bg-white/90 p-4 shadow-card-lg backdrop-blur-md dark:border-white/10 dark:bg-black/80" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-[var(--text-gray)]">{t("hero.badgeAccuracyTitle")}</p>
                  <p className="text-xl font-bold text-[var(--primary-green)]">99.8%</p>
                </div>
                <i className="ri-bar-chart-grouped-line text-3xl text-[var(--accent-green)] opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
