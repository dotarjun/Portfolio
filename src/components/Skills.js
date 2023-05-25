import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-6xl mt-32 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full">
        <div className="flex flex-wrap gap-4">
          <SkillsCard name="react" />
          <SkillsCard name="nextjs" />
          <SkillsCard name="mysql" />
          <SkillsCard name="tailwindcss" />
          <SkillsCard name="jest" />
          <SkillsCard name="mysql" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
