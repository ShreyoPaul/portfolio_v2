"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/aurora-background";
import Image from "next/image";
import blob from "@/assets/blob.png"
import { TypeText } from "./TypeEffect";

export function AuroraBackgroundHero() {
  return (
    <AuroraBackground className="h-screen">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col md:gap-4 gap-8 items-center justify-center w-full"
      >
        <div className="flex md:flex-row gap-4 md:gap-0 flex-col-reverse justify-between items-center w-full lg:p-8 p-6 lg:pl-24 sm:pl-16">
          <div className="font-Wittgenstein md:text-3xl text-2xl font-bold">
            <div className="text-basic-dark text-center md:text-start lg:text-10xl md:text-8xl text-6xl">Shreyo Paul</div>
            <div className="md:pt-8 py-4 text-center md:text-start font-Inconsolata text-blue-500">
              <TypeText />
            </div>
            <a href={"/resume.pdf"} download={"resume.pdf"} className="rounded-full px-4 py-2 font-bold text-white bg-basic-purple hover:bg-dark-purple font-Inconsolata text-lg">Download Resume</a>
          </div>
          <div>
            <Image src={blob} alt="" width={500} className="w-[500px]" />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
