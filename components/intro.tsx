"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { TypewriterText, GlitchText, WaveText, RotatingText } from "@/components/animated-text";

export default function Intro() {
  const { ref } = useSectionInView("Beranda", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="animate-float"
          >
            <Image
              src="/WhatsApp Image 2025-09-10 at 15.53.38_d9a87916.jpg"
              alt="ps.code"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-4 border-primary-400 shadow-2xl animate-glow hover:scale-110 transition-transform duration-300"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="font-bold">
          <TypewriterText 
            text="Halo, Saya Much.Ilbasuttaqwa." 
            className="bg-gradient-primary bg-clip-text text-transparent"
            delay={500}
          />
        </span>
        <br />
        <span className="font-bold mt-2 block">
          Saya seorang{" "}
          <GlitchText 
            text="IT Specialist" 
            className="bg-gradient-to-r from-accent-500 to-primary-500 bg-clip-text text-transparent"
            intensity="medium"
          />
        </span>
        <br />
        <span className="mt-2 block">
          Saya fokus pada{" "}
          <RotatingText 
            texts={["pengembangan web", "sistem IT", "React & Next.js", "remote working"]}
            className="font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
            interval={2500}
          />
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gradient-primary text-white px-8 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/25"
          onClick={() => {
            setActiveSection("Kontak");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>

        <a
          className="group bg-white px-8 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 cursor-pointer border-2 border-primary-200 hover:border-primary-400 dark:bg-dark-100 dark:border-dark-300 shadow-lg hover:shadow-xl"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-transform duration-300 text-primary-600" />
        </a>

        <a
          className="bg-white p-4 text-primary-600 hover:text-primary-800 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all duration-300 cursor-pointer border-2 border-primary-200 hover:border-primary-400 dark:bg-dark-100 dark:text-primary-400 dark:border-dark-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/20"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-accent-600 hover:text-accent-800 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all duration-300 cursor-pointer border-2 border-accent-200 hover:border-accent-400 dark:bg-dark-100 dark:text-accent-400 dark:border-dark-300 shadow-lg hover:shadow-xl hover:shadow-accent-500/20"
          href="https://github.com/ilbasuttaqwa"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
