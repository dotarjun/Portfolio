import React from "react";

const Badges = ({ className }) => {
  return (
    <div
      className={`w-full mb-4 flex flex-wrap items-center justify-start gap-y-1 ${className}`}
    >
      <span class="bg-orange-100 text-orange-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">
        HTML
      </span>
      <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        CSS
      </span>
      <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
        JS
      </span>
      <span class="bg-sky-100 text-sky-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-lightblue-900 dark:text-lightblue-300">
        React
      </span>
      <span class="bg-slate-200 text-slate-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
        Next.JS
      </span>
      <span class="bg-teal-100 text-teal-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
        Tailwind
      </span>
    </div>
  );
};

export default Badges;
