// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }















import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const content = await client.fetch(`*[_type == "homepage"][0]`);
  const services = await client.fetch(`*[_type == "service"] | order(order asc)`);
  return { content, services };
}

export default async function HomePage() {
  const { content, services } = await getData();

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1A1A1A] font-sans">
      {/* 1. NAVIGATION BAR */}
      {/* <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-[#F9F9F7]/80 backdrop-blur-sm border-b border-gray-100">
        <div className="text-xl tracking-[0.3em] font-light">COUTURE CARE</div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest text-gray-400">
          <Link href="#">Services</Link>
          <Link href="#">Heritage</Link>
          <Link href="#">Concierge</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-[10px] uppercase tracking-widest">Contact</Link>
          <button className="border border-black px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors font-medium">
            Schedule Pick-up
          </button>
        </div>
      </nav> */}

      {/* 2. HERO SECTION - With Background Image Housing */}
      <section className="relative pt-48 pb-32 text-center px-4 overflow-hidden min-h-[80vh] flex flex-col justify-center">
        {content?.heroBackgroundImage && (
          <div className="absolute inset-0 -z-10 opacity-10">
            <Image 
              src={urlFor(content.heroBackgroundImage).url()} 
              alt="Background" 
              fill 
              className="object-cover" 
            />
          </div>
        )}
        <div className="relative z-10">
          <h1 className="text-6xl md:text-[90px] font-serif mb-6 leading-[1.1] text-gray-800">
            {content?.mainTitle} <br />
            <span className="italic text-[#C4A47C]">{content?.highlightText}</span>
          </h1>
          <p className="max-w-xl mx-auto text-xs uppercase tracking-[0.3em] text-gray-400 leading-relaxed font-light">
            {content?.heroDescription}
          </p>
          <div className="mt-12 flex justify-center">
            <div className="w-px h-16 bg-gray-200" />
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID - High Contrast Image Housing */}
      <section className="max-w-1400px mx-auto px-10 grid grid-cols-1 md:grid-cols-12 gap-5 mb-24">
        {services?.map((service: any, i: number) => (
          <div key={service._id} className={`relative overflow-hidden aspect-4/5 group cursor-pointer ${i === 0 ? "md:col-span-8" : i === 1 ? "md:col-span-4" : "md:col-span-6"}`}>
            {service.image && (
              <Image 
                src={urlFor(service.image).url()} 
                alt={service.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            )}
            {/* Visual Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
            <div className="absolute bottom-10 left-10 text-white z-10">
              <p className="text-[9px] uppercase tracking-[0.3em] opacity-80 mb-2 font-medium">{service.category}</p>
              <h3 className="text-3xl font-serif tracking-wide">{service.title}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* 4. HERITAGE SECTION - Side-by-Side Housing */}
      <section className="py-40 px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center border-t border-gray-50">
        <div className="order-2 md:order-1">
          <p className="text-[10px] uppercase tracking-widest text-[#C4A47C] mb-6 font-semibold">EST. 1982</p>
          <h2 className="text-5xl font-serif mb-8 leading-tight">{content?.heritageTitle}</h2>
          <p className="text-gray-500 text-sm leading-loose mb-12 font-light">{content?.heritageDescription}</p>
          <div className="grid grid-cols-2 gap-10 border-t border-gray-100 pt-10">
            <div>
              <h4 className="text-sm font-serif mb-2">{content?.featureOneTitle}</h4>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">{content?.featureOneSub}</p>
            </div>
            <div>
              <h4 className="text-sm font-serif mb-2">{content?.featureTwoTitle}</h4>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">{content?.featureTwoSub}</p>
            </div>
          </div>
        </div>
        {/* Right Side Image Housing */}
        <div className="relative aspect-4/5 md:aspect-square order-1 md:order-2 shadow-2xl">
          {content?.heritageImage && (
            <Image 
              src={urlFor(content.heritageImage).url()} 
              alt="Heritage Workshop" 
              fill 
              className="object-cover" 
            />
          )}
        </div>
      </section>

      {/* 5. TESTIMONIAL - Focused Quote Housing */}
      <section className="relative py-48 bg-white text-center px-10 overflow-hidden">
        {content?.quoteBackgroundImage && (
          <div className="absolute inset-0 -z-10 opacity-[0.03]">
            <Image src={urlFor(content.quoteBackgroundImage).url()} alt="Quote BG" fill className="object-cover" />
          </div>
        )}
        <div className="max-w-4xl mx-auto relative z-10">
          <blockquote className="text-2xl md:text-4xl font-serif italic text-gray-700 leading-relaxed mb-16 px-6">
            &ldquo;{content?.quote}&rdquo;
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-6 relative border border-gray-100 shadow-lg">
              {content?.authorImage && (
                <Image src={urlFor(content.authorImage).url()} alt="Author" fill className="object-cover" />
              )}
            </div>
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-gray-900">{content?.authorName}</p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#C4A47C] mt-2 font-medium">{content?.authorRole}</p>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      {/* <footer className="pt-32 pb-10 px-10 border-t border-gray-100 bg-[#F9F9F7]">
        <div className="max-w-1400px mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          <div>
            <h5 className="text-[11px] uppercase tracking-[0.3em] mb-8 font-bold">COUTURE CARE</h5>
            <p className="text-[11px] text-gray-400 leading-loose max-w-xs">
              Meticulous garment care for the discerning collector. Serving London, Paris, and New York.
            </p>
          </div>
          {["CONCIERGE", "JOURNAL", "THE CIRCLE"].map((title) => (
            <div key={title}>
              <h5 className="text-[11px] uppercase tracking-[0.3em] mb-8 font-bold">{title}</h5>
              <div className="flex flex-col gap-4 text-[10px] text-gray-400 uppercase tracking-widest">
                <Link href="#" className="hover:text-black transition-colors">Private Account</Link>
                <Link href="#" className="hover:text-black transition-colors">Residential Accounts</Link>
                <Link href="#" className="hover:text-black transition-colors">Corporate Solutions</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-gray-300 border-t border-gray-100 pt-10">
          <p>© 2026 COUTURE CARE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Credits</Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
}