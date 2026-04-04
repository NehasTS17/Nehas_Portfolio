import React from 'react';
import { motion } from 'framer-motion';
import Resume from '../assets/DotNet_Resume.pdf';

const AboutMe = () => {
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

  const highlights = [
    { number: '4+', label: 'Years Learning', icon: 'fas fa-brain', color: 'from-blue-500 to-cyan-500' },
    { number: '10+', label: 'Projects Built', icon: 'fas fa-code', color: 'from-purple-500 to-pink-500' },
    { number: '5+', label: 'Happy Clients', icon: 'fas fa-users', color: 'from-green-500 to-emerald-500' },
  ];

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5
      }
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-bg via-light-surface to-light-bg dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-r from-accent-500/5 to-primary-500/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 rounded-full mb-6 border border-primary-200 dark:border-primary-800"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-wide">
              👋 About Me
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">Passionate </span>
            <span className="text-light-text dark:text-dark-text">Developer</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full max-w-md mx-auto mb-8"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left side - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 px-2 sm:px-0">

            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-light-text dark:text-dark-text leading-relaxed"
              >
                I'm a passionate{" "}
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
                  Full Stack Developer
                </span>{" "}
                with a strong foundation in both frontend and backend technologies.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed"
              >
                My journey in tech started with a curiosity to understand how things work, and it has evolved into a career dedicated to crafting beautiful, functional, and scalable web applications.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed"
              >
                I believe in{" "}
                <span className="text-secondary-600 dark:text-secondary-400 font-semibold">
                  continuous learning
                </span>{" "}
                and staying updated with the latest technologies.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-2 sm:gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  }}
                  className="relative group"
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-xl blur-lg transition-opacity duration-300`}
                  />

                  {/* Card */}
                  <div className="relative bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm p-3 sm:p-5 rounded-xl border border-white/20 dark:border-dark-border/20 shadow-md hover:shadow-lg transition-all duration-300 text-center h-full">

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-sm sm:text-lg mb-2 sm:mb-3`}
                    >
                      <i className={item.icon}></i>
                    </motion.div>

                    {/* Number */}
                    <div
                      className={`text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}
                    >
                      {item.number}
                    </div>

                    {/* Label */}
                    <div className="text-[10px] sm:text-xs text-light-text-secondary dark:text-dark-text-secondary font-medium leading-tight">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right side - Info Cards */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 px-2 sm:px-0">

            {/* Key Information Card */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative group">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />

              {/* Card */}
              <div className="relative bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-white/20 dark:border-dark-border/20">

                {/* Header */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white mr-3 sm:mr-4 shadow-lg"
                  >
                    <i className="fas fa-info-circle text-sm sm:text-base"></i>
                  </motion.div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">
                    Key Information
                  </h3>
                </div>

                {/* Info List */}
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Chennai, India', color: 'text-red-500' },
                    { icon: 'fas fa-phone', label: 'Phone', value: '+91 8136842364', color: 'text-green-500' },
                    { icon: 'fas fa-envelope', label: 'Email', value: 'nehas170499@gmail.com', color: 'text-blue-500' },
                    { icon: 'fas fa-briefcase', label: 'Availability', value: 'Open to opportunities', color: 'text-purple-500' },
                  ].map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl hover:bg-light-surface/50 dark:hover:bg-dark-surface/50 transition-colors"
                    >
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-primary-500/10 to-secondary-500/10 ${info.color}`}
                      >
                        <i className={`${info.icon} text-sm sm:text-base`}></i>
                      </motion.div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        {/* Label */}
                        <p className="font-semibold text-light-text dark:text-dark-text 
                text-xs sm:text-sm leading-tight truncate">
                          {info.label}
                        </p>

                        {/* Value */}
                        <p className="text-light-text-secondary dark:text-dark-text-secondary 
                text-sm sm:text-base break-words leading-snug">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <motion.a
                href={Resume}
                download="DotNet_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                  <i className="fas fa-download mr-2 sm:mr-3"></i>
                  Download Resume
                  <motion.i
                    className="fas fa-arrow-right ml-2 sm:ml-3"
                    whileHover={{ x: 5 }}
                  />
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
              </motion.a>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.blockquote
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 text-6xl text-primary-500/20">"</div>
            <p className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary italic max-w-4xl mx-auto leading-relaxed">
              "Code is poetry written in logic, and every great application tells a story of innovation and user experience."
            </p>
            <div className="absolute -bottom-4 -right-4 text-6xl text-primary-500/20">"</div>
          </motion.blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
