'use client'

import { motion } from 'framer-motion'
import { Users, Award, Target, TrendingUp } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you at every step.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in code quality and design.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Using cutting-edge technologies to build future-proof solutions.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We help scale your business with robust and scalable applications.',
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Why Choose <span className="gradient-text">Codifyr?</span>
            </h2>
            <p className="text-light/70 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              We're a passionate team of mobile development experts dedicated to turning 
              your ideas into successful applications. With years of experience and a 
              portfolio of satisfied clients, we deliver excellence every time.
            </p>
            <p className="text-light/70 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Our agile development process ensures transparency, flexibility, and 
              timely delivery. We don't just build apps – we build long-term partnerships.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-md mx-auto lg:mx-0">
              {['React Native', 'Flutter', 'Swift', 'Kotlin'].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-primary/10 border border-primary/20 rounded-lg p-3 sm:p-4 text-center font-semibold text-sm sm:text-base"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border border-primary/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="gradient-bg w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-light/60 text-xs sm:text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}