import { useTranslation } from "react-i18next";
import { useFAQ } from "../../data/faq";
import FAQItem from "../ui/FAQItem";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function FAQSection() {
  const { t } = useTranslation();
  const faq = useFAQ();
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="faq" className="relative overflow-hidden bg-[var(--section-background)] py-24 lg:py-32 border-b border-[var(--light-gray)]">
      <div ref={sectionRef} className="mx-auto max-w-container px-6 lg:px-8 relative z-10">
        <div className={`grid gap-16 lg:grid-cols-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header Side */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary-green-light)]/30 bg-[var(--primary-green)]/10 px-5 py-2.5 text-sm font-bold text-[var(--primary-green)] shadow-sm">
                <i className="ri-questionnaire-line text-lg" />
                {t("faq.badge")}
              </div>

              <h2 className="text-heading-3 lg:text-heading-2 font-normal text-[var(--neutral-black)] lg:max-w-xs">
                {t("faq.title_start")}
                <br/>
                {t("faq.title_end")}
                <span className="text-gradient hover:opacity-90">{t("faq.title_highlight")}</span>
                {t("faq.title_end_tr")}
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[var(--text-gray)] lg:max-w-sm">
                {t("faq.desc")}
              </p>

            </div>
          </div>

          {/* Accordion Side */}
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-4">
              {faq.map((item, idx) => (
                <div
                  key={item.id}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <FAQItem
                    question={item.question}
                    answer={item.answer}
                  />
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
