'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Zap, Code2 } from 'lucide-react'
import Typewriter from './Typewriter'

export default function Hero() {
  const typewriterWords = [
    'Mobile Apps',
    'iOS Apps',
    'Android Apps',
    'Cross-Platform',
    'UI/UX Design',
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="gradient-bg px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white">
                🚀 Mobile Development Experts
              </span>
            </motion.div>

            {/* Main Heading with Typewriter */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Build Amazing{' '}
              <span className="gradient-text block sm:inline">
                <Typewriter words={typewriterWords} />
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-light/70 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transform your vision into reality with cutting-edge mobile solutions. 
              We craft exceptional iOS and Android applications that users love.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                className="gradient-bg px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#projects"
                className="border-2 border-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-primary font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0">
              {[
                { number: '150+', label: 'Projects' },
                { number: '98%', label: 'Satisfaction' },
                { number: '50+', label: 'Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
                    {stat.number}
                  </h3>
                  <p className="text-light/60 text-xs sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Floating Icons */}
              {[
                { Icon: Smartphone, position: 'top-0 left-0 sm:top-10 sm:left-0', delay: 0.5 },
                { Icon: Code2, position: 'top-20 right-0 sm:top-32 sm:right-0', delay: 0.7 },
                { Icon: Zap, position: 'bottom-10 left-10 sm:bottom-20 sm:left-10', delay: 0.9 },
              ].map(({ Icon, position, delay }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${position} gradient-bg p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl z-10`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
              ))}

              {/* Main Card */}
              <motion.div
                className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-primary/20"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}