"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Github, Twitter, Instagram, Facebook, Linkedin, Mail, Globe, GitlabIcon, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import MatrixRainBackground from "@/components/matrix-rain"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const socialLinks = [
    { icon: <Twitter size={20} />, label: "Twitter", href: "https://twitter.com", delay: 0.1 },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com", delay: 0.2 },
    { icon: <Facebook size={20} />, label: "Facebook", href: "https://facebook.com", delay: 0.3 },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com", delay: 0.4 },
    { icon: <Github size={20} />, label: "GitHub", href: "https://github.com", delay: 0.5 },
    { icon: <GitlabIcon size={20} />, label: "GitLab", href: "https://gitlab.com", delay: 0.6 },
    { icon: <Globe size={20} />, label: "eduedu.dev", href: "https://eduedu.dev", delay: 0.7 },
    { icon: <Mail size={20} />, label: "hi@eduedu.dev", href: "mailto:hi@eduedu.dev", delay: 0.8 },
  ]

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRainBackground />

      {/* Glowing Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-green-500/10 blur-3xl animate-pulse" />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center gap-8 px-4 py-12">
        {/* Profile Header with Animation */}
        <motion.div
          ref={profileRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-green-500 p-1"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent z-10" />
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Eduardo Guastay"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 border-2 border-green-500/50 rounded-full animate-ping" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-3xl font-bold text-white mb-2 tracking-tight"
            >
              Hello, I am Eduardo Guastay
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl font-medium text-green-500 mb-2"
            >
              Software Engineer
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-sm max-w-xs mx-auto"
            >
              Philanthropist, Playboy, software developer and software engineer.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Links with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-full flex flex-col gap-3"
        >
          {socialLinks.map((link, index) => (
            <LinkButton key={index} href={link.href} icon={link.icon} label={link.label} delay={link.delay} />
          ))}
        </motion.div>

        {/* Footer with Animation */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-green-500/60 text-xs flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />© {new Date().getFullYear()}{" "}
          Eduardo Guastay
        </motion.footer>
      </div>
    </main>
  )
}

interface LinkButtonProps {
  href: string
  icon: React.ReactNode
  label: string
  delay: number
}

function LinkButton({ href, icon, label, delay }: LinkButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: delay + 1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <Button
        asChild
        variant="outline"
        className="w-full bg-black/80 backdrop-blur-sm border-green-500/50 text-white hover:bg-green-500/20 hover:border-green-500 hover:text-green-400 transition-all duration-300 py-6 group relative overflow-hidden"
      >
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 z-10">
          <motion.span
            className="text-green-500 group-hover:text-green-400"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.span>
          <span className="flex-1">{label}</span>
          <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Animated background effect */}
          <div className="absolute inset-0 w-full h-full bg-green-500/0 group-hover:bg-green-500/10 transition-all duration-300" />
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/0 via-green-500/30 to-green-500/0 opacity-0 group-hover:opacity-100 blur-sm group-hover:animate-gradient-x transition-opacity" />
        </a>
      </Button>
    </motion.div>
  )
}
