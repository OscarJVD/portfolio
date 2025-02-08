"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "NextJs", level: 90 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "GraphQL", level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <motion.div
                className="h-4 bg-gray-700 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="h-full bg-blue-500 rounded-full"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

