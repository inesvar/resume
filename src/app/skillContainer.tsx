import { YoE } from "./internationalization";
import { SkillList, Skill, skills } from "./resumeData/skills";
import { IS } from "./strings";

export interface SkillContainerProps {
  skillList: SkillList;
}

export const SkillContainer = ({ skillList }: SkillContainerProps) => {
  return (
    <div hidden={skillList.hidden}>
      <h3>{skillList.title}</h3>
      {skillList.skills.map((skill: Skill) => (
        <div key={skill.title} hidden={skill.hidden}>
          {skill.url ? <a href={skill.url}>{skill.title}</a> : skill.title}
          &nbsp;{skill.tech ? `(${skill.tech})` : ""} {skill.yoe ? `(${YoE(skill.yoe)})` : ""}
          {skill.detail ? <><br/>{skill.detail}</> : ""}
          {skill.date ? <><br/><h4>{skill.date}</h4></> : "" }
        </div>
      ))}
    </div>
  );
};

export const Skills = ({}) => {
  return (
    <section>
      <h2>
        <span className="icon skill-icon inverted"></span>
        {IS.skills}
      </h2>
      {skills.map((skillList) => (
        <SkillContainer key={skillList.title} skillList={skillList} />
      ))}
    </section>
  );
};
