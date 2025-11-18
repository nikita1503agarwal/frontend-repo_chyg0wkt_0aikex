import { motion } from 'framer-motion'
import { Cpu, Rocket, Globe, LayoutGrid } from 'lucide-react'

const items = [
  {
    icon: Rocket,
    title: 'Experience Websites',
    desc: 'Flagship brand websites engineered for radical speed, SEO and conversions with cinematic motion.',
  },
  {
    icon: Cpu,
    title: 'Design Systems',
    desc: 'Premium UI kits and tokens at enterprise scale, built for consistency across products and markets.',
  },
  {
    icon: Globe,
    title: 'Globalization',
    desc: 'Multi-language, multi-region architecture with edge delivery for a truly global footprint.',
  },
  {
    icon: LayoutGrid,
    title: 'Interactive 3D & Motion',
    desc: 'Spline, WebGL and film-grade motion to communicate your value with clarity and emotion.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">What we do</h2>
          <p className="text-white/60 max-w-md hidden md:block">Modular services engineered for premium outcomes. Every engagement is measured, optimized and delivered with precision.</p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-7 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-sky-500/10 to-transparent" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 grid place-items-center mb-5 shadow-inner">
                  <it.icon className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
