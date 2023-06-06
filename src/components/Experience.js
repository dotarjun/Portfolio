import React from "react";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  description,
}) => {
  return (
    <li>
      <div>
        <h3>
          {position}&nbsp;<a href={companyLink}>, {company}</a>
        </h3>
        <span>
          {time} | {address}
        </span>
        <p>{description}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-32">
      <h2 className="font-bold text-5xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className=" w-[75%] mx-auto relative">
        <ul>
          <Details  
            position="Junior Intern"
            company="BCTA"
            companyLink="http://bctaindia.org/"
            time="3 Months"
            address="Raj Niwas Marg, New Delhi"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
