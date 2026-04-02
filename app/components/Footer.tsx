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
    <footer className="bg-slate-900/50 border-t border-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.h3
              className="text-3xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Codifyr
            </motion.h3>
            <p className="text-light/70 mb-6 max-w-md">
              Transforming ideas into exceptional mobile experiences. 
              Your trusted partner in mobile app development.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon size={20} className="text-primary group-hover:text-secondary transition-colors" />
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
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-light/70 hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light/60 text-sm">
            © {new Date().getFullYear()} Codifyr. All rights reserved.
          </p>
          <p className="text-light/60 text-sm">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}