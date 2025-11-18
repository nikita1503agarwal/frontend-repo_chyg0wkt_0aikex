export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white/60 text-sm">© {new Date().getFullYear()} LAKO. All rights reserved.</div>
        <div className="flex items-center gap-5 text-white/70 text-sm">
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Dribbble</a>
          <a href="#top" className="px-3 py-1 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
