import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function getServiceData() {
  return await client.fetch(`*[_type == "servicePage"][0]`);
}

export default async function ServicePage() {
  const data = await getServiceData();

  return (
    <main className="bg-[#FDFDFB] pt-32 pb-20">
      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center px-6 mb-24">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#C4A47C] block mb-4">Excellence in Care</span>
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-8 leading-tight">
          {data?.heroTitle}
        </h1>
        <p className="text-gray-500 font-light leading-relaxed max-w-2xl mx-auto italic">
          {data?.heroSubtitle}
        </p>
      </section>

      {/* SERVICE GRID */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
        {data?.services?.map((item: any, idx: number) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative aspect-4/5 overflow-hidden mb-8 rounded-sm shadow-sm">
              {item.image && (
                <Image 
                  src={urlFor(item.image).url()} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              )}
            </div>
            <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">{item.description}</p>
            <Link href="#" className="text-[10px] uppercase tracking-widest border-b border-gray-200 pb-1 hover:border-black transition-all">
              Explore Details →
            </Link>
          </div>
        ))}
      </section>

      {/* SIGNATURE PROCESS SECTION */}
      <section className="bg-white py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-16 text-center">{data?.processTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {data?.steps?.map((step: any, idx: number) => (
              <div key={idx} className="relative">
                <span className="text-5xl font-serif text-gray-100 block mb-6">{step.number}</span>
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-4">{step.title}</h4>
                <p className="text-gray-400 text-xs leading-loose font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY QUOTE */}
      <section className="py-40 text-center px-6">
        <blockquote className="max-w-3xl mx-auto text-2xl md:text-3xl font-serif italic text-gray-700 leading-relaxed mb-12">
          &ldquo;{data?.quote}&rdquo;
        </blockquote>
        <div className="w-12 h-px bg-[#C4A47C] mx-auto mb-8" />
        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400">{data?.quoteAuthor}</p>
      </section>
    </main>
  );
}