import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await new Promise(r => setTimeout(r, 900))
      setStatus('success')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-black text-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-4">Let’s build something exceptional</h2>
            <p className="text-white/70 mb-8 max-w-xl">Tell us about your goals and constraints. We’ll respond within 24 hours with a precise plan and timeline.</p>

            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition-colors">
              <Phone className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input required name="name" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-sky-500/40 text-white" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-sky-500/40 text-white" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Company</label>
                <input name="company" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-sky-500/40 text-white" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Project Brief</label>
                <textarea required name="brief" rows="4" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-sky-500/40 text-white"></textarea>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <button disabled={status==='loading'} className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-sky-400 transition-colors shadow-[0_10px_40px_rgba(56,189,248,0.35)]">
                <Send className="w-4 h-4" /> {status==='loading' ? 'Sending…' : 'Request Proposal'}
              </button>
              {status==='success' && <span className="text-emerald-400 text-sm">Message sent! We’ll be in touch.</span>}
              {status==='error' && <span className="text-rose-400 text-sm">Something went wrong. Try again.</span>}
            </div>
          </motion.form>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="fixed bottom-6 left-6 z-20 w-12 h-12 rounded-full bg-emerald-500 grid place-items-center shadow-[0_10px_40px_rgba(16,185,129,0.45)]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-black"><path d="M380.9 97.1C339 55.1 283.2 32 224.8 32 106.1 32 10.7 127.5 10.7 246.2c0 37.8 9.9 74.7 28.8 107.3L0 480l129.6-37.8c31.6 17.2 67.3 26.3 103.8 26.3h.1c118.6 0 214-95.5 214-214.2 0-57.4-22.4-111.4-66.6-153.2zM224 438.6c-31.2 0-61.8-8.4-88.4-24.2l-6.3-3.7-76.8 22.4 22.6-74.9-4-7.7c-18.1-28.9-27.6-62.2-27.6-96.5 0-100 81.4-181.3 181.5-181.3 48.5 0 94 18.9 128.3 53.1 34.3 34.2 53.1 79.7 53.1 128.2 0 100.1-81.4 181.3-181.4 181.3zm101.2-135.8c-5.5-2.8-32.7-16.1-37.8-17.9-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 17.9-17.5 21.6-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.1-8.5-44-27.1-16.2-14.4-27.1-32.3-30.3-37.7-3.2-5.6-.3-8.6 2.4-11.4 2.4-2.4 5.6-6.5 8.4-9.8 2.8-3.2 3.7-5.6 5.6-9.3 1.9-3.7.9-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.3-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2s-9.8 1.4-15 7c-5.1 5.6-19.8 19.4-19.8 47.3s20.3 54.9 23.1 58.7c2.8 3.7 39.8 60.8 96.5 85.3 13.5 5.8 24.1 9.3 32.4 11.9 13.6 4.3 26 3.7 35.8 2.3 10.9-1.6 32.7-13.4 37.3-26.3 4.6-12.8 4.6-23.7 3.2-26.3-1.3-2.4-5-3.9-10.5-6.7z"/></svg>
      </a>
    </section>
  )
}
