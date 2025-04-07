"use client"

import { useState, useEffect } from "react"
import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import DynamicBackground from "@/components/dynamic-background"
import ContactForm from "@/components/contact-form"

export default function Portfolio() {
  // Update the navigation items to include "about"
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ["home", "about", "education", "skills", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative min-h-screen">
      <DynamicBackground />

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-xl">Alex Johnson</div>
            {/* Update the navigation links in the header */}
            <nav className="hidden md:flex space-x-6">
              {["home", "about", "education", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        {/* Add the About section after the home section and before the education section */}
        <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Hi, I'm Alex Johnson</h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-6">Computer Science Engineering Student</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Passionate about software development, artificial intelligence, and creating innovative solutions to
              real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex mt-8 space-x-4 justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-white hover:bg-white/10"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-white hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-white hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500/30 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-500/20">
                  <img
                    src="/placeholder.svg?height=250&width=250"
                    alt="Alex Johnson"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col justify-center">
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Who I Am</h3>
                  <p className="text-white/80 mb-4">
                    I'm a passionate Computer Science student with a love for creating innovative solutions to complex
                    problems. My journey in tech began when I was 12 years old, tinkering with HTML and CSS to build my
                    first website.
                  </p>
                  <p className="text-white/80 mb-4">
                    Today, I specialize in full-stack development, machine learning, and data visualization. I believe
                    in writing clean, efficient code and creating intuitive user experiences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Interests</h4>
                      <ul className="text-white/70 space-y-1">
                        <li>• Artificial Intelligence</li>
                        <li>• Web Development</li>
                        <li>• Open Source</li>
                        <li>• Competitive Programming</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Hobbies</h4>
                      <ul className="text-white/70 space-y-1">
                        <li>• Playing Chess</li>
                        <li>• Hiking</li>
                        <li>• Reading Sci-Fi</li>
                        <li>• Photography</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="education" className="py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex flex-col justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">Bachelor of Science in Computer Engineering</h3>
                  <span className="text-white/70 mt-1">2020 - 2024</span>
                </div>
                <h4 className="text-white/80 mb-4">Stanford University</h4>
                <p className="text-white/70">
                  Focused on software engineering, artificial intelligence, and data structures. Maintained a 3.8 GPA
                  while participating in various hackathons and research projects.
                </p>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-white/80 text-sm mr-2">GPA: 3.8/4.0</span>
                  <Progress value={95} className="h-2 bg-white/10 w-32" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex flex-col justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">High School Diploma</h3>
                  <span className="text-white/70 mt-1">2016 - 2020</span>
                </div>
                <h4 className="text-white/80 mb-4">Lincoln High School</h4>
                <p className="text-white/70">
                  Graduated with honors. Participated in the robotics club and won the state science fair with a machine
                  learning project.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Programming Languages</h3>
              <div className="space-y-4">
                {[
                  { name: "JavaScript/TypeScript", value: 90 },
                  { name: "Python", value: 85 },
                  { name: "Java", value: 75 },
                  { name: "C/C++", value: 70 },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-white/70">{skill.value}%</span>
                    </div>
                    <Progress value={skill.value} className="h-2 bg-white/10" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Technologies & Frameworks</h3>
              <div className="space-y-4">
                {[
                  { name: "React/Next.js", value: 92 },
                  { name: "Node.js", value: 88 },
                  { name: "Machine Learning", value: 75 },
                  { name: "Database Design", value: 80 },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-white/70">{skill.value}%</span>
                    </div>
                    <Progress value={skill.value} className="h-2 bg-white/10" />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "AI Image Generator",
                    description: "Created a web application that generates images using AI models.",
                    link: "#",
                  },
                  {
                    title: "Smart Home Dashboard",
                    description: "Developed a dashboard to control and monitor smart home devices.",
                    link: "#",
                  },
                  {
                    title: "Data Visualization Tool",
                    description: "Built a tool to visualize complex datasets using D3.js.",
                    link: "#",
                  },
                  {
                    title: "Mobile Fitness App",
                    description: "Designed and developed a fitness tracking application for Android.",
                    link: "#",
                  },
                ].map((project, index) => (
                  <Card key={index} className="bg-black/40 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <h4 className="text-white font-bold mb-2">{project.title}</h4>
                      <p className="text-white/70 text-sm mb-3">{project.description}</p>
                      <Button variant="link" className="p-0 h-auto text-purple-400 hover:text-purple-300" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 flex justify-center">
          <div className="max-w-2xl w-full">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Contact Me</h2>
            <ContactForm formspreeUrl="https://formspree.io/f/mldjonlv" />
          </div>
        </section>
      </main>

      <footer className="bg-black/30 backdrop-blur-md py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 mb-4 md:mb-0">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white/70 hover:text-white hover:bg-white/10"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white/70 hover:text-white hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white/70 hover:text-white hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

