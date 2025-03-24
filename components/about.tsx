"use client"; 

import { motion } from "framer-motion"
import Link from "next/link";
import { useInView } from "react-intersection-observer"

export default function About() {
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
    <section id="about" className="py-20 bg-black/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
              <div className="relative overflow-hidden rounded-lg border border-white/10">
                <img
                  src="/developer_svg.svg?height=600&width=500"
                  alt="Ajasa Taiwo"
                  className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Ajasa Taiwo </h3>
                <p className="text-lg text-blue-400 font-medium">Flutter Developer</p>
                <p className="text-muted-foreground">
                  Passionate Flutter developer with expertise in building high-performance, cross-platform applications
                  using clean architecture. Skilled in API integration, state management, and UI/UX design. Looking for
                  an opportunity to contribute to a dynamic team and deliver impactful mobile solutions.  <Link href={"/about"} className="text-sm underline font-medium transition-colors hover:text-primary">
                Learn more
              </Link>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="font-medium">Name:</span>
                  <span className="text-muted-foreground">Ajasa Taiwo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="font-medium">Email:</span>
                  <span className="text-muted-foreground">ajasataiwo45@gmail.com</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="font-medium">Phone:</span>
                  <span className="text-muted-foreground">+234-9018-954-114</span>
                </div> */}
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="font-medium">Location:</span>
                  <span className="text-muted-foreground">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="font-medium">Education:</span>
                  <span className="text-muted-foreground">B.Sc. Computer Science (Ongoing)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="font-medium">University:</span>
                  <span className="text-muted-foreground">Lagos State University</span>
                </div>
              </div>

              <motion.div
                className="pt-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all hover:shadow-lg"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

