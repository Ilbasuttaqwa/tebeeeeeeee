import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Beranda",
    hash: "#home",
  },
  {
    name: "Tentang",
    hash: "#about",
  },
  {
    name: "Proyek",
    hash: "#projects",
  },
  {
    name: "Keahlian",
    hash: "#skills",
  },
  {
    name: "Pengalaman",
    hash: "#experience",
  },
  {
    name: "Kontak",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Pendidikan IT",
    location: "Indonesia",
    description:
      "Menyelesaikan pendidikan di bidang teknologi informasi dan mulai mengembangkan keahlian dalam programming dan pengembangan web.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
  {
    title: "IT Specialist",
    location: "CV Tiga Putra Perkasa",
    description:
      "Bekerja sebagai IT specialist di CV Tiga Putra Perkasa, menangani sistem informasi, troubleshooting, dan pengembangan aplikasi internal perusahaan.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Remote IT Developer",
    location: "CV Tiga Putra Perkasa (Remote)",
    description:
      "Saat ini bekerja sebagai remote worker di CV Tiga Putra Perkasa, fokus pada pengembangan aplikasi web menggunakan teknologi modern seperti React, Next.js, dan Node.js.",
    icon: React.createElement(FaReact),
    date: "2022 - sekarang",
  },
] as const;

export const projectsData = [
  {
    title: "Fingerprint Authentication System",
    description:
      "Sistem autentikasi biometrik menggunakan fingerprint untuk keamanan akses yang tinggi. Dilengkapi dengan enkripsi data dan logging aktivitas pengguna.",
    tags: ["Python", "OpenCV", "Machine Learning", "SQLite", "Tkinter"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Sistem Manajemen Perusahaan",
    description:
      "Aplikasi web untuk mengelola data karyawan, inventori, dan laporan keuangan di CV Tiga Putra Perkasa. Fitur lengkap dengan dashboard admin dan sistem notifikasi.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Node.js"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Portfolio Website",
    description:
      "Website portfolio personal yang responsif dan modern dengan animasi smooth. Menampilkan proyek, pengalaman, dan skills dengan desain yang menarik.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Express",
  "PHP",
  "Laravel",
  "Python",
  "Linux",
  "Windows Server",
  "Network Administration",
  "System Troubleshooting",
  "Database Management",
  "API Development",
  "Docker",
  "Framer Motion",
] as const;
