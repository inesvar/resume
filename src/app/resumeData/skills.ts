import { S } from "../internationalization";

export type Skill = {
  title: string;
  yoe?: number;
  hidden?: boolean;
  tech?: string;
  date?: string;
  url?: string;
  detail?: string;
};

export type SkillList = {
  title: string;
  skills: Skill[];
  hidden?: boolean;
};

export const skills: SkillList[] = [
  {
    title: S({ fr: "Générales", en: "General" }),
    skills: [
      { title: S({ fr: "Revue de code", en: "Code review" }) },
      { title: S({ fr: "Expert Git", en: "Git expert" }) },
      {
        title: S({
          fr: "Esprit critique face à l'IA",
          en: "Critical thinking (even about IA)",
        }),
      },
    ],
  },
  {
    title: S({ fr: "Programmation", en: "Programming" }),
    skills: [
      { title: "Rust", yoe: 4, detail: "Generics, traits, async" },
      {
        title: S({ fr: "C++ (et C)", en: "C++ (and C)" }),
        yoe: 4,
        detail: S({
          fr: "Smart pointers, templates, gestion mémoire",
          en: "Smart pointers, templates, memory management",
        }),
      },
      {
        title: "Python, scripting",
        yoe: 9,
        detail: S({
          fr: "Classes, tests unitaires",
          en: "Classes, unit tests",
        }),
      },
      {
        title: "WebGL/OpenGL/DirectX",
        detail: S({
          fr: "Shaders, pipeline de rendu",
          en: "Shaders, render pipeline",
        }),
      },
    ],
  },
  {
    title: S({ fr: "Soft skills", en: "Soft skills" }),
    skills: [
      {
        title: S({
          fr: "Rigoureuse et curieuse",
          en: "Rigorous & curious",
        }),
      },
      {
        title: S({
          fr: "Communicative et travailleuse",
          en: "Communicative & hard-working",
        }),
      },
      {
        title: S({
          fr: "Team player et créative",
          en: "Team player & creative",
        }),
      },
    ],
  },
  {
    title: S({ fr: "Projets personnels", en: "Personal projects" }),
    skills: [
      {
        title: "Tetris application",
        tech: "Rust",
        date: "2023 - ",
        url: "https://github.com/inesvar/tetris",
      },
      {
        title: S({ fr: "Pavages", en: "Tiling" }),
        tech: "C++, OpenGL",
        date: "November - December 2024",
        url: "https://github.com/inesvar/Tiling",
      },
      {
        title: "Minigrep (Rust book)",
        tech: "Rust",
        date: "January 2026",
        url: "https://github.com/inesvar/minigrep",
      },
    ],
  },
];
