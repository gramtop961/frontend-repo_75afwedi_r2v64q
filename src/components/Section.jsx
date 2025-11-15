import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, desc, children }) {
  return (
    <section id={id} className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && <p className="text-xs uppercase tracking-widest text-gray-500">{eyebrow}</p>}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">{title}</span>
            </h2>
          )}
          {desc && <p className="mt-3 text-gray-600 max-w-2xl">{desc}</p>}
          <div className="mt-10">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
