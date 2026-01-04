import { PortableText as SanityPortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface PortableTextProps {
  content: any
}

export function PortableText({ content }: PortableTextProps) {
  return (
    <SanityPortableText
      value={content}
      components={{
        types: {
          image: ({ value }) => {
            if (!value?.asset) return null
            return (
              <div className="relative w-full h-96 my-8 rounded-lg overflow-hidden">
                <Image
                  src={urlFor(value).width(800).height(400).url()}
                  alt={value.alt || 'Blog image'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            )
          },
        },
        block: {
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold mt-4 mb-2">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-bold mt-3 mb-2">{children}</h4>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
              {children}
            </blockquote>
          ),
          normal: ({ children }) => (
            <p className="mb-4 leading-relaxed">{children}</p>
          ),
        },
        marks: {
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          link: ({ value, children }) => {
            const target = value?.href?.startsWith('http') ? '_blank' : undefined
            return (
              <a
                href={value?.href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className="text-[#216299] hover:underline"
              >
                {children}
              </a>
            )
          },
        },
        list: {
          bullet: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
          ),
        },
      }}
    />
  )
}

