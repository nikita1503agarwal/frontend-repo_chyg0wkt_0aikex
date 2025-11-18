import { motion } from 'framer-motion'

const milestones = [
  { year: '2019', text: 'LAKO is founded to merge design, motion and engineering.' },
  { year: '2021', text: 'Expanded globally with distributed teams across 6 time zones.' },
  { year: '2023', text: 'Crossed 100+ launches with 98% client retention.' },
  { year: '2025', text: 'New initiative: AI-native brand platforms at the edge.' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-6">Beyond studio. A precision partner.</h2>
            <p className="text-white/70 leading-relaxed mb-6">We craft premium, global digital experiences with a relentless focus on speed, clarity and measurable outcomes. From strategy to ship, our teams operate as an extension of yours—fast, focused and fanatically detailed.</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-white/80 text-sm">
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Edge‑first performance</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Motion that drives intent</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Design systems at scale</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Globalization baked‑in</li>
            </ul>
          </div>
          <div className="lg:pl-12">
            <h3 className="text-xl font-semibold mb-4">Timeline</h3>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/40 via-white/10 to-transparent" />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.15)]" />
                    <div className="text-sm text-white/60">{m.year}</div>
                    <div className="font-medium">{m.text}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
