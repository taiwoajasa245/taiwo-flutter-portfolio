import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Grocery List App",
    description:
      "Built a dynamic grocery list app that allows users to create, edit, and categorize grocery lists. The app features a clean and intuitive interface, making it easy for users to manage their shopping needs efficiently.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Flutter", "Dart", "Provider", "SQLite"],
    github: "https://github.com/username/Grocery-Shopping-list-app",
    demo: "#",
    category: "mobile",
    features: [
      "Create and manage multiple shopping lists",
      "Categorize items for better organization",
      "Mark items as purchased",
      "Search functionality for quick access",
      "Offline storage using SQLite",
    ],
  },
  {
    title: "Calculator App",
    description:
      "Developed a fully functional calculator app with standard arithmetic operations and a responsive UI. The calculator supports both basic and scientific calculations with a modern, user-friendly design.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Flutter", "Dart", "Provider"],
    github: "https://github.com/username/Flutter_Calculator_App",
    demo: "#",
    category: "mobile",
    features: [
      "Basic arithmetic operations",
      "Scientific calculations",
      "History of calculations",
      "Responsive design for all screen sizes",
      "Dark and light theme support",
    ],
  },
  {
    title: "Chess Timer App",
    description:
      "Developed a chess timer with customizable time controls and an intuitive UI. This app helps chess players manage their game time with precision and offers various timing modes for different types of chess games.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Flutter", "Dart", "Bloc"],
    github: "https://github.com/username/Chess_Timer_App",
    demo: "#",
    category: "mobile",
    features: [
      "Multiple time control options",
      "Fischer increment support",
      "Bronstein delay mode",
      "Sound notifications",
      "Vibration feedback",
      "Customizable themes",
    ],
  },
]

export default function ProjectsPage() {
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
            <div className="mb-8">
              <Button variant="ghost" asChild className="mb-6">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>

              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  My Projects
                </span>
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Explore my portfolio of Flutter applications. Each project demonstrates different aspects of my skills
                in mobile app development, from UI/UX design to state management and API integration.
              </p>
            </div>

            <div className="space-y-16">
              {projects.map((project, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`order-2 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">{project.title}</h2>
                      <p className="text-muted-foreground">{project.description}</p>

                      <div className="flex flex-wrap gap-2 my-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">Key Features:</h3>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4 mt-6">
                        <Button variant="outline" asChild>
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> View Code
                          </Link>
                        </Button>
                        <Button className="bg-gradient-to-r from-blue-500 to-purple-500" asChild>
                          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className={`order-1 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-lg transition-all duration-300 hover:shadow-blue-500/20">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

