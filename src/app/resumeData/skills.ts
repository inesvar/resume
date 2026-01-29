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
      { title: "Rust", yoe: 4 },
      { title: "C++ (and C)", yoe: 4 },
      { title: "Python, scripting", yoe: 9 },
      { title: "WebGL/OpenGL/DirectX" },
      { title: "Java & Android" },
    ],
  },
  {
    title: S({ fr: "Projets personnels", en: "Personal projects" }),
    skills: [
      { title: "Tetris application", tech: "Rust" },
      { title: "Tiling renderer", tech: "C++, OpenGL" },
      { title: "DoubleFloat", tech: "Rust" },
    ],
  },
];
