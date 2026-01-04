import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author->{
    name,
    image
  },
  mainImage,
  publishedAt,
  categories[]->{
    title
  },
  excerpt
}`

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author->{
    name,
    image
  },
  mainImage,
  publishedAt,
  categories[]->{
    title
  },
  body
}`

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][] {
  "slug": slug.current
}`

