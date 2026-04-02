'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-light/70 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful mobile applications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-dark/50 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div
                className={`h-40 sm:h-48 bg-gradient-to-br ${project.image} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="text-white text-5xl sm:text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={`/projects/${project.id}`}
                    className="gradient-bg px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-semibold flex items-center gap-2 text-sm sm:text-base"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <div className="text-primary text-xs sm:text-sm font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-light/70 text-sm sm:text-base mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Link */}
                <Link
                  href={`/projects/${project.id}`}
                  className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm sm:text-base font-medium"
                >
                  <ExternalLink size={16} />
                  <span>Learn More</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}