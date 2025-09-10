"use client";

import { motion } from "framer-motion";

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "accent" | "white";
}

export default function LoadingAnimation({ 
  size = "md", 
  color = "primary" 
}: LoadingAnimationProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  };

  const colorClasses = {
    primary: "border-primary-500",
    accent: "border-accent-500",
    white: "border-white"
  };

  return (
    <div className="flex items-center justify-center">
      {/* Spinning Ring */}
      <motion.div
        className={`${sizeClasses[size]} border-4 ${colorClasses[color]} border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Pulsing Dots */}
      <div className="absolute flex space-x-1">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 ${color === 'primary' ? 'bg-primary-500' : color === 'accent' ? 'bg-accent-500' : 'bg-white'} rounded-full`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Komponen Loading Screen Fullscreen
export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-dark-100 dark:to-dark-200 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <LoadingAnimation size="lg" color="primary" />
        </motion.div>
        
        <motion.h2
          className="mt-6 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Loading...
        </motion.h2>
        
        <motion.p
          className="mt-2 text-gray-600 dark:text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Memuat portfolio yang menakjubkan
        </motion.p>
      </div>
    </motion.div>
  );
}

// Komponen Button Loading
export function ButtonLoading({ children, isLoading, ...props }: any) {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={`${props.className} relative overflow-hidden`}
    >
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-gradient-primary opacity-75 flex items-center justify-center"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <LoadingAnimation size="sm" color="white" />
        </motion.div>
      )}
      <span className={isLoading ? "opacity-50" : ""}>
        {children}
      </span>
    </button>
  );
}