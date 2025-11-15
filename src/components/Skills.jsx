import { motion } from 'framer-motion'
import { Code2, Rocket, Cpu, Layout } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: Cpu, title: 'Backend', items: ['FastAPI', 'MongoDB', 'REST'] },
  { icon: Layout, title: 'Design', items: ['Figma', 'Design Systems', 'Accessibility'] },
  { icon: Rocket, title: 'Performance', items: ['Core Web Vitals', 'PWAs', 'Optimizations'] },
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map(({ icon: Icon, title, items }) => (
        <motion.div
          key={title}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-fuchsia-50 border border-black/5">
              <Icon className="h-6 w-6 text-gray-800" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <ul className="mt-4 space-y-1 text-gray-600">
            {items.map(i => <li key={i}>• {i}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
