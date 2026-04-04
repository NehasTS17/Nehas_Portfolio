import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Dot NET Full Stack Developer',
      company: 'SLA Institute',
      type: 'A Grade',
      duration: '6 Months (2025-2026)',
      icon: 'fas fa-laptop-code',
      description: 'Comprehensive training in .NET technologies covering C#, ASP.NET MVC, Web API, and database management.',
      highlights: [
        'React JS for frontend',
        'HTML, CSS, and JavaScript for frontend',
        'Advanced C# programming',
        'ASP.NET MVC framework',
        'RESTful Web API development',
        'Database design and optimization',
      ],
    },
    {
      "id": 2,
      "role": "Diploma in Computer Application (DCA)",
      "company": "Trinity Software Technologies",
      "type": "Second Class",
      "duration": "6 Months (Jan - Jun 2017)",
      "icon": "fas fa-graduation-cap",
      "description": "Completed six-month diploma program covering office automation, graphic design, accounting software, and typing skills.",
      "highlights": [
        "MS Office Suite",
        "Adobe Photoshop, Illustrator & InDesign",
        "Tally Accounting Software",
        "Tamil & English Typing",
        "Scored 176/200 (88%)"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-[var(--surface)] dark:bg-[var(--surface-dark)] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold section-title">
            Course
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line (desktop only) */}
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500" />
              )}

              <div className="flex gap-3 sm:gap-6">

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 mt-1 sm:mt-2 flex-shrink-0"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl shadow-lg">
                    <i className={exp.icon} />
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex-1 bg-gradient-to-br from-light-bg to-light-surface dark:from-dark-card dark:to-dark-surface p-4 sm:p-6 rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all border border-light-border dark:border-dark-border"
                >

                  {/* Top Section */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3 sm:mb-4">

                    {/* Title */}
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-light-text dark:text-dark-text mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base">
                        {exp.company}
                      </p>
                    </div>

                    {/* Right Info */}
                    <div className="text-left sm:text-right">
                      <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text rounded-full font-semibold text-xs sm:text-sm mb-1 sm:mb-2 border border-light-border dark:border-dark-border">
                        {exp.type}
                      </span>
                      <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary font-semibold">
                        {exp.duration}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-light-text dark:text-dark-text-secondary mb-3 sm:mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <motion.div
                        key={hIdx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: hIdx * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <i className="fas fa-check-circle text-primary-500 mt-1" />
                        <span className="text-xs sm:text-sm text-light-text dark:text-dark-text-secondary">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
