import { S } from "../internationalization";

export type Formation = {
  title: string;
  url?: string;
  when: string;
  what?: string;
};

export const formations: Formation[] = [
  {
    title: S({
      fr: "Diplôme d'Ingénieur à Télécom Paris",
      en: "Master of Science (MSc) at Telecom Paris",
    }),
    url: S({
      fr: "https://www.telecom-paris.fr/",
      en: "https://www.telecom-paris.fr/en/home",
    }),
    when: S({
      fr: "Septembre 2021 à Juillet 2024 à Paris",
      en: "September 2021 to July 2024 in Paris",
    }),
    what: S({
      fr: "Formation généraliste en sciences et informatique, spécialisation en <b>développement embarqué</b> et en <b>logiciels distribués</b>",
      en: "General computer science, specialized in <b>embedded software</b> and <b>distributed software</b>",
    }),
  },
  {
    title: S({
      fr: "CPGE (Classe Préparatoire MPSI/MP*) au lycée Chaptal",
      en: "Scientific preparatory class",
    }),
    when: S({
      fr: "Septembre 2019 à Juin 2021 à Paris",
      en: "September 2019 to June 2021 in Paris",
    }),
  },
];
