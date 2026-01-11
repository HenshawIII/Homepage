import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  author?: {
    name: string
    image?: any
  }
  mainImage?: any
  publishedAt?: string
  categories?: Array<{ title: string }>
  excerpt?: string
}

export async function BlogSection() {
  const posts: Post[] = await client.fetch(postsQuery, {}, { next: { revalidate: 60 } })

  // Only show the first 3 posts on the landing page
  const featuredPosts = posts.slice(0, 3)

  if (featuredPosts.length === 0) {
    return null
  }

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-white w-[95%] mx-auto rounded-xl mb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body mb-4">
            BLOG
          </p>
          <h2 className="text-lg lg:text-3xl font-normal text-gray-900 font-heading mb-4">
            Latest Insights
          </h2>
        
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {featuredPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-gray-100 shrink-0 w-[85vw] md:w-auto md:shrink"
            >
              {post.mainImage && (
                <div className="relative w-full h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage).width(600).height(400).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold text-[#216299] uppercase tracking-wide"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="text-xl font-normal text-gray-900 font-heading mb-2 group-hover:text-[#216299] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                {post.publishedAt && (
                  <p className="text-sm text-gray-600 font-body">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {posts.length > 3 && (
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#216299] hover:text-[#1a4d7a] font-semibold font-body transition-colors"
            >
              View All Posts
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

