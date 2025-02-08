import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import CustomCursor from "../components/CustomCursor"

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <CustomCursor />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

