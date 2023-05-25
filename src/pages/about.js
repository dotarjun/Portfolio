import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ProfilePic from "../assets/peep-removebg.png";
import Skills from "@/components/Skills";
import Link from "next/link";
import { devicon } from "devicon";

const about = () => {
  return (
    <div>
      <Head>
        <title>Arjun | About Page</title>
        <meta name="description" content="About page" />
        <Link rel="stylesheet" href="devicon.min.css" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout>
          <AnimatedText
            text="Transforming User Experiences"
            className="mb-4 !text-6xl pt-4"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start mt-16">
              <h2 className="mb-4 text-xl font-bold uppercase text-dark/75">
                About me
              </h2>
              <p className="font-medium mb-4">
                Hello, I&apos;m Arjun, a results-driven web developer and UI/UX
                designer who is passionate about crafting beautiful, functional,
                and user-centered digital experiences. I believe that great
                design not only solves problems and creates enjoyable
                experiences but also optimizes performance and enhances search
                engine visibility.
              </p>

              <p className="font-medium my-4">
                When working on websites, mobile apps, or any other digital
                products, I prioritize design excellence, user-centric thinking,
                and technical expertise. I understand the importance of creating
                designs that not only look impressive but also load quickly,
                perform efficiently, and provide a seamless user experience.
              </p>

              <p className="font-medium my-4">
                Moreover, I stay up to date with the latest trends and best
                practices in search engine optimization (SEO). By implementing
                SEO principles during the design and development process, I
                ensure that your digital assets are well-optimized for search
                engines, resulting in improved visibility and higher organic
                traffic.
              </p>
            </div>

            <div className="col-span-3  col-start-6 relative h-max rounded-2xl  ">
              <Image
                src={ProfilePic}
                alt="Arjun"
                className="w-full h-auto rounded-2xl "
              />
            </div>
          </div>

          <Skills />
        </Layout>
      </main>
    </div>
  );
};

export default about;
