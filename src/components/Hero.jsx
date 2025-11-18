import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),transparent_30%,rgba(0,0,0,0.8))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-24 flex flex-col items-start justify-end min-h-[100dvh]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-xs text-white/60 mb-6">Premium Design Engineering</p>
          <h1 className="text-5xl sm:text-7xl leading-[1.05] font-semibold tracking-tight">
            We build ultra-modern, high-performance experiences for global brands.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            LAKO merges design, motion and engineering into one seamless practice. Radical speed. Surgical precision. Measurable impact.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="relative group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-sky-500 text-white shadow-[0_20px_60px_rgba(56,189,248,0.35)] hover:bg-sky-400 transition-colors">
              Start Your Project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/15 transition-colors">
              See Our Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating CTAs */}
      <motion.a href="#contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="hidden md:flex fixed bottom-6 right-6 z-20 items-center gap-2 rounded-full bg-sky-500/90 hover:bg-sky-400 text-black px-5 py-3 text-sm font-semibold shadow-[0_10px_40px_rgba(56,189,248,0.45)]">
        Talk to LAKO
      </motion.a>
    </section>
  )
}
