"use client"

import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB.",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A real-time task management application using React, Socket.io, and Express.",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A responsive dashboard for social media analytics using React and D3.js.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

