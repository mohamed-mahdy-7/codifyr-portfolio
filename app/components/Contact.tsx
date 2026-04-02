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
    // Handle form submission
    console.log(formData)
    alert('Thank you! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@codifyr.com',
      link: 'mailto:hello@codifyr.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'San Francisco, CA',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-light/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="gradient-bg p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-light/70">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4">Why Work With Us?</h4>
              <ul className="space-y-3">
                {[
                  'Experienced team of developers',
                  'Agile development methodology',
                  'Transparent communication',
                  'On-time delivery guarantee',
                  'Post-launch support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 gradient-bg rounded-full"></div>
                    <span className="text-light/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-slate-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full gradient-bg py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}