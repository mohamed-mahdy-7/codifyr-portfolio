'use client'

import { motion } from 'framer-motion'
import { Smartphone, Tablet, Cpu, Layers, Cloud, Lock } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'iOS Development',
      description: 'Native iOS apps built with Swift and SwiftUI for exceptional performance.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Tablet,
      title: 'Android Development',
      description: 'Powerful Android applications using Kotlin and Jetpack Compose.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Layers,
      title: 'Cross-Platform',
      description: 'Cost-effective solutions with React Native and Flutter.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cpu,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love to interact with.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Cloud,
      title: 'Backend Integration',
      description: 'Seamless API integration and cloud services implementation.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Lock,
      title: 'App Security',
      description: 'Enterprise-grade security measures to protect your data.',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-light/70 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive mobile development solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-dark/50 backdrop-blur-sm border border-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-light/70 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}