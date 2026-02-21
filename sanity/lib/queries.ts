// import { groq } from "next-sanity";

// // This query handles pagination by taking a 'start' and 'end' index
// export const POSTS_QUERY = groq`{
//   "posts": *[_type == "post"] | order(publishedAt desc) [$start...$end] {
//     _id,
//     title,
//     "slug": slug.current,
//     category,
//     publishedAt,
//     excerpt,
//     mainImage
//   },
//   "total": count(*[_type == "post"])
// }`;


import { groq } from "next-sanity";

export const POSTS_QUERY = groq`{
  "posts": *[_type == "post"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage,
    "category": category->title
  },
  "total": count(*[_type == "post"])
}`;