import { useTranslation } from "react-i18next";
import { useKnowledgeCards } from "../../data/knowledgeCards";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function KnowledgeSection() {
  const { t } = useTranslation();
  const knowledgeCards = useKnowledgeCards();
  const [headerRef, isHeaderVisible] = useScrollReveal();
  const [cardsRef, isCardsVisible] = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-[var(--background-white)] py-24 lg:py-32 border-b border-[var(--light-gray)]">
      {/* Decorative gradient orb */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--primary-green-light)] opacity-10 blur-3xl mix-blend-multiply dark:mix-blend-screen" />

      <div className="mx-auto max-w-container px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className={`mx-auto max-w-3xl text-center mb-16 transition-all duration-700 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--light-gray)] bg-[var(--section-background)] px-5 py-2.5 text-sm font-bold shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-green)]/15 text-[var(--accent-green)]">
              <i className="ri-book-open-line" />
            </span>
            <span className="text-gradient">{t("knowledge.badge")}</span>
          </div>

          <h2 className="text-heading-3 lg:text-heading-2 font-normal text-[var(--neutral-black)] mt-4">
            {t("knowledge.title_start")}
            <span className="text-[var(--primary-green)]"> {t("knowledge.title_highlight")} </span>
            {t("knowledge.title_end")}
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-[var(--text-gray)] mx-auto max-w-2xl">
            {t("knowledge.desc")}
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {knowledgeCards.map((card, idx) => (
            <div
              key={card.id}
              className={`premium-card flex flex-col items-center lg:items-start gap-4 p-6 lg:p-8 transition-all duration-700 ${isCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="icon-glow h-12 w-12 rounded-2xl flex-shrink-0">
                <i className={`${card.icon} text-xl`} />
              </div>

              <h3 className="text-lg font-semibold text-[var(--neutral-black)]">
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed text-[var(--text-gray)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Overlay */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-gray)] mb-4">
            {t("knowledge.cta")}
          </p>
          <a href="https://dev.d23ggi28ujjgg2.amplifyapp.com/" target="_blank" rel="noreferrer" className="btn-premium">
            {t("knowledge.ctaBtn")}
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default KnowledgeSection;
