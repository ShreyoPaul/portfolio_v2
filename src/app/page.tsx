"use client";

import { AuroraBackgroundHero } from "@/components/UI/Aurora_backgroundComponent";
import { FloatingNav } from "@/components/floating-navbar";
import Link from "next/link";
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTelegram, IconHome, IconMessage, IconPencil, IconUser, IconUserCode } from "@tabler/icons-react";
import { Skillcard } from "@/components/UI/SkillCard";
import Projects from "@/components/UI/Projects";
import { Globe } from "@/components/UI/Globe";
import Experience from "@/components/UI/Experience";
import { FloatingDock } from "@/components/floating-dock";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Experience",
    link: "#skills",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <IconPencil className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Porjects",
    link: "#projects",
    icon: (
      <IconUserCode className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

const items = [
  {
    title: "GitHub",
    href: "https://github.com/ShreyoPaul",
    icon: <IconBrandGithub />
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/shreyo-paul/",
    icon: <IconBrandLinkedin />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/sreo_07/",
    icon: (
      <IconBrandInstagram />
    ),
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/shreyo.paul/",
    icon: (
      <IconBrandFacebook />
    ),
  },
  {
    title: "Telegram",
    href: "https://t.me/SHrEyO0",
    icon: (
      <IconBrandTelegram />
    ),
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-basic-white text-black">
      <FloatingNav navItems={navItems} />

      <AuroraBackgroundHero />
      {/* BODY */}
      <div className="font-Rubik w-full text-basic md:text-xl md:px-20 md:py-12 sm:px-12 py-0 px-6 flex flex-col gap-y-16">
        <div>
          <div className="md:text-center text-justify">
            I am from West Bengal, India. I am pursuing BTech in Information Technology in MAKAUT,WB. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites. Working on my skills. Love to solve real life problem with coding mind.<br />
            <p className="font-semibold pt-6 text-center">Welcome to My Portfolio, Feel free for a tour.</p>
          </div>
          {/* <div className="flex flex-row gap-4 md:gap-6 mt-8 items-center justify-center ">
            <Link href={"https://github.com/ShreyoPaul"} className="md:p-3 p-2 bg-basic-purple hover:bg-dark-purple text-white md:text-3xl duration-300 text-2xl rounded-full"><IconBrandGithub /></Link>
            <Link href={"https://www.linkedin.com/in/shreyo-paul/"} className="md:p-3 p-2 bg-basic-purple hover:bg-dark-purple text-white md:text-3xl duration-300 text-2xl rounded-full"><IconBrandLinkedin /></Link>
            <Link href={"https://www.instagram.com/sreo_07/"} className="md:p-3 p-2 bg-basic-purple hover:bg-dark-purple text-white md:text-3xl duration-300 text-2xl rounded-full"><IconBrandInstagram /></Link>
            <Link href={"https://www.facebook.com/shreyo.paul/"} className="md:p-3 p-2 bg-basic-purple hover:bg-dark-purple text-white md:text-3xl duration-300 text-2xl rounded-full"><IconBrandFacebook /></Link>
            <Link href={"https://t.me/SHrEyO0"} className="md:p-3 p-2 bg-basic-purple hover:bg-dark-purple text-white md:text-3xl duration-300 text-2xl rounded-full"><IconBrandTelegram /></Link>
          </div> */}
        </div>

        <FloatingDock desktopClassName="Menu" mobileClassName="Menu" items={items} />

        <div id="skills">
          <div className="font-Wittgenstein text-4xl font-bold">Experience</div>
          <Experience />
        </div>

        <div id="skills">
          <div className="font-Wittgenstein text-4xl font-bold">Skills</div>
          <Skillcard />
        </div>

        <div id="projects">
          <div className="font-Wittgenstein text-4xl font-bold">Projects</div>
          <Projects />
        </div>

        <Globe />

      </div>
      {/* <TypedAbout /> */}


    </main>
  );
}
