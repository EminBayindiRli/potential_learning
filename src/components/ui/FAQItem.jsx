import { useState } from "react";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`premium-card transition-all duration-500 ${
        open ? "border-[var(--primary-green-light)] shadow-card-lg" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 p-6 text-left focus:outline-none"
      >
        <span
          className={`text-lg font-bold transition-colors duration-300 ${
            open ? "text-[var(--primary-green)]" : "text-[var(--neutral-black)]"
          }`}
        >
          {question}
        </span>

        <span
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-button transition-all duration-500 ${
            open
              ? "bg-[var(--primary-green)] text-white shadow-md rotate-180"
              : "bg-[var(--section-background)] text-[var(--primary-green)]"
          }`}
        >
          <i className="ri-arrow-down-s-line text-2xl" />
        </span>
      </button>

      <div
        className={`faq-answer ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="h-px w-full bg-gradient-to-r from-[var(--light-gray)] to-transparent my-4" />
          <p className="text-[15px] leading-relaxed text-[var(--text-gray)] pl-4 border-l-2 border-[var(--primary-green-light)]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
