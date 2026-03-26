import { useTranslation } from "react-i18next";

export const useVideos = () => {
  const { t } = useTranslation();
  
  return [
    {
      id: 1,
      title: t("video.vid1_title"),
      description: t("video.vid1_desc"),
      category: t("video.vid1_cat"),
      duration: t("video.vid1_dur"),
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Değiştirilecek örnek url
      youtubeUrl: "https://youtube.com", // Değiştirilecek
    },
    {
      id: 2,
      title: t("video.vid2_title"),
      description: t("video.vid2_desc"),
      category: t("video.vid2_cat"),
      duration: t("video.vid2_dur"),
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Değiştirilecek örnek url
      youtubeUrl: "https://youtube.com", // Değiştirilecek
    },
  ];
};
