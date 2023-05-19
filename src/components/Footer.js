import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-dark border-solid font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Built with <span className="text-dark text-2xl px-1">❤</span> by&nbsp;
          <Link href="https://github.com/dotarjun" className="text-primary ">
            dotarjun
          </Link>
        </div>
        <Link href="/">Contact</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
