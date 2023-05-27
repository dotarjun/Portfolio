import React from "react";
import SkillsCard from "./SkillsCard";
import AnimatedText from "./AnimatedText";

const Skills = () => {
  const path = "/src/assets/devicons/";
  return (
    <div>
      <h2>Skills</h2>
      <AnimatedText
        text="Skills"
        className="font-bold text-5xl mt-32 w-full text-center"
      />
      <div className="w-full relative py-20 flex items-center justify-center rounded-full">
        <div className="flex flex-wrap gap-4">
          <SkillsCard
            name="html"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          />
          <SkillsCard
            name="css"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          />
          <SkillsCard
            name="javascript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <SkillsCard
            name="react"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          />
          <SkillsCard
            name="nextjs"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          />
          <SkillsCard
            name="node"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          />
          <SkillsCard
            name="mysql"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          />
          <SkillsCard
            name="tailwindcss"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          />
          <SkillsCard
            name="git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          />
          <SkillsCard
            name="linux"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
