"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsWhatsapp } from "react-icons/bs";
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
          {/* Fire animations around profile */}
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-20 z-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Image
              src="/fire-animation.svg"
              alt="fire animation"
              width={64}
              height={80}
              className="animate-pulse"
            />
          </motion.div>
          
          <motion.div
            className="absolute -top-6 -right-6 w-12 h-16 z-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Image
              src="/fire-animation.svg"
              alt="fire animation"
              width={48}
              height={64}
              className="animate-bounce"
            />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-4 -left-4 w-10 h-14 z-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <Image
              src="/fire-animation.svg"
              alt="fire animation"
              width={40}
              height={56}
              className="animate-pulse"
            />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 -right-8 w-14 h-18 z-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <Image
              src="/fire-animation.svg"
              alt="fire animation"
              width={56}
              height={72}
              className="animate-bounce"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="animate-float relative z-10"
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
            text="IT Specialist & Full-Stack Developer" 
            className="bg-gradient-to-r from-accent-500 to-primary-500 bg-clip-text text-transparent"
            intensity="medium"
          />
        </span>
        <br />
        <span className="mt-2 block text-gray-700 dark:text-gray-300">
          Berpengalaman di{" "}
          <span className="font-semibold text-primary-600 dark:text-primary-400">CV Tiga Putra Perkasa</span>
          {" "}sebagai IT Specialist dengan keahlian dalam{" "}
          <RotatingText 
            texts={["React & Next.js", "sistem manajemen", "pengembangan web", "remote working", "troubleshooting IT"]}
            className="font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
            interval={2500}
          />
        </span>
        <br />
        <span className="mt-3 block text-sm text-gray-600 dark:text-gray-400">
          💼 Spesialisasi: Pengembangan aplikasi web modern, sistem IT, dan solusi teknologi inovatif
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
          href="https://www.linkedin.com/in/much-ilbasuttaqwa-65418830a/"
          target="_blank"
          title="LinkedIn Profile"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-green-500 p-4 text-white hover:bg-green-600 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all duration-300 cursor-pointer border-2 border-green-400 hover:border-green-500 shadow-lg hover:shadow-xl hover:shadow-green-500/20"
          href="https://wa.me/6283846249279"
          target="_blank"
          title="WhatsApp: 083846249279"
        >
          <BsWhatsapp />
        </a>

        <a
          className="bg-white p-4 text-accent-600 hover:text-accent-800 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all duration-300 cursor-pointer border-2 border-accent-200 hover:border-accent-400 dark:bg-dark-100 dark:text-accent-400 dark:border-dark-300 shadow-lg hover:shadow-xl hover:shadow-accent-500/20"
          href="https://github.com/Ilbasuttaqwa"
          target="_blank"
          title="GitHub Profile"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
