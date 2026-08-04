import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Dot NET Full Stack Development',
      issuer: 'SLA Institute',
      date: '2026',
      icon: 'fas fa-certificate',
      description: 'Comprehensive certification in full-stack development using .NET technologies',
      skills: ['C#', 'ASP.NET MVC', 'Web API', 'React.js','JavaScript','MySql'],
      gradient: 'from-blue-500 to-cyan-500',
      level: 'Advanced',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'HTML, CSS, and JavaScript for Beginners',
      issuer: 'IBM Developer Skills Network',
      date: '2026',
      icon: 'fas fa-certificate',
      description: 'Comprehensive certification covering fundamentals of web development including HTML structure, CSS styling, and JavaScript programming.',
      skills: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-violet-500 to-pink-500',
      level: 'Beginner',
      status: 'Completed'
    },
    {
      "id": 3,
      "title": "Create Hustler - Innovative Thinking Award",
      "issuer": "SLA Institute (Right Way to IT Lab)",
      "date": "2026",
      "icon": "fas fa-lightbulb",
      "description": "Awarded for innovative thinking and creative problem-solving skills during the training program, recognizing the ability to approach challenges with originality and fresh ideas.",
      "skills": ["Innovative Thinking", "Creative Problem-Solving", "Originality", "Creativity"],
      "gradient": "from-orange-500 to-red-500",
      "level": "Advanced",
      "status": "Completed"
    },
    {
      "id": 4,
      "title": "Certificate of Merit - 52nd College Day",
      "issuer": "Arul Anandar College (Autonomous)",
      "date": "2021",
      "icon": "fas fa-award",
      "description": "Merit certificate awarded for outstanding achievement during the academic year 2020-2021 on the occasion of the 52nd College Day.",
      "skills": ["Academic Excellence", "Merit Award","1st Rank Holder"],
      "gradient": "from-yellow-600 to-amber-500",
      "level": "Distinction",
      "status": "Completed"
    },
    {
      "id": 5,
      "title": "Faculty Development Programme on Python for Data Science",
      "issuer": "Arul Anandar College (Autonomous), Department of Computer Science & Applications",
      "date": "2021",
      "icon": "fas fa-chalkboard-teacher",
      "description": "One-day Faculty Development Programme on 'Python for Data Science: Polity and Information Technology' organized by the Department of Computer Science & Applications, Aruti Anandar College, Karumaathur, Madurai.",
      "skills": ["Python", "Data Science", "Information Technology", "Faculty Development"],
      "gradient": "from-purple-600 to-indigo-600",
      "level": "Intermediate",
      "status": "Completed"
    },
    {
      "id": 6,
      "title": "Diploma in Computer Application (DCA)",
      "issuer": "Trinity Software Technologies (ISO 9001-2008 Certified)",
      "date": "2017",
      "icon": "fas fa-laptop-code",
      "description": "Six-month diploma program covering essential computer applications. Secured Second Class with a score of 176/200 in the examination conducted by Trinity Software Technologies, Nithiravilai.",
      "skills": ["MS Office", "Photoshop", "Illustrator", "InDesign", "Tally", "Tamil Typing", "English Typing"],
      "gradient": "from-green-600 to-teal-500",
      "level": "Beginner",
      "status": "Completed"
    }
  ];

  const futureCertifications = [
    {
      title: 'Advanced React and Front-end Development',
      description: 'Deep dive into modern React patterns, hooks, and performance optimization',
      icon: 'fab fa-react',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cloud Computing and Azure Services',
      description: 'Microsoft Azure cloud architecture, deployment, and DevOps practices',
      icon: 'fas fa-cloud',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Advanced Database Design',
      description: 'Database architecture, optimization, and NoSQL technologies',
      icon: 'fas fa-database',
      gradient: 'from-green-500 to-emerald-500'
    },
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="certifications"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-bg via-light-surface to-light-bg dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 240, 120, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-accent-500/5 to-primary-500/5 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
              🏆 Professional Certifications
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">Certifications </span>
            <span className="text-light-text dark:text-dark-text">& Achievements</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full max-w-md mx-auto mb-8"
          />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="relative bg-white/80 dark:bg-dark-card/80 backdrop-blur-xl p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-dark-border/20 overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-center sm:items-start lg:items-center">

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-r ${cert.gradient} flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl shadow-lg`}
                >
                  <i className={cert.icon}></i>
                </motion.div>

                {/* Content */}
                <div className="flex-1 w-full text-center sm:text-left">

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 sm:gap-6 mb-4 sm:mb-6">

                    {/* Left */}
                    <div>
                      <motion.h3
                        className="text-lg sm:text-2xl lg:text-4xl font-bold text-light-text dark:text-dark-text mb-2 sm:mb-3"
                        whileHover={{ scale: 1.02 }}
                      >
                        {cert.title}
                      </motion.h3>

                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-lg mb-1 sm:mb-2">
                        {cert.issuer}
                      </p>

                      <p className="text-xs sm:text-base text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-3 sm:mb-4">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                        {cert.skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 sm:px-4 py-1 sm:py-2 bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm text-[10px] sm:text-sm text-light-text dark:text-dark-text font-semibold rounded-full border border-light-border/50 dark:border-dark-border/50"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Right (Date + Badges) */}
                    <div className="text-center lg:text-right">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="inline-block"
                      >
                        <div className={`text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent mb-2`}>
                          {cert.date}
                        </div>

                        <div className="flex flex-row lg:flex-col justify-center lg:items-end gap-2">
                          <span className={`px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${cert.gradient} text-white text-[10px] sm:text-sm font-semibold rounded-full shadow-lg`}>
                            {cert.level}
                          </span>

                          <span className="px-2 sm:px-4 py-1 sm:py-2 bg-green-500 text-white text-[10px] sm:text-sm font-semibold rounded-full shadow-lg">
                            {cert.status}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden sm:block absolute top-4 right-4 w-12 sm:w-16 h-12 sm:h-16 border-2 border-primary-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="hidden sm:block absolute bottom-4 left-4 w-10 sm:w-12 h-10 sm:h-12 border-2 border-secondary-500/20 rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
