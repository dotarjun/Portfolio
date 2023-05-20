import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
import MailTo from "./MailTo";
import { motion } from "framer-motion";

const HireMe = () => {
  return (
    <div className="fixed right-5 bottom-5 flex items-center justify-center overflow-hidden">
      <motion.div
        className=" w-52 h-auto flex items-center justify-center relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CircularText className={"fill-dark  animate-spin-slow"} />
        <Link
          href={`${MailTo()}`}
          className="flex items-center justify-center 
          absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 bg-dark text-light
          shadow-md border-solid 
           w-24 h-24 rounded-full font-semibold
          hover:bg-light hover:text-dark
          hover:scale-110
          "
        >
          Hire Me
        </Link>
      </motion.div>
    </div>
  );
};

export default HireMe;
