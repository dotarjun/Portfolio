import Image from "next/image";
import React from "react";

const SkillsCard = ({ name }) => {
  const SkillName = name;
  return (
    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg ">
      <Image
        className="w-32 h-auto p-4"
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${SkillName}/${SkillName}-original-wordmark.svg`}
        alt={`${name}`}
        width={100}
        height={100}
      />
    </div>
  );
};

export default SkillsCard;
