'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'HealthTracker Pro',
      category: 'Healthcare',
      description: 'Comprehensive health monitoring app with AI-powered insights',
      image: 'bg-gradient-to-br from-green-500 to-emerald-600',
      tech: ['React Native', 'Firebase', 'TensorFlow'],
    },
    {
      title: 'EcoShop',
      category: 'E-Commerce',
      description: 'Sustainable shopping platform with seamless checkout',
      image: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      tech: ['Flutter', 'Node.js', 'Stripe'],
    },
    {
      title: 'FitnessPal',
      category: 'Fitness',
      description: 'Personal training app with workout tracking and nutrition plans',
      image: 'bg-gradient-to-br from-purple-500 to-pink-600',
      tech: ['Swift', 'HealthKit', 'AWS'],
    },
    {
      title: 'TravelMate',
      category: 'Travel',
      description: 'Smart travel planner with real-time recommendations',
      image: 'bg-gradient-to-br from-orange-500 to-red-600',
      tech: ['Kotlin', 'Google Maps', 'Firebase'],
    },
  ]

  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-light/70 text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful mobile applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark/50 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <div className="text-white text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <div className="text-primary text-sm font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-light/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
                    <ExternalLink size={18} />
                    <span>View Demo</span>
                  </button>
                  <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
                    <Github size={18} />
                    <span>Source</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}