import { useTranslation } from "react-i18next";
import { useHowToSteps } from "../../data/howToSteps";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function HowToUseSection() {
  const { t } = useTranslation();
  const howToSteps = useHowToSteps();
  const [headerRef, isHeaderVisible] = useScrollReveal();
  const [cardsRef, isCardsVisible] = useScrollReveal();

  return (
    <section id="how-to-use" className="relative py-24 lg:py-32 overflow-hidden bg-[var(--section-background)] border-b border-[var(--light-gray)]">
      <div className="mx-auto max-w-container px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className={`mx-auto max-w-3xl text-center mb-16 transition-all duration-700 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-heading-3 lg:text-heading-2 font-normal text-[var(--neutral-black)]">
            {t("howTo.title_start")}
            <span className="text-[var(--primary-green)]">{t("howTo.title_num")}</span>
          </h2>

          <p className={`mt-6 text-lg leading-relaxed text-[var(--text-gray)] mx-auto max-w-2xl transition-all duration-700 delay-200 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t("howTo.desc")}
          </p>
        </div>

        {/* Steps Grid */}
        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {howToSteps.map((step, index) => (
            <div
              key={step.id}
              className={`premium-card p-6 lg:p-8 flex flex-col items-center lg:items-start gap-4 transition-all duration-700 ${isCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="icon-glow h-12 w-12 flex-shrink-0">
                <i className={`${step.icon} text-xl`} />
              </div>

              <div className="text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-gray)]">
                  {String(step.id).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-[var(--neutral-black)] mt-1">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-gray)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToUseSection;
