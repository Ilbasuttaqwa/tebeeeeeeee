"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Tentang");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Tentang Saya</SectionHeading>
      <p className="mb-3">
        Saya adalah seorang{" "}
        <span className="font-medium">IT Specialist</span> yang bekerja di CV Tiga Putra Perkasa sebagai{" "}
        <span className="font-medium">remote worker</span>.{" "}
        <span className="italic">Passion saya dalam teknologi</span> dimulai dari ketertarikan pada
        problem-solving dan inovasi digital. Saya <span className="underline">menikmati</span> proses
        mengembangkan solusi teknologi yang dapat membantu efisiensi bisnis. Tech stack utama saya
        adalah{" "}
        <span className="font-medium">
          React, Next.js, Node.js, PHP, dan MySQL
        </span>
        . Saya juga berpengalaman dengan sistem administrasi jaringan, troubleshooting, dan manajemen database.
        Saya selalu antusias untuk mempelajari teknologi baru dan mengikuti perkembangan industri IT.
      </p>

      <p>
        <span className="italic">Di luar pekerjaan</span>, saya senang mengeksplorasi
        teknologi terbaru, berkontribusi pada proyek open source, dan berbagi pengetahuan dengan komunitas developer.
        Saya juga menikmati{" "}
        <span className="font-medium">pembelajaran berkelanjutan</span> melalui kursus online
        dan sertifikasi IT untuk terus mengasah kemampuan profesional saya.
      </p>
    </motion.section>
  );
}
