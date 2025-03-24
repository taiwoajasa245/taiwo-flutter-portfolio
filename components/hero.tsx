"use client";

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section
      id="home"
      className="container flex min-h-[calc(100vh-4rem)] max-w-screen-2xl flex-col items-center justify-center py-24 md:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ajasa Taiwo
              </span>
            </h1>
            <div className="h-12 md:h-16">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Flutter Developer",
                  2000,
                  "Mobile App Developer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "Cross-Platform Expert",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              />
            </div>
            <p className="mt-4 text-muted-foreground sm:text-lg max-w-md mx-auto md:mx-0">
              Passionate Flutter developer with expertise in building high-performance, cross-platform applications
              using clean architecture.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/taiwoajasa245" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/ajasa-taiwo" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10">
                <img
                  src="/developer_svg.svg?height=400&width=400"
                  alt="Ajasa Taiwo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-10 right-20 p-3 bg-white/10 backdrop-blur-md rounded-lg shadow-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <img src="/globe.svg?height=40&width=40" alt="Flutter" className="w-10 h-10" />
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-10 p-3 bg-white/10 backdrop-blur-md rounded-lg shadow-lg"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <img src="/mobile_svg.svg?height=40&width=40" alt="Dart" className="w-10 h-10" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-0 p-3 bg-white/10 backdrop-blur-md rounded-lg shadow-lg"
              animate={{
                x: [0, -10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3.5,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <img src="/developer_svg.svg?height=40&width=40" alt="Mobile" className="w-10 h-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
