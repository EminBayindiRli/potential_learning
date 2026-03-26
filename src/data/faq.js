import { useTranslation } from "react-i18next";

export const useFAQ = () => {
  const { t } = useTranslation();
  
  return [
    {
      id: 1,
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      id: 2,
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      id: 3,
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      id: 4,
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      id: 5,
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
  ];
};
