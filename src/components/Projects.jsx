import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Fitfusion from '../assets/FitFusion.png';
import PhoneMart from '../assets/PhoneMart.png';
import Portfolio1 from '../assets/Portfolio1.png';
import Portfolio2 from '../assets/Portfolio2.png';
import Todo from '../assets/Todo.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'PhoneMart E-commerce Platform',
      description: 'A modern e-commerce frontend platform with advanced filtering, product search, and responsive design.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      image: PhoneMart,
      category: 'frontend',
      link: 'https://phone-mart-xi.vercel.app/',
      code: 'https://github.com/NehasTS17',
      features: ['Product Filtering', 'Responsive UI', 'Shopping Cart'],
      gradient: 'from-blue-500 to-cyan-500',
      status: 'completed'
    },
    {
      id: 2,
      title: 'My Old Portfolio',
      description: 'A fully responsive and animated portfolio website showcasing projects, skills, and experience.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: Portfolio1,
      category: 'frontend',
      link: 'https://nehas-portfolioo.netlify.app/',
      code: '#',
      features: ['Dark Mode', 'Animations', 'Smooth Scrolling'],
      gradient: 'from-purple-500 to-pink-500',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description: 'A modern, fully responsive portfolio built with React and Tailwind CSS. Includes smooth animations, dark/light mode, and showcases projects and skills effectively.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: Portfolio2, 
      category: 'frontend',
      link: '#',
      code: '#',
      features: ['Dark Mode', 'Responsive Design', 'Smooth Animations', 'Project Showcase', 'Light/Dark Theme Toggle'],
      gradient: 'from-orange-500 to-yellow-500',
      status: 'completed'
    },
    {
      id: 4,
      title: 'FitFusion Pro',
      description: 'A full-stack fitness application with user authentication, workout tracking, and progress monitoring.',
      technologies: ['C#', 'ASP.NET', 'React', 'MySQL'],
      image: Fitfusion,
      category: 'fullstack',
      link: '#',
      code: '#',
      features: ['User Auth', 'Real-time Updates', 'Database Integration'],
      gradient: 'from-green-500 to-emerald-500',
      status: 'completed'
    },
     {
      id: 5,
      title: 'TodoApp',
      description: 'A responsive task management app with a dark WhatsApp-inspired UI for adding, editing, deleting, and managing daily tasks.',
      technologies: ['React', 'Tailwindcss'],
      image: Todo,
      category: 'frontend',
      link: 'https://todoapp-nehas.netlify.app/',
      code: '#',
      features: ['Dark WhatsApp-Inspired UI','Add, Edit & Delete Tasks','Mark Tasks as Completed','Responsive Design'],
      gradient: 'from-lime-500 to-mauve-500',
      status: 'completed'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'fas fa-th-large' },
    { id: 'frontend', name: 'Frontend', icon: 'fas fa-desktop' },
    { id: 'fullstack', name: 'Full Stack', icon: 'fas fa-layer-group' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
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
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full blur-xl"
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
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-accent-500/5 to-primary-500/5 rounded-full blur-xl"
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
              🚀 My Work
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">Featured </span>
            <span className="text-light-text dark:text-dark-text">Projects</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full max-w-md mx-auto mb-8"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-8 sm:mb-12 px-2"
        >
          <div className="flex gap-2 sm:gap-4 p-2 bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 dark:border-dark-border/20 shadow-lg overflow-x-auto no-scrollbar">

            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${selectedCategory === category.id
                    ? 'text-white shadow-lg'
                    : 'text-light-text dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
              >
                {/* Active Background */}
                {selectedCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg sm:rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Content */}
                <span className="relative z-10 flex items-center whitespace-nowrap">
                  <i className={`${category.icon} mr-1 sm:mr-2`}></i>
                  {category.name}
                </span>
              </motion.button>
            ))}

          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
                }}
                className="group cursor-pointer relative bg-white/80 dark:bg-dark-card/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-white/20 dark:border-dark-border/20"
              >
                {/* Project Image Area */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    className="text-7xl group-hover:scale-110"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </motion.div>

                  {/* Status Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 border border-white/20 dark:border-dark-border/20"
                  >
                    {project.status}
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`w-8 h-8 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white text-sm shadow-lg`}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-xs text-light-text-secondary dark:text-dark-text-secondary"
                      >
                        <motion.i
                          whileHover={{ scale: 1.2 }}
                          className="fas fa-check-circle text-primary-500 mr-2 flex-shrink-0"
                        ></motion.i>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-light-surface/50 dark:bg-dark-surface/50 text-light-text dark:text-dark-text text-xs font-semibold rounded-full border border-light-border/50 dark:border-dark-border/50 backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <motion.a
                      href={project.link}
                      target='_blank'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 group/btn relative px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl text-center overflow-hidden"
                    >
                      <span className="relative z-10">View Project</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-accent-500 opacity-0 group-hover/btn:opacity-100" />
                    </motion.a>
                    <motion.a
                      href={project.code}
                      target='_blank'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl text-center hover:bg-primary-50 dark:hover:bg-primary-900/50 backdrop-blur-sm"
                    >
                      <i className="fas fa-code mr-1"></i>
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/NehasTS17"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(131, 58, 180, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: "transform" }}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white font-semibold rounded-2xl shadow-lg overflow-hidden select-none transform-gpu focus:outline-none"
          >
            <span className="relative z-10 flex items-center pointer-events-none">
              <i className="fab fa-github mr-3"></i>
              View All Projects on GitHub
              <motion.i
                className="fas fa-arrow-right ml-3"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 via-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 rounded-2xl pointer-events-none" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
