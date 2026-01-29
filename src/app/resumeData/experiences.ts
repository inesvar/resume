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
    title: S({ fr: "Ingénieur développement logiciel à Telelogos", en: "Software developer at Telelogos" }),
    url: S({ fr: "https://www.telelogos.com/", en: "https://www.telelogos.com/en/" }),
    when: S({
      fr: "Décembre 2024 -  à Angers, France",
      en: "December 2024 -  in Angers, France",
    }),
    what: [
      S({
        fr: "Développement de nouvelles features en C++ multiplateforme",
        en: "Developing new features in cross-platform C++ (Android and Windows)",
      }),
      S({
        fr: "Développement d'un nouveau moteur de rendu pour l'affichage dynamique (DirectX 12)",
        en: "Developing a new render engine for digital signage (DirectX 12)",
      }),
      S({
        fr: "Participation à la mise en place de bonnes pratiques de code",
        en: "Contributing to code modernization and enforcing good practices",
      }),
      S({
        fr: "Résolution de problèmes internes et clients efficace)",
        en: "Solving company and client bugs and issues efficiently",
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
        fr: "Développement d'un prototype 'local dimming' pour améliorer le contraste sur un écran médical",
        en: "Developing a local dimming prototype to improve contrast on a radiology display",
      }),
      S({
        fr: "Développement d'un algorithme FFT (Fast Fourier Transform) sur le GPU (WebGL)",
        en: "Developing a FFT algorithm on the GPU (WebGL)",
      }),
      S({
        fr: "Démonstrations à la R&D des résultats obtenus",
        en: "Show casing the prototype to the whole R&D team",
      }),
      S({
        fr: "Réalisation de mesures et de tests de précision de la solution réalisée",
        en: "Measuring and testing accuracy of the developed solution",
      }),
    ],
    enabled: true,
  },
  {
    title: S({
      fr: "Contribution à embedded-graphics (Rust no-std)",
      en: "Contributing to the embedded-graphics crate (Rust no-std)",
    }),
    url: "https://github.com/embedded-graphics/embedded-graphics",
    when: S({
      fr: "Janvier 2025 - Aout 2025",
      en: "January 2025 - August 2025",
    }),
    what: [
      S({
        fr: "Développement d'un variant de l'algorithme de Bresenham pour dessiner des lignes pointillées",
        en: "Developing an Bresenham algorithm variant to draw dotted lines",
      }),
    ],
    enabled: true,
  },
  {
    title: S({
      fr: "Equipe gagnante du hackathon Exolegend 2024 (C++)",
      en: "Part of the winning team of Exolegend 2024 (C++)",
    }),
    url: "https://www.exolegend.com/editions-precedentes/",
    when: S({
      fr: "Février 2024",
      en: "February 2024",
    }),
    what: [
      S({
        fr: "Développement d'un algorithme de guidage d'un robot dans un labyrinthe",
        en: "Developing an algorithm to direct a robot in a maze",
      }),
    ],
    enabled: true,
  },
  {
    title: S({
      fr: "Contribution à QEMU (émulateur C)",
      en: "Contributing to QEMU (emulator in C)",
    }),
    url: "https://www.qemu.org/",
    when: S({
      fr: "Novembre 2024 - Aout 2024",
      en: "November 2024 - August 2024",
    }),
    what: [
      S({
        fr: "Développement d'un émulateur d'un microcontroleur basé sur STM32L4",
        en: "Developing an emulator for a microcontroller based on the STM32L4 chip",
      }),
      S({
        fr: "Découverte de l'émulation, des mailings lists, rebasages git...",
        en: "Learning about emulation, mailing lists, git rebase...",
      }),
    ],
    enabled: true,
  },
];
