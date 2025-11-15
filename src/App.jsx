import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function Footer(){
  return (
    <footer className="mt-24 py-10 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="text-sm text-gray-500">Built with love • Smooth animations • Modern UI</div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]">
      <Navbar />
      <main>
        <Hero />
        <Section id="about" eyebrow="About" title="A little about me" desc="I craft engaging, accessible interfaces and end-to-end web apps with thoughtful details and motion.">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-gray-600 leading-relaxed">With years of experience across startups and agencies, I transform ideas into elegant digital products. I love shipping fast, iterating with users, and sweating the small details that make experiences feel alive.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-blue-50 to-fuchsia-50 p-6 shadow-sm">
              <ul className="text-gray-700 space-y-2">
                <li>• Remote-friendly and async-first</li>
                <li>• Strong collaboration with design and product</li>
                <li>• Pragmatic engineering with a UX mindset</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="Work" title="Selected Projects" desc="Highlights from recent builds with emphasis on polish and performance.">
          <Projects />
        </Section>

        <Section id="skills" eyebrow="Skills" title="What I work with">
          <Skills />
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something" desc="Tell me about your project and I’ll get back soon.">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default App
