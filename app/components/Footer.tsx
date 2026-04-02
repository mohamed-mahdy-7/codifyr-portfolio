'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'Github' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  const footerLinks = [
    {
      title: 'Services',
      links: ['iOS Development', 'Android Development', 'Cross-Platform', 'UI/UX Design'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Blog'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Case Studies', 'Privacy Policy', 'Terms of Service'],
    },
  ]

  return (
    <footer className="bg-slate-900/50 border-t border-primary/10 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="col-span-2 lg:col-span-2">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold gradient-text mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Codifyr
            </motion.h3>
            <p className="text-light/70 mb-4 sm:mb-6 text-sm sm:text-base max-w-md">
              Transforming ideas into exceptional mobile experiences. 
              Your trusted partner in mobile app development.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-secondary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{section.title}</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-light/70 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-primary/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-light/60 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Codifyr. All rights reserved.
          </p>
          <p className="text-light/60 text-xs sm:text-sm text-center sm:text-right">
            Built with ❤️ by Codifyr Dev.
          </p>
        </div>
      </div>
    </footer>
  )
}