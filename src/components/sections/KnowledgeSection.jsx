import { useTranslation } from "react-i18next";
import { useKnowledgeCards } from "../../data/knowledgeCards";

function KnowledgeSection() {
  const { t } = useTranslation();
  const knowledgeCards = useKnowledgeCards();

  return (
    <section className="relative overflow-hidden bg-[var(--background-white)] py-24 lg:py-32">
      {/* Decorative gradient orb */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--primary-green-light)] opacity-10 blur-3xl mix-blend-multiply dark:mix-blend-screen" />

      <div className="mx-auto max-w-container px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--light-gray)] bg-[var(--section-background)] px-5 py-2.5 text-sm font-bold shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-green)]/15 text-[var(--accent-green)]">
              <i className="ri-book-open-line" />
            </span>
            <span className="text-gradient">{t("knowledge.badge")}</span>
          </div>

          <h2 className="text-heading-3 lg:text-heading-2 font-black text-[var(--neutral-black)] mt-4">
            {t("knowledge.title_start")}
            <span className="text-[var(--primary-green)]"> {t("knowledge.title_highlight")} </span>
            {t("knowledge.title_end")}
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-[var(--text-gray)] mx-auto max-w-2xl">
            {t("knowledge.desc")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {knowledgeCards.map((card, idx) => (
            <div
              key={card.id}
              className="premium-card group/card relative flex flex-col p-8 transition-transform duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex-1">
                {/* Icon Header */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="icon-glow flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--section-background)] text-[var(--primary-green)] shadow-sm transition-all duration-500 group-hover/card:bg-[var(--primary-green)] group-hover/card:text-white group-hover/card:shadow-[0_10px_20px_rgba(90,125,58,0.3)]">
                    <i className={`${card.icon} text-3xl`} />
                  </div>
                  <span className="font-mono text-4xl font-black text-[var(--light-gray)] transition-colors group-hover/card:text-[var(--primary-green-light)]/20">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold tracking-tight text-[var(--neutral-black)] group-hover/card:text-[var(--primary-green)] transition-colors">
                  {card.title}
                </h3>

                <p className="text-[15px] leading-relaxed text-[var(--text-gray)]">
                  {card.description}
                </p>
              </div>

              {/* Decorative bottom line */}
              <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-[var(--primary-green)] to-[var(--accent-green)] transition-all duration-500 group-hover/card:w-full" />
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
