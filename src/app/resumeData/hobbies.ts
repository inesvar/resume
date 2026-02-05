import { S } from "../internationalization";

export type Hobby = {
  title: string;
  icon: string;
};

export const hobbies: Hobby[] = [
  {
    title: S({ fr: "Programmer en Rust", en: "Programming in Rust" }),
    icon: "🦀",
  },
  {
    title: S({ fr: "Enigmes, problèmes", en: "Solving riddles" }),
    icon: "❓",
  },
  {
    title: S({
      fr: "Vélo, course à pied, patinage",
      en: "Cycling, jogging, ice-skating",
    }),
    icon: "🏃‍♂️",
  },
];
