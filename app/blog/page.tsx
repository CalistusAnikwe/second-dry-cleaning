// import { sanityFetch } from "@/sanity/lib/fetch";
// import { POSTS_QUERY } from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";

// export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
//   const postsPerPage = 6;
//   const currentPage = Number(searchParams.page) || 1;
//   const start = (currentPage - 1) * postsPerPage;
//   const end = start + postsPerPage;

//   const { posts, total } = await sanityFetch({ 
//     query: POSTS_QUERY, 
//     params: { start, end } 
//   });

//   const totalPages = Math.ceil(total / postsPerPage);

//   return (
//     <main className="bg-white min-h-screen py-24 px-6">
//       {/* Header Section */}
//       <header className="text-center max-w-2xl mx-auto mb-20">
//         <h1 className="text-5xl font-serif text-[#2C2C2C] mb-4">The Wardrobe Journal</h1>
//         <p className="text-gray-400 italic font-light text-sm tracking-wide">
//           A curated guide to high-fashion care, fabric heritage, and the refined art of garment maintenance.
//         </p>
//       </header>

//       {/* Blog List Section */}
//       <section className="max-w-6xl mx-auto space-y-24">
//         {posts.length > 0 ? (
//           posts.map((post: any) => (
//             <div key={post._id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
//               <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
//                 {post.mainImage && (
//                   <Image 
//                     src={urlFor(post.mainImage).url()} 
//                     alt={post.title} 
//                     fill 
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                 )}
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] text-gray-400 uppercase">
//                   <span className="text-[#C5A267] font-bold">{post.category}</span>
//                   <span>—</span>
//                   <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
//                 </div>
//                 <h2 className="text-3xl font-serif leading-tight text-[#2C2C2C] group-hover:text-[#C5A267] transition-colors">
//                   {post.title}
//                 </h2>
//                 <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
//                   {post.excerpt}
//                 </p>
//                 <Link href={`/blog/${post.slug}`} className="inline-block text-[10px] tracking-widest uppercase border-b border-black pb-1 pt-4 font-bold">
//                   Read Article →
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center py-20 text-gray-300 italic">No entries in the journal yet.</div>
//         )}
//       </section>

//       {/* Pagination Section */}
//       <div className="mt-24 flex justify-center items-center gap-4 border-t border-gray-100 pt-12">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <Link
//             key={i + 1}
//             href={`/blog?page=${i + 1}`}
//             className={`w-10 h-10 flex items-center justify-center text-xs border ${currentPage === i + 1 ? 'bg-black text-white' : 'border-gray-200 text-gray-500 hover:border-black'}`}
//           >
//             {i + 1}
//           </Link>
//         ))}
//         {currentPage < totalPages && (
//           <Link href={`/blog?page=${currentPage + 1}`} className="text-xs uppercase tracking-widest ml-4 font-bold">
//             Next →
//           </Link>
//         )}
//       </div>
//     </main>
//   );
// }












import { sanityFetch } from "@/sanity/lib/fetch";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

// 1. Define the shape of your data so TypeScript stays calm
interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  mainImage: any;
  category: string;
}

interface SanityResponse {
  posts: Post[];
  total: number;
}

// 2. Await searchParams (Required for Next.js 15+)
export default async function BlogPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ page?: string }> 
}) {
  const params = await searchParams;
  const postsPerPage = 6;
  const currentPage = Number(params.page) || 1;
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  // 3. Fetch with type assertion
  const data = await sanityFetch({ 
    query: POSTS_QUERY, 
    params: { start, end } 
  }) as SanityResponse;

  // 4. Use safe fallbacks
  const posts = data?.posts || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / postsPerPage);

  return (
    <main className="bg-white min-h-screen py-24 px-6">
      {/* Header Section */}
      <header className="text-center max-w-2xl mx-auto mb-20">
        <h1 className="text-5xl font-serif text-[#2C2C2C] mb-4">The Wardrobe Journal</h1>
        <p className="text-gray-400 italic font-light text-sm tracking-wide">
          A curated guide to high-fashion care, fabric heritage, and the refined art of garment maintenance.
        </p>
      </header>

      {/* Blog List Section */}
      <section className="max-w-6xl mx-auto space-y-24">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {post.mainImage && (
                  <Image 
                    src={urlFor(post.mainImage).url()} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                  <span className="text-[#C5A267] font-bold">{post.category}</span>
                  <span>—</span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <h2 className="text-3xl font-serif leading-tight text-[#2C2C2C] group-hover:text-[#C5A267] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-block text-[10px] tracking-widest uppercase border-b border-black pb-1 pt-4 font-bold"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-gray-300 italic">No entries in the journal yet.</div>
        )}
      </section>

      {/* Pagination Section */}
      {totalPages > 1 && (
        <div className="mt-24 flex justify-center items-center gap-4 border-t border-gray-100 pt-12">
          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              key={i + 1}
              href={`/blog?page=${i + 1}`}
              className={`w-10 h-10 flex items-center justify-center text-xs border ${
                currentPage === i + 1 ? 'bg-black text-white' : 'border-gray-200 text-gray-500 hover:border-black'
              }`}
            >
              {i + 1}
            </Link>
          ))}
          {currentPage < totalPages && (
            <Link href={`/blog?page=${currentPage + 1}`} className="text-xs uppercase tracking-widest ml-4 font-bold">
              Next →
            </Link>
          )}
        </div>
      )}
    </main>
  );
}