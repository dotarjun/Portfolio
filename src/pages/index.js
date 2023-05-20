import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import avatarPic from "../assets/avatar.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import Badges from "@/components/Badges";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Empowering Businesses with Code and Striking Visual Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium ">
                With a focus on exceptional web solutions, my proficiency as a
                full-stack developer shines through in my portfolio, projects
                and educational articles, highlighting my mastery in React.js
                and web development. Building and shipping exceptional front end
                solutions
              </p>
              <Badges />
              <div className="flex items-center self-start mt-2 w-1/2">
                <Link
                  href="/about"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 2border-solid border-4 border-transparent hover:border-dark"
                >
                  About Me
                </Link>
                <Link
                  href="https://blog.arjunsingh.tech"
                  target={"_blank"}
                  className=" flex justify-center items-center ml-4 text-md font-medium capitalize text-dark underline"
                >
                  My Blog
                  <div>
                    <LinkArrow className={"w-4 ml-1 "} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src={avatarPic}
                alt="Avatar"
                className="w-full h-auto ml-36"
              />
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
