"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  ChevronUp,
  Monitor,
  GraduationCap,
  Calendar,
  Building,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useSpring, type Variants } from "framer-motion"
import path from "path"

// CK Logo Component
const CKLogo = () => (
  <motion.div
    className="relative w-12 h-12 flex items-center justify-center"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl shadow-lg"
      animate={{
        background: [
          "linear-gradient(45deg, #3b82f6, #8b5cf6, #6366f1)",
          "linear-gradient(45deg, #8b5cf6, #6366f1, #3b82f6)",
          "linear-gradient(45deg, #6366f1, #3b82f6, #8b5cf6)",
        ],
      }}
      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    />
    <motion.div
      className="relative z-10 text-white font-bold text-lg tracking-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      CK
    </motion.div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    />
  </motion.div>
)

// Interactive Sky Icon Component
const InteractiveSkyIcon = ({ darkMode }: { darkMode: boolean }) => {
  const [rotation, setRotation] = useState(0)
  const [icon, setIcon] = useState(darkMode ? "moon" : "sun")

  useEffect(() => {
    if (darkMode) {
      setIcon("moon")
      setRotation((prev) => prev + 360) // Moon rotates counter-clockwise
    } else {
      setIcon("sun")
      setRotation((prev) => prev - 360) // Sun rotates clockwise
    }
  }, [darkMode])

  const iconSrc =
    icon === "moon"
      ? "/Moon.png" // Your moon image
      : "/Sun.png" // Sun image

  return (
    <div className="absolute top-[-360px] left-1/2 transform -translate-x-1/2 z-[-10] w-[500px] h-[500px] overflow-hidden pointer-events-none">
      <motion.div
        animate={{ rotate: rotation }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="w-full h-full"
        style={{ transformOrigin: "center center" }}
      >
        <Image
          src={iconSrc}
          alt="Sky Icon"
          width={250}
          height={250}
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  )
}

// Typing Animation Component
const TypingAnimation = () => {
  const roles = ["UI/UX Designer", "Software Developer", "Creative Thinker", "AI & ML Enthusiast"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentRoleIndex, roles])

  return (
    <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
      <span className="text-blue-600 dark:text-blue-400 font-semibold ml-2 min-w-0">
        {displayText}
        <motion.span
          className="inline-block w-0.5 h-8 bg-blue-600 dark:bg-blue-400 ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />
      </span>
    </div>
  )
}

// Technology Logo Components
const TechLogos = {
  Figma: ({ href }: { href?: string }) => {
    const FigmaLogo = (
      <motion.svg
        viewBox="0 0 256 384"
        className="w-12 h-12"
        whileHover={{ scale: 1.2, rotateY: 180 }}
        transition={{ type: "spring", stiffness: 300 }}
        xmlns="http://www.w3.org/2000/svg"
      >
    <circle cx="96" cy="64" r="64" fill="#0ACF83" />
    <circle cx="96" cy="192" r="64" fill="#A259FF" />
    <circle cx="96" cy="320" r="64" fill="#F24E1E" />
    <circle cx="192" cy="64" r="64" fill="#1ABCFE" />
    <circle cx="192" cy="192" r="64" fill="#FF7262" />
  </motion.svg>
    )

    return href ? (
      <Link href={href} target="_blank">
        {FigmaLogo}
      </Link>
    ) : (
      FigmaLogo
    )
  },

  Python: ({ href }: { href?: string }) => {
    const PythonLogo = (
      <motion.svg
        viewBox="0 0 256 255"
        className="w-12 h-12"
        whileHover={{ scale: 1.2, rotateY: 180 }}
        transition={{ type: "spring", stiffness: 300 }}
        xmlns="http://www.w3.org/2000/svg"
      >
    <path
      d="M126.9 0c-12.2.1-23.8 1.1-34 3-30.1 5.7-35.5 17.7-35.5 39.9v29.3h71.1v9.8H39.3c-22.6 0-42.3 13.5-48.3 39.2-7.1 31.5-7.4 50.9 0 83.5 5.5 24.5 18.7 39.2 41.3 39.2h27.6v-36.6c0-26.4 22.8-49.6 49.6-49.6h70.9c22.1 0 39.9-18.1 39.9-39.9V43c0-21.1-17.2-36.1-39.9-39.9C162.6 1.1 139.1-.1 126.9 0zM93.8 20.8c5.5 0 9.9 4.5 9.9 9.9s-4.4 9.9-9.9 9.9-9.9-4.5-9.9-9.9 4.4-9.9 9.9-9.9z"
      fill="#366A96"
    />
    <path
      d="M254.8 93.9c-5.5-24.5-18.7-39.2-41.3-39.2h-27.6v36.6c0 26.4-22.8 49.6-49.6 49.6H65.4c-22.1 0-39.9 18.1-39.9 39.9v75.1c0 21.1 17.2 36.1 39.9 39.9 24.6 3.9 48.2 4.9 70.3 0 30.1-6.3 35.5-17.7 35.5-39.9v-29.3H139v-9.8h88.9c22.6 0 31.1-13.5 36.9-39.2 5.6-25.2 5.4-50.9 0-83.1zM161.9 221.2c5.5 0 9.9 4.5 9.9 9.9s-4.4 9.9-9.9 9.9-9.9-4.5-9.9-9.9 4.4-9.9 9.9-9.9z"
      fill="#FFD43B"
    />
  </motion.svg>
    )

    return href ? (
      <Link href={href} target="_blank">
        {PythonLogo}
      </Link>
    ) : (
      PythonLogo
    )
  },

  SQL: ({ href }: { href?: string }) => {
    const logo = (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12"
        whileHover={{ scale: 1.2, rotateY: 180 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          fill="#336791"
        />
        <rect x="4" y="10" width="16" height="4" fill="#336791" opacity="0.7" />
        <rect x="6" y="8" width="12" height="2" fill="#336791" opacity="0.5" />
        <rect x="6" y="14" width="12" height="2" fill="#336791" opacity="0.5" />
      </motion.svg>
    )

    return href ? (
      <Link href={href} target="_blank">
        {logo}
      </Link>
    ) : (
      logo
    )
  },

  Java: ({ href }: { href?: string }) => {
    const logo = (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12"
        whileHover={{ scale: 1.2, rotate: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <path
          d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-1.788 1.393-2.25.934-5.030.825-7.963.825-2.729 0-5.058-.825-5.058-.825s.702.633 3.693.805"
          fill="#ED8B00"
        />
      </motion.svg>
    )

    return href ? (
      <Link href={href} target="_blank">
        {logo}
      </Link>
    ) : (
      logo
    )
  },

  React: ({ href }: { href?: string }) => {
    const logo = (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12"
        fill="#61DAFB"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        whileHover={{ scale: 1.2 }}
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M12,1C18.5,1 24,6.5 24,12C24,17.5 18.5,23 12,23C5.5,23 0,17.5 0,12C0,6.5 5.5,1 12,1ZM12,3C7.6,3 4,6.6 4,11C4,15.4 7.6,19 12,19C16.4,19 20,15.4 20,11C20,6.6 16.4,3 12,3Z" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1"
          transform="rotate(120 12 12)"
        />
      </motion.svg>
    )

    return href ? (
      <Link href={href} target="_blank">
        {logo}
      </Link>
    ) : (
      logo
    )
  },

  HTML: ({ href }: { href?: string }) => {
    const logo = (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12"
        whileHover={{ scale: 1.2, rotateX: 15 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
          fill="#E34F26"
        />
      </motion.svg>
    )

    return href ? (
      <Link href={href} target="_blank">
        {logo}
      </Link>
    ) : (
      logo
    )
  },

  CSS: ({ href }: { href?: string }) => {
    const logo = (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12"
        whileHover={{ scale: 1.2, rotateY: 180 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
          fill="#1572B6"
        />
      </motion.svg>
    )

    return href ? (
      <Link href={href} target="_blank">
        {logo}
      </Link>
    ) : (
      logo
    )
  },

  JavaScript: ({ href }: { href?: string }) => {
    const JsLogo = (
      <motion.svg
      viewBox="0 0 128 128"
      className="w-12 h-12"
      whileHover={{ scale: 1.2, rotateY: 180 }}
      transition={{ type: "spring", stiffness: 300 }}
      xmlns="http://www.w3.org/2000/svg"
  >
      {/* Yellow background */}
      <rect width="128" height="128" fill="#F7DF1E" />

      {/* Black JS text path */}
      <path
      d="M89.6 106.1c2.8 4.6 6.5 7.9 13 7.9 5.5 0 9-2.7 9-6.4 0-4.5-3.6-6.1-9.6-8.7l-3.3-1.4c-9.6-4.1-16-9.3-16-20.2 
         0-10 7.6-17.6 19.4-17.6 8.4 0 14.4 2.9 18.7 10.6l-10.2 6.6c-2.2-4-4.6-5.6-8.5-5.6s-6.3 2.5-6.3 5.6c0 3.9 2.5 5.5 
         8.2 7.9l3.3 1.4c11.3 4.8 17.7 9.8 17.7 21.1 0 12.1-9.5 18.7-22.2 18.7-12.5 0-20.6-6-24.6-13.8l10.7-6.2zm-46.5 
         1.2c2.1 3.7 4 6.8 8.5 6.8 4.3 0 7-1.7 7-8.3V57.2h13.1v48.8c0 13.6-8 19.8-19.7 19.8-10.6 0-16.8-5.5-20-12.2l11.1-6.3z"
      fill="#000"
        />
      </motion.svg>
    )

    return href ? (
      <Link href={href} target="_blank">
        {JsLogo}
      </Link>
    ) : (
      JsLogo
    )
  },

  TailwindCSS: ({ href }: { href?: string }) => {
    const logo = (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12"
        fill="#06B6D4"
        whileHover={{ scale: 1.2, x: 2 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </motion.svg>
    )

    return href ? (
      <Link href={href} target="_blank">
        {logo}
      </Link>
    ) : (
      logo
    )
  },

  Adobe: ({ href }: { href?: string }) => {
    const logo = (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <path
          d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624z"
          fill="#FF0000"
        />
      </motion.svg>
    )

    return href ? (
      <Link href={href} target="_blank">
        {logo}
      </Link>
    ) : (
      logo
    )
  },
}

// Animation Variants
const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

const cardVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Scroll progress
  const { scrollYProgress } = useScroll()
  const circumference = 2 * Math.PI * 12 // For a radius of 12 (24px diameter)
  const strokeDashoffset = useSpring(scrollYProgress.get() * circumference, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const skills = [
    { name: "Figma", logo: <TechLogos.Figma /> },
    { name: "Python", logo: <TechLogos.Python /> },
    { name: "SQL", logo: <TechLogos.SQL /> },
    { name: "Java", logo: <TechLogos.Java /> },
    { name: "React", logo: <TechLogos.React /> },
    { name: "HTML", logo: <TechLogos.HTML /> },
    { name: "CSS", logo: <TechLogos.CSS /> },
    { name: "JavaScript", logo: <TechLogos.JavaScript /> },
    { name: "Tailwind CSS", logo: <TechLogos.TailwindCSS /> },
    { name: "Adobe", logo: <TechLogos.Adobe /> },
  ]

  const projects = [
    {
      title: "CHATNEXO – Smart Chat Extension",
      description:
        "A Chrome extension for enhancing user communication and productivity. Designed a user-friendly interface for a Chrome web extension, built from scratch to enhance smart interactions.",
      image: "/Pricing.png?height=500&width=500",
      tech: ["Chrome Extension", "Prototyping", "UI Design", "Figma"],
      liveLink: "https://chromewebstore.google.com/detail/chat-nexo-whatsapp-extens/bfcjngbdidefnaifbnbamfapiailjdkj",
    },
    {
      title: "Doctor Appointment Booking - Mobile UI",
      description:
        "A mobile user interface for a healthcare appointment booking system. Focused on creating a seamless user experience for patients to search, schedule, and manage doctor appointments.",
      image: "/HealthHub.jpg?height=300&width=400",
      tech: ["Mobile UI", "Figma", "UX Design", "Healthcare"],
      livelink: "https://www.figma.com/design/GSO1XbaAr9SBpzM4atcZZn/Appointment-booking?node-id=0-1&t=m6wvcn8B1KHW9l10-1",
    },
    {
      title: "Sneakers Store - SneakPeak",
      description:
        "A Sneaker Store for Sneakerheads with various collections of sneakers. SneakPeak brings the heat to your feet. Designed for true enthusiasts who live the culture and love the craft — every pair tells a story.",
      image: "/E-commerce.jpg?height=300&width=400",
      tech: ["E-commerce", "HTML", "CSS", "React", "JavaScript"],
      livelink: "https://sneaker-store-pearl-iota.vercel.app/"
    },
  ]

  const experience = [
    {
      title: "UI/UX Design Intern",
      company: "Stalcon Solutions Pvt Ltd",
      period: "Mar 2024 – Jun 2024",
      description:
        "Worked on the 'CHATNEXO' Chrome Extension. Delivered high-fidelity prototypes and responsive layouts using Figma. Collaborated with developers to ensure implementation accuracy.",
    },
  ]

  const education = [
    {
      degree: "B.Tech – Computer Science & Engineering",
      specialization: "Specialization in Artificial Intelligence and Machine Learning",
      institution: "Malla Reddy University",
      period: "2021-2025",
      icon: <GraduationCap className="w-6 h-6" />,
      type: "degree",
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College, Hyderabad",
      period: "2019–2021",
      icon: <Building className="w-6 h-6" />,
      type: "intermediate",
    },
    {
      degree: "Class X",
      institution: "Triveni Talent School, Hyderabad",
      period: "2018–2019",
      icon: <Monitor className="w-6 h-6" />,
      type: "school",
    },
  ]

  return (
    <motion.div
      className={darkMode ? "dark" : ""}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Circular Scroll Progress Indicator */}
        <motion.div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
          style={{ rotate: scrollYProgress.get() * 360 }} // Rotate based on scroll
        >
          
        </motion.div>

        {/* Navigation */}
        <motion.nav
          className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-200 dark:border-gray-700"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <CKLogo />
              <motion.div
                className="hidden md:flex space-x-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {["about", "skills", "projects", "experience", "education", "contact"].map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="ml-4">
                  <AnimatePresence mode="wait">
                    {darkMode ? (
                      <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotateY: -90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: 90 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <Sun className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: -90 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <Moon className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <motion.div
            className="container mx-auto px-6 text-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8 flex justify-center">
              {" "}
              {/* Added flex justify-center */}
              <InteractiveSkyIcon darkMode={darkMode} />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Hi, I'm Chandrakanth Reddy
            </motion.h1>

            <motion.div variants={itemVariants}>
              <TypingAnimation />
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Crafting beautiful, functional digital experiences that bridge the gap between design and development with
              a passion for AI & ML innovation.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://in.docworkspace.com/d/sIFPrx8q2Auzj4sMG?sa=601.1037" target="_blank">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                About Me
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    I'm a passionate UI/UX Designer and Software Developer with a B.Tech in Computer Science, specializing in AI & ML. 
                    I believe in creating digital experiences that are not only visually appealing but also solve real-world problems through innovative technology.
                  </motion.p>
                  <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    My approach combines user-centered design principles with modern development practices and AI/ML
                    insights to deliver solutions that are beautiful, functional, and intelligent.
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-3 w-full justify-start"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {["UI UX Design", "Software Development", "Web Development", "AI & ML"].map(
                      (skill, index) => (
                        <motion.div
                          key={skill}
                          variants={itemVariants}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          className="min-w-[200px]"
                        >
                          <Badge variant="secondary" className="cursor-pointer w-full text-center">
                            {skill}
                          </Badge>
                        </motion.div>
                      )
                    )}
                  </motion.div>
                  </motion.div>
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                  >
                    <Image
                      src="/profile.jpeg" // 👈 Use your new image path
                      alt="About Chandrakanth"
                      width={400}
                      height={550}
                      className="rounded-lg shadow-lg object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Skills & Technologies
              </motion.h2>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-5 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center space-y-4 group p-6 rounded-xl transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: darkMode ? "rgba(55, 65, 81, 0.5)" : "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <motion.div className="transition-transform duration-300" whileHover={{ scale: 1.2, rotate: 5 }}>
                      {skill.logo}
                    </motion.div>
                    <motion.span
                      className="font-semibold text-center text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Featured Projects
              </motion.h2>
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {projects.map((project, index) => (
                  <motion.div key={index} variants={cardVariants} whileHover="hover">
                    <Card className="group border-0 shadow-lg overflow-hidden h-full">
                      <Link
                        href={project.liveLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="relative overflow-hidden">
                          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                            <Image
                              src={project.image || "/pricing.png"}
                              alt={project.title}
                              width={500}
                              height={500}
                              className="transition-transform duration-300 group-hover:scale-105 w-full h-auto"
                            />
                          </motion.div>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </Link>

                      <CardHeader>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription className="text-sm">{project.description}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <motion.div
                          className="flex flex-wrap gap-2"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {project.tech.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              variants={itemVariants}
                              whileHover={{ scale: 1.1, rotate: 2 }}
                            >
                              <Badge variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Work Experience
              </motion.h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 group"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <motion.div
                      className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <motion.div whileHover={{ x: 10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card className="ml-4">
                        <CardHeader>
                          <CardTitle>{exp.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <span className="font-semibold text-blue-600 dark:text-blue-400">{exp.company}</span>
                            <span>•</span>
                            <span>{exp.period}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Education & Qualifications
              </motion.h2>
              <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute -left-4 top-2 w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {edu.icon}
                    </motion.div>
                    <Card className="ml-4 group-hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                            {edu.specialization && (
                              <motion.p
                                className="text-blue-600 dark:text-blue-400 font-medium mb-2"
                                whileHover={{ scale: 1.02 }}
                              >
                                {edu.specialization}
                              </motion.p>
                            )}
                            <CardDescription className="text-lg font-medium text-gray-700 dark:text-gray-300">
                              {edu.institution}
                            </CardDescription>
                          </div>
                          <motion.div
                            className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900 px-3 py-1 rounded-full"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{edu.period}</span>
                          </motion.div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Get In Touch
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    I'm always interested in new opportunities and exciting projects. Whether you have a question or
                    just want to say hi, feel free to reach out!
                  </p>
                  <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <Mail className="w-5 h-5" />,
                        text: "chandrakanth1820@gmail.com",
                        href: "mailto:chandrakanth1820@gmail.com",
                      },
                      {
                        icon: <Phone className="w-5 h-5" />,
                        text: "+91 8125433172",
                        href: "tel:+918125433172",
                      },
                      {
                        icon: <MapPin className="w-5 h-5" />,
                        text: "Hyderabad, India",
                        href: null,
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 group"
                        variants={itemVariants}
                        whileHover={{ x: 10, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="text-blue-600 dark:text-blue-400"
                          whileHover={{ rotate: 15, scale: 1.2 }}
                        >
                          {item.icon}
                        </motion.div>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-700 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex gap-4 pt-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <Github className="w-5 h-5" />, href: "https://github.com/Chandu-1422" },
                      {
                        icon: <Linkedin className="w-5 h-5" />,
                        href: "https://www.linkedin.com/in/chandrakanth-reddy-mallu-b522a028a",
                      },
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Link
                          href={social.href}
                          target="_blank"
                          className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-xl transition-shadow"
                        >
                          {social.icon}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center justify-center" // Center the globe
                >
                  <motion.div
                    className="w-64 h-64 md:w-80 md:h-80 relative" // Adjust size as needed
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Image
                      src="/globe.png"
                      alt="Globe"
                      fill // ✅ This replaces layout="fill"
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              className="fixed bottom-8 right-8 z-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={scrollToTop}
                className="rounded-full p-3 bg-blue-600 hover:bg-blue-700 shadow-lg"
                size="icon"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ChevronUp className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
