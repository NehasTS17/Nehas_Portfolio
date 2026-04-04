import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/NehasTS17', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/nehas-ts', label: 'LinkedIn' },
    { icon: 'fab fa-envelope', url: 'mailto:nehas170499@gmail.com', label: 'Email' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-dark-bg dark:bg-dark-surface text-dark-text dark:text-dark-text py-12 border-t border-dark-border dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Nehas TS</h3>
            <p className="text-dark-text-secondary dark:text-dark-text-secondary text-sm">
              Full Stack Developer passionate about building scalable and responsive web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-dark-text-secondary dark:text-dark-text-secondary">
              <li>
                <a href="#about" className="hover:text-primary-500 transition-colors">
                  → About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-500 transition-colors">
                  → My Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-500 transition-colors">
                  → Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm text-dark-text-secondary dark:text-dark-text-secondary">
              <p className="flex items-center space-x-2">
                <i className="fas fa-phone w-4"></i>
                <span>+91 8136842364</span>
              </p>
              <p className="flex items-center space-x-2">
                <i className="fas fa-envelope w-4"></i>
                <a href="mailto:nehas170499@gmail.com" className="hover:text-primary-500 transition-colors">
                  nehas170499@gmail.com
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt w-4"></i>
                <span>Chennai, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-light-border dark:border-dark-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-text-secondary dark:text-dark-text-secondary text-sm mb-4 md:mb-0">
            © {currentYear} Nehas TS. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-dark-border hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 hover:text-white flex items-center justify-center transition-colors"
                title={link.label}
                aria-label={link.label}
              >
                <i className={`${link.icon} text-white text-lg`}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
