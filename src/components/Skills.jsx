import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: 'fas fa-code',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'C#', level: 85 },
        { name: 'ASP.NET MVC', level: 80 },
        { name: 'Web API', level: 80 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      category: 'Tools & Other',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'Swagger', level: 95 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-[var(--surface)] dark:bg-[var(--surface-dark)] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold section-title leading-tight">
            My Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-light-bg to-light-surface 
                 dark:from-dark-card dark:to-dark-surface
                 p-5 sm:p-6 lg:p-8 rounded-xl shadow-md sm:shadow-lg 
                 hover:shadow-xl transition-all duration-300 
                 border border-light-border dark:border-dark-border"
            >
              {/* Category Header */}
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                        bg-gradient-to-r from-primary-500 to-secondary-500 
                        flex items-center justify-center 
                        text-white text-base sm:text-xl mr-3 sm:mr-4">
                  <i className={category.icon}></i>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold 
                       text-light-text dark:text-dark-text">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4 sm:space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    {/* Skill Header */}
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className="font-semibold text-sm sm:text-base 
                               text-light-text dark:text-dark-text truncate">
                        {skill.name}
                      </span>

                      <span className="text-primary-600 dark:text-primary-400 
                               font-bold text-xs sm:text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 sm:h-3 
                            bg-light-border dark:bg-dark-border 
                            rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          ease: "easeOut",
                          delay: skillIndex * 0.1,
                        }}
                        className="h-full bg-gradient-to-r 
                           from-primary-500 to-secondary-500 
                           rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-light-text dark:text-dark-text">
            Additional Skills
          </h3>
          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: [0, -100 * 8], // Move left by the width of all items
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex gap-6"
            >
              {/* Duplicate the array for seamless loop */}
              {[
                { name: 'React Router', icon: 'fas fa-route' },
                { name: 'VS Code', icon: 'fas fa-wave-square' },
                { name: 'RESTful APIs', icon: 'fas fa-network-wired' },
                { name: 'Database Design', icon: 'fas fa-database' },
                { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
                { name: 'Version Control', icon: 'fas fa-code-branch' },
                { name: 'Chatgpt', icon: 'fas fa-users-cog' },
                { name: 'Copilot', icon: 'fas fa-users-cog' },
                { name: 'Canva', icon: 'fas fa-brain' },
                { name: 'Problem Solving', icon: 'fas fa-brain' },
                { name: 'Visual Studio', icon: 'fas fa-wave-square' },
                { name: 'Bootstrap', icon: 'fas fa-route' },
                { name: 'Restful APIs', icon: 'fas fa-network-wired' },
                { name: 'MS Office', icon: 'fas fa-route' },
                // Duplicate for seamless loop
                { name: 'React Router', icon: 'fas fa-route' },
                { name: 'VS Code', icon: 'fas fa-wave-square' },
                { name: 'RESTful APIs', icon: 'fas fa-network-wired' },
                { name: 'Database Design', icon: 'fas fa-database' },
                { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
                { name: 'Version Control', icon: 'fas fa-code-branch' },
                { name: 'Chatgpt', icon: 'fas fa-users-cog' },
                { name: 'Copilot', icon: 'fas fa-users-cog' },
                { name: 'Canva', icon: 'fas fa-brain' },
                { name: 'Problem Solving', icon: 'fas fa-brain' },
                { name: 'Visual Studio', icon: 'fas fa-wave-square' },
                { name: 'Bootstrap', icon: 'fas fa-route' },
                { name: 'Restful APIs', icon: 'fas fa-network-wired' },
                { name: 'MS Office', icon: 'fas fa-route' },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-200 dark:border-primary-800"
                >
                  <i className={`${skill.icon} text-2xl text-white mb-1`}></i>
                  <span className="text-xs font-semibold text-white text-center leading-tight px-1">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
