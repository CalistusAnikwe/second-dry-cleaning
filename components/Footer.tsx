import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="pt-24 pb-10 px-6 md:px-12 bg-[#F9F9F7] border-t border-gray-100">
      <div className="max-w-1400px mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* COLUMN 1: BRAND */}
        <div className="space-y-6">
          <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-900">Couture Care</h5>
          <p className="text-[11px] text-gray-400 leading-relaxed max-w-240px">
            Meticulous garment care for the discerning collector. Serving London, Paris, and New York.
          </p>
        </div>

        {/* COLUMN 2: SOLUTIONS (Updated) */}
        <div className="space-y-6">
          <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-900">Solutions</h5>
          <div className="flex flex-col gap-4 text-[10px] text-gray-400 uppercase tracking-widest">
            <Link href="/service" className="hover:text-black transition-colors">Service Page</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact Page</Link>
          </div>
        </div>

        {/* COLUMN 3: INSIGHTS (Updated) */}
        <div className="space-y-6">
          <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-900">Insights</h5>
          <div className="flex flex-col gap-4 text-[10px] text-gray-400 uppercase tracking-widest">
            <Link href="/book-now" className="hover:text-black transition-colors">Book Now</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <Link href="/booking" className="hover:text-black transition-colors font-medium text-gray-500">Schedule Pickup</Link>
          </div>
        </div>

        {/* COLUMN 4: THE CIRCLE (Newsletter) */}
        <div className="space-y-6">
          <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-900">The Circle</h5>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
            Exclusive insights and seasonal collection guidance.
          </p>
          <div className="relative border-b border-gray-300 py-2">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="bg-transparent text-[10px] outline-none w-full placeholder:text-gray-300 tracking-widest"
            />
            <button className="absolute right-0 bottom-2 text-gray-400 hover:text-black transition-colors">
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}
      <div className="max-w-1400px mx-auto pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-gray-300 uppercase tracking-widest font-medium">
        <p>© 2026 COUTURE CARE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-gray-600">Privacy</Link>
          <Link href="#" className="hover:text-gray-600">Terms</Link>
          <Link href="#" className="hover:text-gray-600">Credits</Link>
        </div>
      </div>
    </footer>
  )
}