import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <div>
      <Head>
        <title>Arjun | About Page</title>
        <meta name="description" content="My website's about page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout>
          <AnimatedText text="Passion fuels purpose" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About me
              </h2>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default about;
