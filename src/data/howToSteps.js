import { useTranslation } from "react-i18next";

export const useHowToSteps = () => {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      title: t("howTo.step1_title"),
      description: t("howTo.step1_desc"),
      icon: "ri-plug-line",
    },
    {
      id: 2,
      title: t("howTo.step2_title"),
      description: t("howTo.step2_desc"),
      icon: "ri-plant-line",
    },
    {
      id: 3,
      title: t("howTo.step3_title"),
      description: t("howTo.step3_desc"),
      icon: "ri-notification-3-line",
    },
    {
      id: 4,
      title: t("howTo.step4_title"),
      description: t("howTo.step4_desc"),
      icon: "ri-file-pdf-2-line",
    },
  ];
};
