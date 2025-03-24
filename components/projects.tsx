"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Grocery List App",
    description: "Built a dynamic grocery list app that allows users to create, edit, and categorize grocery lists.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Flutter", "Dart"],
    github: "https://github.com/taiwoajasa245/Grocery_Shopping_LIst",
    demo: "https://github.com/taiwoajasa245/Grocery_Shopping_LIst",
    category: "mobile",
  },
  {
    title: "Calculator App",
    description: "Developed a fully functional calculator app with standard arithmetic operations and a responsive UI.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Flutter", "Dart"],
    github: "https://github.com/taiwoajasa245/flutter_calculator_app",
    demo: "https://github.com/taiwoajasa245/flutter_calculator_app",
    category: "mobile",
  },
  {
    title: "Chess Timer App",
    description: "Developed a chess timer with customizable time controls and an intuitive UI.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Flutter", "Dart"],
    github: "https://github.com/taiwoajasa245/chess_timer",
    demo: "https://github.com/taiwoajasa245/chess_timer",
    category: "mobile",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

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

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                My Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-gradient-to-r from-blue-500 to-purple-500" : ""}
              >
                All Projects
              </Button>
              <Button
                variant={filter === "mobile" ? "default" : "outline"}
                onClick={() => setFilter("mobile")}
                className={filter === "mobile" ? "bg-gradient-to-r from-blue-500 to-purple-500" : ""}
              >
                Mobile Apps
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="bg-black/20 backdrop-blur-sm" asChild>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" /> Code
                        </Link>
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-500" asChild>
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" /> Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
