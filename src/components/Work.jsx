import { motion } from 'framer-motion'

const cases = [
  { title: 'Nova Capital', tag: 'Fintech', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop', color: '#38bdf8' },
  { title: 'Axiom Labs', tag: 'AI & R&D', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop', color: '#a78bfa' },
  { title: 'Orbital Air', tag: 'Aerospace', img: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1600&auto=format&fit=crop', color: '#22d3ee' },
  { title: 'Zephyr', tag: 'E‑commerce', img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop', color: '#60a5fa' },
]

export default function Work() {
  return (
    <section id="work" className="relative bg-black text-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">Selected work</h2>
          <p className="text-white/60 max-w-md hidden md:block">A few snapshots from recent engagements. Each built to perform, persuade and scale globally.</p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c, i) => (
            <motion.a key={i} href="#" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-widest text-white/70">{c.tag}</div>
                  <div className="text-lg font-semibold">{c.title}</div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
