"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Download,
  Code,
  Database,
  Server,
  Layout,
  GitBranch,
  Smartphone,
  Layers,
  BookOpen,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [bioRef, bioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [interestsRef, interestsInView] = useInView({
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
      items: ["Android Studio", "VS Code", "Postman", "Vercel", "Docker", "Figma"],
      color: "from-blue-500 to-purple-500",
    },
  ]

  const timeline = [
    {
      year: "2022 - Present",
      title: "B.Sc. in Computer Science and Education",
      description:
        "Currently pursuing my degree at Lagos State University, focusing on software development and educational technology.",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "bg-blue-500",
    },
    {
      year: "2025 - Present",
      title: "Freelance Flutter Developer",
      description:
        "Working on the Student Cornr App, designing user interfaces and implementing state management solutions.",
      icon: <Briefcase className="h-5 w-5" />,
      color: "bg-purple-500",
    },
    {
      year: "2023 - 2024",
      title: "Self-taught Flutter Development",
      description:
        "Dedicated time to mastering Flutter through online courses, documentation, and building personal projects.",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-green-500",
    },
    {
      year: "2020",
      title: "High School Graduation",
      description:
        "Graduated from Jakande Comprehensive Senior College with a focus on science and technology subjects.",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "bg-yellow-500",
    },
  ]

  const interests = [
    {
      title: "Mobile App Development",
      description: "Exploring new frameworks and techniques for building efficient mobile applications.",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces for better user experiences.",
      icon: <Layout className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Open Source Contribution",
      description: "Contributing to open source projects to improve my skills and give back to the community.",
      icon: <Code className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Continuous Learning",
      description: "Always seeking to expand my knowledge in software development and related technologies.",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const handleDownload = () => {
    const fileUrl = '/Ajasa-Taiwo-CV.pdf';
    const fileName = 'Ajasa-Taiwo-Resume.pdf';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Button variant="ghost" asChild className="mb-6">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>

              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Get to know more about my background, skills, and journey as a Flutter developer.
              </p>
            </div>

            {/* Bio Section */}
            <motion.section
              ref={bioRef}
              variants={containerVariants}
              initial="hidden"
              animate={bioInView ? "visible" : "hidden"}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div variants={itemVariants} className="relative">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
                  <div className="relative overflow-hidden rounded-lg border border-white/10">
                    <img
                      src="/taiwo_image.jpg?height=600&width=500"
                      alt="Ajasa Taiwo"
                      className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        AJASA TAIWO
                      </span>
                    </h2>
                    <p className="text-xl text-blue-400 font-medium">Flutter Developer</p>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        I am a passionate Flutter developer with a strong focus on building high-performance,
                        cross-platform mobile applications. My journey in software development began during my
                        university studies, where I discovered my love for creating intuitive and engaging user
                        experiences.
                      </p>
                      <p className="text-muted-foreground">
                        With expertise in clean architecture, state management, and API integration, I strive to deliver
                        mobile solutions that not only meet but exceed client expectations. I am constantly learning and
                        exploring new technologies to enhance my skills and stay at the forefront of mobile development.
                      </p>
                      <p className="text-muted-foreground">
                        Currently pursuing my B.Sc. in Computer Science and Education at Lagos State University, I
                        balance my academic pursuits with practical development work, applying theoretical knowledge to
                        real-world projects.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Button onClick={handleDownload} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>

            {/* Timeline Section */}
            <motion.section
              ref={timelineRef}
              variants={containerVariants}
              initial="hidden"
              animate={timelineInView ? "visible" : "hidden"}
              className="mb-20"
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    My Journey
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
              </motion.div>

              <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-6 space-y-12">
                {timeline.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative">
                    <div
                      className={`absolute -left-[30px] top-0 h-6 w-6 rounded-full ${item.color} border-4 border-background flex items-center justify-center`}
                    >
                      {item.icon}
                    </div>
                    <div className="rounded-lg border border-white/10 bg-black/5 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                      <span className="text-sm font-medium text-blue-400">{item.year}</span>
                      <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              ref={skillsRef}
              variants={containerVariants}
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
              className="mb-20"
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Technical Skills
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
            </motion.section>

            {/* Interests Section */}
            <motion.section
              ref={interestsRef}
              variants={containerVariants}
              initial="hidden"
              animate={interestsInView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Interests & Passions
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative overflow-hidden rounded-lg border border-white/10 bg-black/5 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-md bg-gradient-to-r ${interest.color} text-white`}>
                        {interest.icon}
                      </div>
                      <h3 className="text-lg font-semibold">{interest.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
