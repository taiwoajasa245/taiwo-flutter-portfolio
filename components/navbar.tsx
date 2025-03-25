// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"
// import { motion } from "framer-motion"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Skills", href: "/#skills" },
//     { name: "Experience", href: "/#experience" },
//     { name: "Projects", href: "/#projects" },
//     { name: "Contact", href: "/#contact" },
//   ]

//   const navVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//   }

//   const mobileMenuVariants = {
//     closed: { opacity: 0, x: "100%" },
//     open: { opacity: 1, x: 0 },
//   }

//   const handleDownload = () => {
//     const fileUrl = '/Ajasa-Taiwo-CV.pdf';
//     const fileName = 'Ajasa-Taiwo-Resume.pdf';
    
//     const link = document.createElement('a');
//     link.href = fileUrl;
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <motion.header
//       initial="hidden"
//       animate="visible"
//       variants={navVariants}
//       className={`sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
//         scrolled ? "bg-background/95" : "bg-transparent"
//       } transition-all duration-300`}
//     >
//       <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
//         <Link href="/" className="flex items-center space-x-2">
//           <motion.span
//             className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             TaiwoDev.
//           </motion.span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link, index) => (
//             <motion.div
//               key={link.name}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <Link href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
//                 {link.name}
//               </Link>
//             </motion.div>
//           ))}
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button  onClick={handleDownload} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">Download Resume</Button>
//           </motion.div>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <motion.div
//         className="md:hidden"
//         initial="closed"
//         animate={isOpen ? "open" : "closed"}
//         variants={mobileMenuVariants}
//         transition={{ duration: 0.3 }}
//       >
//         {isOpen && (
//           <div className="fixed inset-0 top-20 z-50  backdrop-blur-lg">
//             <div className="bg-black ">
//             <nav className="flex flex-col items-center justify-center h-full space-y-8">
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={link.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Link href={link.href} className="text-xl font-medium" onClick={() => setIsOpen(false)}>
//                     {link.name}
//                   </Link>
//                 </motion.div>
//               ))}
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">Resume</Button>
//               </motion.div>
//             </nav>
//             </div>
//           </div>
//         )}
//       </motion.div>
//     </motion.header>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  }

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest('.mobile-menu-container')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        scrolled ? "bg-background/95" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            TaiwoDev.
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={handleDownload} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
              Download Resume
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-container"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden fixed inset-0 z-40"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {isOpen && (
          <div className="absolute inset-0 top-16 bg-background/20 backdrop-blur-xl">
            <nav className="flex flex-col items-center justify-start h-[calc(100vh-4rem)] pt-8 space-y-6 overflow-y-auto bg-background/100 backdrop-blur-2xl">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link 
                    href={link.href} 
                    className="block py-3 text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                whileHover={{scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 pt-4"
              >
                <Button 
                  onClick={handleDownload}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                >
                  Download Resume
                </Button>
              </motion.div>
            </nav>
          </div>
        )}
      </motion.div>
    </motion.header>
  )
}

