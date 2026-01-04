import { client } from '@/sanity/lib/client'
import { postQuery, postSlugsQuery } from '@/sanity/lib/queries'
import { PortableText } from '@/components/ui/PortableText'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { notFound } from 'next/navigation'

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
  body?: any
}

export async function generateStaticParams() {
  const slugs = await client.fetch(postSlugsQuery)
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post: Post = await client.fetch(postQuery, { slug })

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#f0f1f1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-body mb-8 transition-colors"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
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

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.author.image).width(40).height(40).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                )}
                <span className="text-sm font-body text-gray-700">
                  {post.author.name}
                </span>
              </div>
            )}
            {post.publishedAt && (
              <span className="text-sm text-gray-600 font-body">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>

          {/* Main Image */}
          {post.mainImage && (
            <div className="relative w-full h-64 sm:h-96 lg:h-[500px] mb-8 rounded-2xl overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(1200).height(600).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>
          )}

          {/* Content */}
          {post.body && (
            <div className="prose prose-lg max-w-none font-body text-gray-700">
              <PortableText content={post.body} />
            </div>
          )}
        </article>
      </div>
    </div>
  )
}

