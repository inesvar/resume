import { S } from "../internationalization";

export type You = {
  name: string;
  phoneNumber: string;
  email: string;
  onlinePortfolio: string;
  location: string;
  lookingFor: string;
};

export const you: You = {
  name: "Inès Varhol",
  phoneNumber: "+33 6 28 50 47 80",
  email: "ines.varhol@proton.me",
  onlinePortfolio: "https://github.com/inesvar",
  location: "Angers, France",
  lookingFor: S({
    fr: "A la recherche d'un poste de développeur logiciel Rust",
    en: "Looking for a position as a Rust software developer",
  }),
};
