import React from "react";
import { AccessLinkIcon } from "./accessLinkIcon";
import { Experience, otherExperiences } from "./resumeData/experiences";
import { you } from "./resumeData/you";
import { IS } from "./strings";

export interface ExperienceContainerProps {
  experience: Experience;
}

export const ExperienceContainer = ({
  experience,
}: ExperienceContainerProps) => {
  function createMarkup(htmlString: string) {
    return {
      __html: htmlString,
    };
  }
  return (
    <div className="otherExperienceContainer" hidden={!experience.enabled}>
      <h3>
        <AccessLinkIcon url={experience.url} text={experience.title} />
      </h3>
      <h4>{experience.when}</h4>
      <ul>
        {experience.what.map((what: string) => (
          <li key={what} dangerouslySetInnerHTML={createMarkup(what)}></li>
        ))}
      </ul>
    </div>
  );
};

export const OtherExperiences = ({}) => {
  return (
    <section>
      <h2>
        <span className="icon experience-icon inverted"></span>
        {IS.otherExperience}
      </h2>
      {otherExperiences.map((experience) => (
        <ExperienceContainer key={experience.title} experience={experience} />
      ))}
    </section>
  );
};
