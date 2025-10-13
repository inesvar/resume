import { S } from "../internationalization";

export type Experience = {
  title: string;
  url: string;
  when: string;
  what: string[];
  enabled: boolean;
};

export const experiences: Experience[] = [
  {
    title: S({ fr: "Ingénieur développement logiciel à Telelogos", en: "Staff software developer at Telelogos" }),
    url: S({ fr: "https://www.telelogos.com/", en: "https://www.telelogos.com/en/" }),
    when: S({
      fr: "Décembre 2024 -  à Angers, France",
      en: "December 2024 -  in Angers, France",
    }),
    what: [
      S({
        fr: "Maintenance d'un logiciel C++ multiplateforme d'affichage dynamique",
        en: "Maintaining cross-platform legacy C++ code for digital signage",
      }),
      S({
        fr: "Développement de nouvelles features sur Android et Windows",
        en: "Developing new features for Android and Windows",
      }),
      S({
        fr: "Résolution de problèmes clients efficace (logs, debug)",
        en: "Solving client bugs and issues efficiently (logs, debug)",
      }),
      S({
        fr: "Participation à la refonte et à la mise en place de bonnes pratiques de code",
        en: "Contributing to code modernization and enforcing good practices",
      }),
    ],
    enabled: true,
  },
  {
    title: S({
      fr: "Stage en R&D à Barco",
      en: "Internship in R&D at Barco",
    }),
    url: S({ fr: "https://www.barco.com/fr", en: "https://www.barco.com/en" }),
    when: S({
      fr: "Avril 2024 - Septembre 2024 à Courtrai, Belgique",
      en: "April 2024 - September 2024 in Kortrijk, Belgium",
    }),
    what: [
      S({
        fr: "Développement d'un algorithme FFT (Fast Fourier Transform) sur le GPU (WebGL)",
        en: "Developing a FFT algorithm on the GPU (WebGL)",
      }),
      S({
        fr: "Développement d'une pipeline de rendu pour améliorer le contraste sur un écran médical",
        en: "Developing a render pipeline to improve contrast on a radiology display",
      }),
      S({
        fr: "Réalisation de mesures et de tests de précision de la solution réalisée",
        en: "Measuring and testing accuracy of the developed solution",
      }),
    ],
    enabled: true,
  },
];
