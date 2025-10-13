import { S } from "../internationalization";

export type Skill = {
  title: string;
  yoe?: number;
  hidden?: boolean;
  tech?: string;
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
          fr: "Communication et autonomie",
          en: "Communication / Autonomy",
        }),
      },
      {
        title: S({
          fr: "Travail d'équipe et créativité",
          en: "Team work / creativity",
        }),
      },
    ],
  },
  {
    title: S({ fr: "Générales", en: "General" }),
    skills: [
      { title: "Git, GDB, WinDbg" },
      { title: S({ fr: "Tests unitaires", en: "Unit testing" }) },
      { title: S({ fr: "Revue de code", en: "Code review" }) },
      { title: S({ fr: "Algorithmie", en: "Algorithms" }) },
    ],
  },
  {
    title: S({ fr: "Programmation", en: "Programming" }),
    skills: [
      { title: "Rust", yoe: 4 },
      { title: "C, C++", yoe: 4 },
      { title: "Python, scripting", yoe: 9 },
      { title: "Java, Android", yoe: 2 },
      { title: "WebGL/OpenGL", yoe: 2 },
    ],
  },
  {
    title: S({ fr: "Contributions open-source", en: "Open-source contributions" }),
    skills: [
      { title: "QEMU", tech: "C" },
      { title: "embedded-graphics", tech: "Rust" },
    ],
  },
  {
    title: S({ fr: "Projets personnels", en: "Personal projects" }),
    skills: [
      { title: "DoubleFloat", tech: "Rust" },
      { title: "Tetris", tech: "Rust" },
      { title: "Tiling", tech: "C++, OpenGL" },
    ],
  },
];
