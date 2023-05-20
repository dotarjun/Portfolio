import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
            h-[1px] inline-block w-0 bg-dark
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-semibold text-lg flex items-center justify-between fixed">
      <nav className="flex gap-x-8">
        <CustomLink title="Home" href="/" />
        <CustomLink title="About" href="/about" />
        <CustomLink title="Projects" href="/projects" />
        <CustomLink title="Articles" href="/articles" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href=" https://twitter.com/dotarjun"
          target={"_blank"}
          className=" w-9 mx-4"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/dotarjun"
          target={"_blank"}
          className=" w-9 mx-4"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/arjun-singh-a1a706189/"
          target={"_blank"}
          className=" w-9 ml-4"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.8 }}
        >
          <LinkedInIcon />
        </motion.a>
        {/* <Link href="/" target={"_blank"}><TwitterIcon /></Link> */}
        {/* <Link href="/" target={"_blank"}><TwitterIcon /></Link> */}
      </nav>
      <div className=" absolute left-[50%] top-2 translate-x-[-50%]">
        {/* <Logo /> */}
      </div>
    </header>
  );
};

export default NavBar;
