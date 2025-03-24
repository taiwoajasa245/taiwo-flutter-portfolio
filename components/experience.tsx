"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Freelance Flutter Developer",
    company: "Student Cornr App",
    period: "May 2025 – Present",
    description: [
      "Designed and developed user-friendly UI/UX for mobile applications.",
      "Integrated RESTful APIs to fetch and display real-time data.",
      "Managed app state efficiently using Bloc and Provider.",
    ],
    technologies: ["Dart", "Flutter", "Bloc", "GetIt", "Dio"],
    type: "work",
  },
]

const education = [
  {
    degree: "B.Sc. in Computer Science and Education",
    institution: "Lagos State University",
    period: "2022 – 2026 (Expected)",
    description: "Currently in 3rd Year",
    type: "education",
  },
  {
    degree: "High School Diploma",
    institution: "Jakande Comprehensive Senior College",
    period: "Graduated 2020",
    description: "",
    type: "education",
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-black/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Experience & Education
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Work Experience */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Work Experience</h3>
              </div>

              <div className="relative border-l-2 border-blue-500/50 pl-6 space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -left-[30px] top-0 h-6 w-6 rounded-full bg-blue-500 border-4 border-background"></div>
                    <div className="rounded-lg border border-white/10 bg-black/5 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <p className="text-blue-400">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="relative border-l-2 border-purple-500/50 pl-6 space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -left-[30px] top-0 h-6 w-6 rounded-full bg-purple-500 border-4 border-background"></div>
                    <div className="rounded-lg border border-white/10 bg-black/5 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-purple-400">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                      {edu.description && <p className="text-sm text-muted-foreground">{edu.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

