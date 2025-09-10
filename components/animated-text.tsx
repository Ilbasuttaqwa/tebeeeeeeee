"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export function TypewriterText({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = "" 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  );
}

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function GlitchText({ 
  text, 
  className = "", 
  intensity = "medium" 
}: GlitchTextProps) {
  const controls = useAnimation();

  const intensitySettings = {
    low: { duration: 0.1, frequency: 3000 },
    medium: { duration: 0.2, frequency: 2000 },
    high: { duration: 0.3, frequency: 1000 }
  };

  const settings = intensitySettings[intensity];

  useEffect(() => {
    const glitchAnimation = async () => {
      while (true) {
        await new Promise(resolve => setTimeout(resolve, settings.frequency));
        
        await controls.start({
          x: [0, -2, 2, -1, 1, 0],
          y: [0, 1, -1, 0],
          skew: [0, 2, -2, 0],
          transition: { duration: settings.duration }
        });
      }
    };

    glitchAnimation();
  }, [controls, settings]);

  return (
    <motion.span
      animate={controls}
      className={`${className} relative inline-block`}
      style={{
        textShadow: "2px 0 #ff0000, -2px 0 #00ffff"
      }}
    >
      {text}
      
      {/* Glitch overlay effects */}
      <motion.span
        className="absolute inset-0 text-red-500 opacity-70"
        animate={{
          x: [0, 1, -1, 0],
          opacity: [0, 0.7, 0]
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 2
        }}
      >
        {text}
      </motion.span>
      
      <motion.span
        className="absolute inset-0 text-cyan-500 opacity-70"
        animate={{
          x: [0, -1, 1, 0],
          opacity: [0, 0.7, 0]
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 2.5
        }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
}

interface WaveTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function WaveText({ text, className = "", delay = 0 }: WaveTextProps) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{
            y: [0, -10, 0],
            color: ["#0ea5e9", "#d946ef", "#0ea5e9"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: delay + index * 0.1,
            ease: "easeInOut"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

interface FadeInTextProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function FadeInText({ 
  text, 
  className = "", 
  delay = 0, 
  direction = "up" 
}: FadeInTextProps) {
  const directionVariants = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  return (
    <motion.span
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction] 
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut" 
      }}
    >
      {text}
    </motion.span>
  );
}

// Komponen untuk animasi teks yang berubah
interface RotatingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function RotatingText({ 
  texts, 
  className = "", 
  interval = 3000 
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <motion.span
      key={currentIndex}
      className={className}
      initial={{ opacity: 0, y: 20, rotateX: 90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -20, rotateX: -90 }}
      transition={{ duration: 0.5 }}
    >
      {texts[currentIndex]}
    </motion.span>
  );
}