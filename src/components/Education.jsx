import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Arul Anandar College',
      duration: '2022',
      score: '87%',
      icon: 'fas fa-graduation-cap',
      details: 'Advanced studies in computer science with focus on software development and database management.',
      gradient: 'from-blue-500 to-cyan-500',
      type: 'Postgraduate'
    },
    {
      id: 2,
      degree: 'Bachelor of Science - Computer Science (BSc)',
      institution: "St. Jude's College",
      duration: '2020',
      score: '76%',
      icon: 'fas fa-book',
      details: 'Foundation in computer science covering programming, data structures, and algorithms.',
      gradient: 'from-purple-500 to-pink-500',
      type: 'Undergraduate'
    },
    {
      id: 3,
      degree: '12th Standard - Computer Science',
      institution: "ABC Matriculation Higher Secondary School",
      duration: '2017',
      score: '76%',
      icon: 'fas fa-book',
      details: 'Higher secondary education with focus on computer science fundamentals.',
      gradient: 'from-orange-500 to-yellow-500',
      type: 'Higher Secondary'
    },
    {
      id: 4,
      degree: '10th Standard (SSLC)',
      institution: "SR Matriculation School",
      duration: '2015',
      score: '72%', 
      icon: 'fas fa-school',
      details: 'Secondary school education with focus on general subjects and foundational knowledge.',
      gradient: 'from-green-500 to-emerald-500',
      type: 'Secondary'
    }
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-bg via-light-surface to-light-bg dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-accent-500/5 to-primary-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 rounded-full mb-6 border border-primary-200 dark:border-primary-800"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-wide">
              🎓 Academic Journey
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">Education </span>
            <span className="text-light-text dark:text-dark-text">& Learning</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full max-w-md mx-auto mb-8"
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          {/* <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 rounded-full transform -translate-x-1/2" /> */}

          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              variants={itemVariants}
              className="relative mb-12 lg:mb-16"
            >
              

              {/* Content Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                className="relative mx-auto w-full max-w-4xl bg-white/80 dark:bg-dark-card/80 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-dark-border/20"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${education.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start lg:items-center gap-4 sm:gap-6">

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`flex-shrink-0 mx-auto sm:mx-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r ${education.gradient} flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl shadow-lg`}
                  >
                    <i className={education.icon}></i>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">

                    {/* Top Section */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">

                      {/* Left */}
                      <div>
                        <motion.h3
                          className="text-lg sm:text-xl lg:text-3xl font-bold text-light-text dark:text-dark-text mb-1 sm:mb-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          {education.degree}
                        </motion.h3>

                        <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base mb-1">
                          {education.institution}
                        </p>

                        <span
                          className={`inline-block px-2 sm:px-3 py-1 bg-gradient-to-r ${education.gradient} text-white text-[10px] sm:text-xs font-semibold rounded-full`}
                        >
                          {education.type}
                        </span>
                      </div>

                      {/* Right */}
                      <div className="text-center sm:text-right">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm rounded-lg sm:rounded-xl mb-1 sm:mb-2 border border-light-border/50 dark:border-dark-border/50"
                        >
                          <p
                            className={`text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r ${education.gradient} bg-clip-text text-transparent`}
                          >
                            {education.score}
                          </p>
                        </motion.div>

                        <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary font-semibold">
                          {education.duration}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary leading-relaxed"
                      whileHover={{ scale: 1.01 }}
                    >
                      {education.details}
                    </motion.p>
                  </div>
                </div>

                {/* Bottom Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-b-2xl sm:rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-12 lg:mt-16 px-2 sm:px-0"
        >
          <div className="bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl p-4 sm:p-6 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-white/20 dark:border-dark-border/20">

            {/* Heading */}
            <div className="text-center mb-6 sm:mb-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 text-center"
              >
                <span className="gradient-text">Academic </span>
                <span className="text-light-text dark:text-dark-text">Foundation</span>
              </motion.h3>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[2px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full max-w-[120px] sm:max-w-xs mx-auto"
              />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 lg:gap-6">
              {[
                'Strong theoretical foundation in computer science and software engineering',
                'Hands-on experience with programming languages and frameworks',
                'Understanding of database design and management principles',
                'Project-based learning approach for practical experience',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-light-surface/30 dark:bg-dark-surface/30 rounded-xl hover:bg-light-surface/50 dark:hover:bg-dark-surface/50 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-check text-[10px] sm:text-sm"></i>
                  </div>

                  {/* Text */}
                  <span className="text-xs sm:text-sm text-light-text dark:text-dark-text-secondary leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
