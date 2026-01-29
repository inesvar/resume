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
    title: S({ fr: "Soft skills", en: "Soft skills" }),
    skills: [
      {
        title: S({
          fr: "Communicative et autonome",
          en: "Communicative & Autonomous",
        }),
      },
      {
        title: S({
          fr: "Travail d'équipe et créative",
          en: "Team player & creative",
        }),
      },
    ],
  },
  {
    title: S({ fr: "Générales", en: "General" }),
    skills: [
      { title: S({ fr: "Revue de code", en: "Code review" }) },
      { title: S({ fr: "Expert Git", en: "Git expert" }) },
      { title: S({ fr: "Explications techniques", en: "Technical explanations" }) },
      { title: S({ fr: "Tests unitaires", en: "Unit testing" }) },
      { title: S({ fr: "Algorithmie", en: "Algorithms" }) },
    ],
  },
  {
    title: S({ fr: "Programmation", en: "Programming" }),
    skills: [
      { title: "Rust", yoe: 4, detail: "Generics, traits, async" },
      { title: S({ fr: "C++ (et C)", en: "C++ (and C)" }) , yoe: 4, detail: "Smart pointers, templates" },
      { title: "Python, scripting", yoe: 9, detail: "Classes, tests unitaires" },
      { title: "WebGL/OpenGL/DirectX", detail: "Shaders, pipeline de rendu" },
      { title: "Java & Android" },
      { title: S({ fr: "Débugueurs : GDB, WinDbg", en: "Debuggers: GDB, WinDbg" }) },
    ],
  },
  {
    title: S({ fr: "Projets personnels", en: "Personal projects" }),
    skills: [
      { title: "Tetris application", tech: "Rust", date: "2023 - ", url: "https://github.com/inesvar/tetris" },
      { title: "Création de pavages", tech: "C++, OpenGL", date: "November - December 2024", url: "https://github.com/inesvar/Tiling" },
      { title: "Minigrep (Rust book)", tech: "Rust", date: "January 2026", url: "https://github.com/inesvar/minigrep" },
    ],
  },
];
