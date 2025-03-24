"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Server, Layout, GitBranch, Smartphone, Layers } from "lucide-react"

const skills = [
  {
    category: "Languages & Frameworks",
    icon: <Code className="h-6 w-6" />,
    items: ["C", "Dart", "Flutter", "Next.js", "Node.js", "TypeScript", "JavaScript", "Python", "VB.Net"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend Technologies",
    icon: <Server className="h-6 w-6" />,
    items: ["Express.js", "Node.js", "Firebase", "REST APIs", "GraphQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Database Management",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "PostgreSQL", "Firebase Firestore", "MySQL"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    category: "State Management",
    icon: <Layers className="h-6 w-6" />,
    items: ["Riverpod", "Provider", "Bloc"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Version Control",
    icon: <GitBranch className="h-6 w-6" />,
    items: ["Git", "GitHub", "GitLab"],
    color: "from-red-500 to-rose-500",
  },
  {
    category: "UI/UX",
    icon: <Layout className="h-6 w-6" />,
    items: ["Tailwind CSS", "Material Design", "Cupertino Widgets"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    category: "Tools & Platforms",
    icon: <Smartphone className="h-6 w-6" />,
    items: ["Android Studio", "VS Code", "Postman", "Vercel", "Docker", "Figma", "Xcode"],
    color: "from-blue-500 to-purple-500",
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20">
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
                My Skills
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative overflow-hidden rounded-lg border border-white/10 bg-black/5 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-5 blur-xl -z-10"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-md bg-gradient-to-r ${skill.color} text-white`}>{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: itemIndex * 0.1 + 0.2 }}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${skill.color} text-white`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

