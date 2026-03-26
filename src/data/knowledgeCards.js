import { useTranslation } from "react-i18next";

export const useKnowledgeCards = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: t("knowledge.card1_title"),
      description: t("knowledge.card1_desc"),
      icon: "ri-leaf-line",
    },
    {
      id: 2,
      title: t("knowledge.card2_title"),
      description: t("knowledge.card2_desc"),
      icon: "ri-drop-line",
    },
    {
      id: 3,
      title: t("knowledge.card3_title"),
      description: t("knowledge.card3_desc"),
      icon: "ri-flight-takeoff-line",
    },
  ];
};
