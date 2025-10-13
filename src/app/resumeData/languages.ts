import { S } from "../internationalization";

export type Language = {
  title: string;
  icon?: string;
  level: string;
};

export const languages: Language[] = [
  {
    title: S({ fr: "Français & Slovaque", en: "French & Slovak" }),
    icon: "🇫🇷🇸🇰",
    level: S({ fr: "Natif", en: "Native" }),
  },
  {
    title: S({ fr: "Anglais", en: "English" }),
    icon: "🇬🇧",
    level: "C1",
  },
  {
    title: S({ fr: "Allemand", en: "Deutsch" }),
    icon: "🇩🇪",
    level: "B1",
  },
  {
    title: S({ fr: "Japonais", en: "Japanese" }),
    icon: "🇯🇵",
    level: "A2",
  },
];
