import { S } from "../internationalization";

export type You = {
  name: string;
  age: string;
  phoneNumber: string;
  email: string;
  location: string;
  lookingFor: string;
};

export const you: You = {
  name: "Inès Varhol",
  age: S({ fr: "24 ans", en: "24 years old" }),
  phoneNumber: "+33 6 28 50 47 80",
  email: "ines.varhol@proton.me",
  location: "Angers, France",
  lookingFor: S({
    fr: "A la recherche d'un poste de développeur logiciel Rust",
    en: "Looking for a position as a Rust software developer",
  }),
};
