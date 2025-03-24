import "./globals.css"; 
import { Inter } from "next/font/google"; 
import type React from "react"; 
import type { Metadata } from "next"; 
import MouseMoveEffect from "@/components/mouse-move-effect"; 

const inter = Inter({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "Ajasa Taiwo - Portfolio",
  description: "Full-stack developer and designer specializing in modern web applications. Explore my projects in React, Next.js, and UX-focused solutions.",
  // openGraph: {
  //   images: '/taiwo_image.jpg', // Add a custom OpenGraph image
  // },
  icons: {
    icon: "/developer_svg.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}

