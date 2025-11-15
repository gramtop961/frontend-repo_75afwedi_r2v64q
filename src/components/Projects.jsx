import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'A playful, modern portfolio with WebGL and Spline.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'E-commerce Storefront',
    description: 'High-performance storefront with clean UI and animations.',
    tags: ['React', 'Tailwind', 'Stripe'],
    link: '#',
  },
  {
    title: 'Design System',
    description: 'Reusable components and tokens for design at scale.',
    tags: ['Storybook', 'Radix UI', 'TypeScript'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, idx) => (
        <motion.a
          key={p.title}
          href={p.link}
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="group relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-gray-700 transition-colors"/>
          </div>
          <p className="mt-2 text-gray-600">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
            ))}
          </div>
        </motion.a>
      ))}
    </div>
  )
}
