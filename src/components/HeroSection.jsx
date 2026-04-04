import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile_img.png';
import Resume from '../assets/DotNet_Resume.pdf';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-bg via-light-surface to-light-bg dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-secondary-500/5 to-accent-500/5 rounded-lg rotate-45"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content - Profile Image */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center lg:justify-start"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative"
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
            >
              {/* Animated Background Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl z-0"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full bg-gradient-to-r from-secondary-500/20 to-accent-500/20 blur-lg z-0"
              />

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-dark-border shadow-2xl backdrop-blur-sm bg-white/10 dark:bg-dark-card/10 z-20">
                <img
                  src={profileImage}
                  alt="Nehas TS Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Floating Tech Icons */}
            {/* Top-Right React Icon */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg z-30"
            >
              <i className="fab fa-react text-white text-2xl"></i>
            </motion.div>

            {/* Bottom-Left Code Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg z-30"
            >
              <i className="fas fa-code text-white text-xl"></i>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content - Text & Stats */}
        <motion.div
          variants={itemVariants}
          className="text-center lg:text-left px-2 sm:px-0"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-3 sm:mb-4">
            <span className="inline-block px-3 sm:px-4 py-2 text-xs sm:text-sm bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 rounded-full text-primary-600 dark:text-primary-400 font-medium border border-primary-200 dark:border-primary-800">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 leading-tight"
          >
            <span className="gradient-text">Nehas TS</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-light-text dark:text-dark-text">
              {displayText}
              <span className="animate-pulse text-primary-500">|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-light-text-secondary dark:text-dark-text-secondary mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Aspiring{" "}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">
              Dot NET Full Stack Developer
            </span>{" "}
            with expertise in modern web technologies. Passionate about creating scalable, responsive applications that deliver exceptional user experiences.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-sm mx-auto lg:mx-0"
          >
            {[{ number: "2+", label: "Years Exp" }, { number: "10+", label: "Projects" }, { number: "50+", label: "Tech" }].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-2 sm:p-3 bg-light-surface dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">{stat.number}</div>
                <div className="text-[10px] sm:text-xs text-light-text-secondary dark:text-dark-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 w-full"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto text-center px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href={Resume}
              download="DotNet_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto text-center px-5 sm:px-8 py-3 sm:py-4 border-2 border-primary-500 text-light-text dark:text-dark-text dark:border-primary-400 font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-3 sm:gap-4"
          >
            {[{ icon: "fab fa-github", url: "https://github.com/NehasTS17", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-gray-100" },
            { icon: "fab fa-linkedin", url: "https://linkedin.com/in/nehas-ts", label: "LinkedIn", color: "hover:text-blue-600" },
            { icon: "fas fa-envelope", url: "mailto:nehas170499@gmail.com", label: "Email", color: "hover:text-red-500" }].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -4, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl 
          bg-light-surface dark:bg-dark-card 
          text-light-text dark:text-dark-text 
          flex items-center justify-center 
          hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 
          hover:text-white dark:hover:text-white 
          transition-all duration-300 shadow-md hover:shadow-lg 
          border border-light-border dark:border-dark-border 
          ${social.color}`}
                title={social.label}
                aria-label={social.label}
              >
                <i className={`${social.icon} text-sm sm:text-lg`}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
