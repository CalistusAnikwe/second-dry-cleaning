import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

async function getContactData() {
  return await client.fetch(`*[_type == "contactPage"][0]`);
}

export default async function ContactPage() {
  const data = await getContactData();

  return (
    <main className="bg-[#F8FAFC] min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-sans font-light text-[#1A1A1A] leading-tight mb-6">
            Personalized Care for <br />
            <span className="text-[#1E4FD9] font-bold">Your Wardrobe.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            {data?.subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: REQUEST FORM */}
          <div className="lg:col-span-7 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1E4FD9]">Full Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full border-b border-gray-200 py-3 outline-none focus:border-[#1E4FD9] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1E4FD9]">Email Address</label>
                  <input type="email" placeholder="email@example.com" className="w-full border-b border-gray-200 py-3 outline-none focus:border-[#1E4FD9] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1E4FD9]">Service Type</label>
                  <select className="w-full border-b border-gray-200 py-3 outline-none bg-transparent">
                    <option>Dry Cleaning & Preservation</option>
                    <option>Bespoke Tailoring</option>
                    <option>Couture Restoration</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1E4FD9]">Preferred Collection</label>
                  <input type="text" placeholder="City or District" className="w-full border-b border-gray-200 py-3 outline-none focus:border-[#1E4FD9] transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#1E4FD9]">How can our concierge assist you?</label>
                <textarea rows={4} placeholder="Special instructions or service requests..." className="w-full border-b border-gray-200 py-3 outline-none focus:border-[#1E4FD9] transition-colors resize-none" />
              </div>
              <button className="bg-[#1E4FD9] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Send Request <span>→</span>
              </button>
            </form>
          </div>

          {/* RIGHT: INFO SIDEBAR */}
          <div className="lg:col-span-5 space-y-8">
            {/* EXPERT HANDLING CARD */}
            <div className="bg-[#122C2F] rounded-3xl p-8 text-center relative overflow-hidden h-64 flex flex-col justify-end">
                <div className="absolute top-10 left-0 right-0 flex justify-center opacity-20">
                    <span className="text-white text-4xl tracking-[0.5em] font-serif italic">ONCIERGE</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl relative z-10">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#1E4FD9] mb-2">Expert Handling</p>
                    <p className="text-gray-600 italic text-sm">{data?.expertHandlingQuote}</p>
                </div>
            </div>

            {/* ADDRESS & CONTACT */}
            <div className="grid grid-cols-2 gap-8 px-4">
                <div>
                    <h5 className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#1E4FD9] mb-4">Headquarters</h5>
                    <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{data?.headquarters}</p>
                </div>
                <div>
                    <h5 className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#1E4FD9] mb-4">Direct Line</h5>
                    <p className="text-xs text-gray-500 mb-1">{data?.directLine}</p>
                    <p className="text-xs text-gray-400">{data?.emailAddress}</p>
                </div>
            </div>

            {/* MAP VIEW */}
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-200 grayscale shadow-inner">
               {data?.mapImage && (
                 <Image src={urlFor(data.mapImage).url()} alt="Location Map" fill className="object-cover" />
               )}
            </div>

            {/* SUPPORT BANNER */}
            <div className="bg-[#E9EFFD] p-5 rounded-2xl flex items-center justify-between px-8">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1E4FD9] shadow-sm">🕒</div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-900 uppercase tracking-tighter">24/7 Priority Support</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-widest">For Elite Members</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 bg-white rounded-full text-xs shadow-sm">💬</button>
                    <button className="p-2 bg-white rounded-full text-xs shadow-sm">📞</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}