'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert('Thank you! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'mohamedmorsy.info@gmail.com',
      link: 'mailto:mohamedmorsy.info@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+20 1226683056',
      link: 'tel:+201226683056',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Egypt, Cairo',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-light/70 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
              Get in Touch
            </h3>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="gradient-bg p-2.5 sm:p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">
                      {info.title}
                    </h4>
                    <p className="text-light/70 text-sm sm:text-base">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Why Work With Us?</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Experienced team of developers',
                  'Agile development methodology',
                  'Transparent communication',
                  'On-time delivery guarantee',
                  'Post-launch support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 gradient-bg rounded-full flex-shrink-0" />
                    <span className="text-light/80 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-slate-900/50 backdrop-blur-sm border border-primary/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1.5 sm:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1.5 sm:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1.5 sm:mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full gradient-bg py-3 sm:py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2 text-sm sm:text-base hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}