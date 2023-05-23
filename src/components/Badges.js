import React from "react";

// TODO: Add animation with stagger children inspired from AnimatedText.js

const Badges = ({ className }) => {
  return (
    <div
      className={`w-full mb-4 py-2 flex flex-wrap items-center justify-start gap-y-1 ${className}`}
    >
      <span className="bg-orange-100 text-orange-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
        HTML
      </span>
      <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
        CSS
      </span>
      <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
        JS
      </span>
      <span className="bg-sky-100 text-sky-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
        React
      </span>
      <span className="bg-slate-200 text-slate-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
        Next.JS
      </span>
      <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
        Git
      </span>
      <span className="bg-cyan-100 text-cyan-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
        Tailwind
      </span>
      <span className="bg-rose-100 text-rose-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
        Jest
      </span>
      <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
        ESLint
      </span>
      <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
        Vite
      </span>
      <span className="bg-orange-100 text-orange-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
        Linux
      </span>
    </div>
  );
};

export default Badges;
