import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScroll = (href) => {
    const target = document.querySelector(href);

    if (!target) return;

    // ✅ close menu first (important for mobile)
    setIsOpen(false);

    // ✅ delay scroll until menu animation finishes
    setTimeout(() => {
      const offset = 90;

      const top =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }, 300); // match your animation duration
  };

  // Function to check which section is currently in view
  const checkActiveSection = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);

      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(link.id);
        }
      }
    });
  };

  // Check if page is scrolled
  const checkScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    let timeout;

    const handleScrollEvent = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        checkActiveSection();
        checkScroll();
      }, 50);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-dark-border/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => handleScroll('#home')}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative w-10 h-10 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
            >
              <span className="text-white font-bold text-lg">N</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl opacity-50 blur-sm"
              />
            </motion.div>
            <div className="flex flex-col">
              <Link to="/" className="text-xl font-bold gradient-text leading-tight">
                Nehas TS
              </Link>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2 select-none">
            {navLinks.map((link, index) => (
              <motion.div key={index} className="relative group select-none">

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    handleScroll(link.href);
                    
                  }}
                  style={{ willChange: "transform" }}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden select-none transform-gpu focus:outline-none ${activeSection === link.id
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-light-text dark:text-dark-text hover:text-primary-500 dark:hover:text-primary-300'
                    }`}
                >
                  <span className="relative z-10 pointer-events-none">
                    {link.name}
                  </span>

                  {/* Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.button>

                {/* Animated Underline */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                )}

                {/* Active Background */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

              </motion.div>
            ))}
          </div>

          {/* Right side - Theme toggle & Mobile menu */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <motion.button
                onClick={toggleMode}
                className="relative p-3 rounded-xl bg-light-surface dark:bg-dark-card hover:bg-light-border dark:hover:bg-dark-border transition-all duration-300 shadow-md hover:shadow-lg border border-light-border dark:border-dark-border"
                aria-label="Toggle dark/light mode"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  {theme.mode === 'dark' ? (
                    <motion.svg
                      key="moon"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="sun"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-3 rounded-xl bg-light-surface dark:bg-dark-card hover:bg-light-border dark:hover:bg-dark-border transition-all duration-300 shadow-md hover:shadow-lg border border-light-border dark:border-dark-border"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-light-text dark:text-dark-text"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-light-text dark:text-dark-text"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div
                className="py-4 space-y-2 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl border border-white/20 dark:border-dark-border/20"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <motion.button
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        handleScroll(link.href);
                        
                      }}
                      className={`relative w-full text-left px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                        activeSection === link.id
                          ? 'text-primary-600 dark:text-primary-400 bg-gradient-to-r from-primary-500/10 to-secondary-500/10'
                          : 'text-light-text dark:text-dark-text hover:bg-light-surface dark:hover:bg-dark-surface'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-between">
                        {link.name}
                        {activeSection === link.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                          />
                        )}
                      </span>
                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
