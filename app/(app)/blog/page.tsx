import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { CTASectionNew } from '@/components/sections/CTASectionNew'
import { NewsletterSubscription } from '@/components/ui/NewsletterSubscription'

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

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery)

  return (
    <div className="min-h-screen bg-[#f0f1f1] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-[95%] rounded-xl mb-6">
        <div className="mb-12">
          <h1 className="text-lg lg:text-3xl font-normal text-gray-900 font-heading mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-700 font-body max-w-2xl">
            Insights, updates, and stories from our team
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 font-body">No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
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
                  <h2 className="text-xl font-bold text-gray-900 font-heading mb-2 group-hover:text-[#3038cf] transition-colors">
                    {post.title}
                  </h2>
                  {post.publishedAt && (
                    <p className="text-sm text-gray-600 font-body mb-3">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  )}
                  {post.author && (
                    <p className="text-sm text-gray-600 font-body">
                      By {post.author.name}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Newsletter Subscription */}
        
      </div>
      <div className="mt-12 lg:mt-16 mb-6">
          <NewsletterSubscription />
        </div>
      <CTASectionNew />
    </div>
  )
}

