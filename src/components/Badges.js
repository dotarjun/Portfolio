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
      <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
        Git
      </span>
      <span class="bg-cyan-100 text-cyan-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
        Tailwind
      </span>
      <span class="bg-rose-100 text-rose-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
        Jest
      </span>
      <span class="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
        ESLint
      </span>
      <span class="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
        Vite
      </span>
      <span class="bg-orange-100 text-orange-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
        Linux
      </span>
    </div>
  );
};

export default Badges;
