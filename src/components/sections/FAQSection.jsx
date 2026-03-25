import faq from "../../data/faq";
import FAQItem from "../ui/FAQItem";

function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[var(--section-background)] py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Header Side */}
          <div className="lg:col-span-4 animate-fade-in-up">
            <div className="sticky top-32">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary-green-light)]/30 bg-[var(--primary-green)]/10 px-5 py-2.5 text-sm font-bold text-[var(--primary-green)] shadow-sm">
                <i className="ri-questionnaire-line text-lg" />
                FAQ
              </div>

              <h2 className="text-heading-3 lg:text-heading-2 font-black text-[var(--neutral-black)] lg:max-w-xs">
                Any questions? <br/>
                We got <span className="text-gradient">answers.</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[var(--text-gray)] lg:max-w-sm">
                If you can't find what you're looking for, feel free to reach out to our support team directly from the Potential panel.
              </p>

              <div className="mt-10 hidden lg:block">
                <a href="https://dev.d23ggi28ujjgg2.amplifyapp.com/" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center">
                  <i className="ri-external-link-line" />
                  Go to Panel
                </a>
              </div>
            </div>
          </div>

          {/* Accordion Side */}
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-4">
              {faq.map((item, idx) => (
                <div 
                  key={item.id} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <FAQItem
                    question={item.question}
                    answer={item.answer}
                  />
                </div>
              ))}
            </div>
            
            {/* Mobile Panel CTA */}
            <div className="mt-10 block lg:hidden">
              <a href="https://dev.d23ggi28ujjgg2.amplifyapp.com/" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center">
                <i className="ri-external-link-line" />
                Go to Panel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
