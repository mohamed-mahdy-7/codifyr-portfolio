'use client'

import { motion } from 'framer-motion'
import { Smartphone, Tablet, Cpu, Layers, CloudUpload, Lock } from 'lucide-react'

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
      icon: CloudUpload,
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
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-light/70 text-lg max-w-2xl mx-auto">
            Comprehensive mobile development solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-dark/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-light/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}