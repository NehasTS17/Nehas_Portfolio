import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = "https://script.google.com/macros/s/AKfycbyELjkRu8je7XaQJZBkJ-aHa-HqMvqNOrujumT9F6d5tux3UPkF8dnSCNi_1m_TLlrIkg/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${encodeURIComponent(formData.name)}&Email=${encodeURIComponent(formData.email)}&Subject=${encodeURIComponent(formData.subject)}&Message=${encodeURIComponent(formData.message)}`
      });

      if (!response.ok) throw new Error(`Server error: ${response.status}`);

      await response.text();
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000); // auto-hide success
    } catch (error) {
      console.error(error);
      alert(`Failed to send message: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  const contactInfo = [
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+91 8136842364',
      link: 'tel:+918136842364',
      gradient: 'from-green-500 to-emerald-500',
      color: 'text-green-500'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'nehas170499@gmail.com',
      link: 'mailto:nehas170499@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      color: 'text-blue-500'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Chennai, India',
      link: '#',
      gradient: 'from-red-500 to-pink-500',
      color: 'text-red-500'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
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
          className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full blur-2xl"
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
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-accent-500/5 to-primary-500/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-secondary-500/3 to-accent-500/3 rounded-full blur-2xl"
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
              📬 Let's Connect
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">Get In </span>
            <span className="text-light-text dark:text-dark-text">Touch</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full max-w-md mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            I'd love to hear from you! Whether you have a question or just want to say hello, feel free to reach out.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-between items-stretch gap-2 sm:gap-4 lg:gap-6 mb-12 sm:mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 15px 30px rgba(0,0,0,0.12)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex-1 min-w-0 bg-white/80 dark:bg-dark-card/80 backdrop-blur-xl 
      p-2 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg 
      hover:shadow-xl transition-all duration-300 text-center border border-white/20 dark:border-dark-border/20 overflow-hidden"
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`relative w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 mx-auto mb-2 sm:mb-3 
        rounded-lg sm:rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center 
        text-white text-sm sm:text-lg lg:text-2xl`}
              >
                <i className={info.icon}></i>
              </motion.div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-light-text dark:text-dark-text truncate">
                  {info.label}
                </h3>

                <p className="text-[9px] sm:text-[11px] lg:text-xs text-light-text-secondary dark:text-dark-text-secondary truncate">
                  {info.value}
                </p>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 to-secondary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-3xl blur-2xl" />

          {/* Card */}
          <div className="relative bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl 
                  p-5 sm:p-6 md:p-10 lg:p-12 
                  rounded-2xl sm:rounded-3xl 
                  shadow-xl sm:shadow-2xl 
                  border border-white/20 dark:border-dark-border/20">

            {/* Heading */}
            <div className="text-center mb-6 sm:mb-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg sm:text-2xl md:text-3xl lg:text-4xl 
                   font-bold mb-3 sm:mb-4 leading-tight"
              >
                <span className="gradient-text">Send Me a </span>
                <span className="text-light-text dark:text-dark-text">Message</span>
              </motion.h3>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full max-w-xs mx-auto"
              />
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                /* ✅ Success Message */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full 
                          bg-gradient-to-r from-green-500 to-emerald-500 
                          flex items-center justify-center text-white 
                          text-3xl sm:text-4xl mx-auto mb-6 shadow-lg">
                    <i className="fas fa-check"></i>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                    Message Sent Successfully!
                  </h4>

                  <p className="text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                /* ✅ Form */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-light-text dark:text-dark-text mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 
                       text-sm sm:text-base
                       bg-light-surface/50 dark:bg-dark-surface/50 
                       border border-light-border dark:border-dark-border 
                       rounded-lg sm:rounded-xl text-light-text dark:text-dark-text
                       focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-light-text dark:text-dark-text mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 
                       text-sm sm:text-base
                       bg-light-surface/50 dark:bg-dark-surface/50 
                       border border-light-border dark:border-dark-border 
                       rounded-lg sm:rounded-xl text-light-text dark:text-dark-text
                       focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-light-text dark:text-dark-text mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 
                     text-sm sm:text-base
                     bg-light-surface/50 dark:bg-dark-surface/50 
                     border border-light-border dark:border-dark-border 
                     rounded-lg sm:rounded-xl text-light-text dark:text-dark-text
                     focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="What is this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-light-text dark:text-dark-text mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 
                     text-sm sm:text-base
                     bg-light-surface/50 dark:bg-dark-surface/50 
                     border border-light-border dark:border-dark-border 
                     rounded-lg sm:rounded-xl text-light-text dark:text-dark-text
                     resize-none
                     focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="text-center pt-2">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={loading ? {} : { scale: 1.05, boxShadow: "0 20px 40px rgba(131, 58, 180, 0.3)" }}
                      whileTap={loading ? {} : { scale: 0.95 }}
                      className="group relative w-full sm:w-auto 
                                  px-6 sm:px-10 py-3 sm:py-4 
                                  text-sm sm:text-base
                                  bg-gradient-to-r from-primary-500 to-secondary-500 
                                  text-white font-semibold 
                                  rounded-xl sm:rounded-2xl 
                                  shadow-lg hover:shadow-2xl 
                                  transition-all duration-300 overflow-hidden"
                    >
                      <span className="flex items-center justify-center">
                        {loading ? "Sending..." : (<><i className="fas fa-paper-plane mr-2"></i>Send Message</>)}
                      </span>
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-light-text dark:text-dark-text">
            Connect With Me
          </h3>
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
            {[
              { icon: 'fab fa-github', url: 'https://github.com/NehasTS17', label: 'GitHub', gradient: 'from-gray-600 to-gray-800' },
              { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/nehas-ts', label: 'LinkedIn', gradient: 'from-blue-600 to-blue-800' },
              { icon: 'fas fa-envelope', url: 'mailto:nehas170499@gmail.com', label: 'Email', gradient: 'from-red-500 to-pink-500' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                  y: -4,
                  boxShadow: "0 12px 25px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.9 }}
                className={`group relative 
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
        rounded-xl sm:rounded-2xl 
        bg-gradient-to-r ${social.gradient} 
        text-white flex items-center justify-center 
        shadow-md sm:shadow-lg hover:shadow-xl 
        transition-all duration-300 overflow-hidden`}
                title={social.label}
                aria-label={social.label}
              >
                {/* Icon */}
                <i className="text-sm sm:text-lg md:text-xl">
                  {<span className={`${social.icon} text-sm sm:text-lg md:text-xl`}></span>}
                </i>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
