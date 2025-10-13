import { S } from "../internationalization";

export type Hobby = {
  title: string;
  icon: string;
};

export const hobbies: Hobby[] = [
  {
    title: S({ fr: "Course à pied, vélo", en: "Jogging, cycling" }),
    icon: "🏃‍♂️",
  },
  {
    title: S({ fr: "Cuisine", en: "Cooking" }),
    icon: "🍳",
  },
];
