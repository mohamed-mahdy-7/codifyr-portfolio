'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, CheckCircle, Quote } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getProjectById } from '../../../lib/projects'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ProjectDetails() {
  const params = useParams()
  const project = getProjectById(params.id as string)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-light/70 hover:text-primary transition-colors mb-6 sm:mb-8"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-bg px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 sm:mt-6 mb-4">
              {project.title}
            </h1>
            <p className="text-light/70 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
              {project.shortDescription}
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div
            className={`h-48 sm:h-64 lg:h-80 xl:h-96 bg-gradient-to-br ${project.image} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-8 sm:mb-12`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-white text-6xl sm:text-8xl lg:text-9xl font-bold opacity-20">
              {project.title.charAt(0)}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-primary/10 border border-primary/20 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg px-6 sm:px-8 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary px-6 sm:px-8 py-3 rounded-full text-primary font-semibold flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors"
              >
                <Github size={18} />
                View Source
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">About the Project</h2>
              <p className="text-light/70 text-base sm:text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-light/80 text-sm sm:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Challenge */}
            <motion.div
              className="bg-dark/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-400">The Challenge</h3>
              <p className="text-light/70 text-sm sm:text-base leading-relaxed">{project.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              className="bg-dark/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-400">Our Solution</h3>
              <p className="text-light/70 text-sm sm:text-base leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Project <span className="gradient-text">Results</span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-light/90 text-sm sm:text-base font-medium">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary/30 mx-auto mb-4 sm:mb-6" />
              <p className="text-lg sm:text-xl lg:text-2xl text-light/90 italic mb-6 sm:mb-8 leading-relaxed">
                "{project.testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-base sm:text-lg">{project.testimonial.author}</p>
                <p className="text-light/60 text-sm sm:text-base">{project.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Project <span className="gradient-text">Gallery</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {project.gallery.map((gradient, index) => (
              <motion.div
                key={index}
                className={`h-40 sm:h-48 lg:h-56 bg-gradient-to-br ${gradient} rounded-xl sm:rounded-2xl flex items-center justify-center`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-white/30 text-3xl sm:text-4xl font-bold">
                  {index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Build Your <span className="gradient-text">Dream App?</span>
            </h2>
            <p className="text-light/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together
            </p>
            <Link
              href="/#contact"
              className="inline-flex gradient-bg px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}