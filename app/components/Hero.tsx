'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Zap, Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="gradient-bg px-4 py-2 rounded-full text-sm font-semibold text-white">
                🚀 Mobile Development Experts
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Amazing{' '}
              <span className="gradient-text">Mobile Apps</span>
            </h1>

            <p className="text-xl text-light/70 mb-8 leading-relaxed">
              Transform your vision into reality with cutting-edge mobile solutions. 
              We craft exceptional iOS and Android applications that users love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="gradient-bg px-8 py-4 rounded-full text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight size={20} />
              </a>
              <a
                href="#projects"
                className="border-2 border-primary px-8 py-4 rounded-full text-primary font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Our Work
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { number: '150+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '50+', label: 'Happy Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <h3 className="text-3xl font-bold gradient-text">{stat.number}</h3>
                  <p className="text-light/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Floating Icons */}
              {[
                { Icon: Smartphone, position: 'top-10 left-0', delay: 0.5 },
                { Icon: Code2, position: 'top-32 right-10', delay: 0.7 },
                { Icon: Zap, position: 'bottom-20 left-20', delay: 0.9 },
              ].map(({ Icon, position, delay }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${position} gradient-bg p-4 rounded-2xl shadow-2xl`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>
              ))}

              {/* Center Image Placeholder */}
              <motion.div
                className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm border border-primary/20"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Smartphone size={120} className="text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}