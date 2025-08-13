"use client";
import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useParams } from 'next/navigation'
type Params = { slug?: string | string[] }
import { useSEO } from '@/hooks/use-seo'
import posts from '@/data/posts'
import Link from 'next/link'
import BlogPostCTA from '@/components/BlogPostCTA'
import { getUniqueBlogImage } from '@/lib/images'

const PostTemplate: React.FC = () => {
  const params = useParams() as unknown as Params
  const slug = typeof params?.slug === 'string' ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : ''
  const post = posts.find(p => p.slug === slug) || posts[0]
  const title = post.title
  const description = post.description
  const [activeSection, setActiveSection] = useState<string>('')
  const midIndex = Math.max(1, Math.floor((post.sections?.length || 1) / 2))
  
  useSEO(`onvally® Blog — ${title}`, description, {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: { '@type': 'Person', name: post.author?.name || 'Nils Feldmann' },
    publisher: { '@type': 'Organization', name: 'onvally' },
  })

  // Extract headings for table of contents
  const headings = post.sections
    .filter(s => s.heading)
    .map((s, i) => ({ 
      id: `section-${i}`, 
      text: s.heading!, 
      level: s.heading!.startsWith('#') ? s.heading!.split(' ')[0].length : 2 
    }))

  return (
    <div className="min-h-screen font-inter">
      <Header />
      <article className="pt-28 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Header */}
              <header className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-semibold text-blue-700 bg-blue-50 px-4 py-2 rounded-full">
                    {post.category}
                  </span>
                  {post.readMinutes && (
                    <span className="text-sm text-gray-500">
                      {post.readMinutes} min read
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-8">
                  {title}
                </h1>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
                  {description}
                </p>
                
                {post.author && (
                  <div className="flex items-center gap-4">
                    {post.author.avatar && (
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">{post.author.name}</div>
                      <div className="text-sm text-gray-600">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          weekday: 'long',
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </header>

              {/* Removed heavy top CTA per strategy; keep mid + end CTAs */}

              {/* Key Takeaways */}
              {post.keyTakeaways && (
                <div className="mb-16 p-8 bg-blue-50 rounded-2xl border border-blue-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key takeaways</h2>
                  <ul className="space-y-4">
                    {post.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hero Image */}
              {(post.cover || getUniqueBlogImage({ slug, category: post.category })?.url) && (
                <div className="mb-16 rounded-2xl overflow-hidden">
                  <img 
                    src={post.cover || getUniqueBlogImage({ slug, category: post.category })?.url || ''} 
                    alt={title} 
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
              )}

              {/* Content with mid-article CTA insertion */}
              {(() => {
                const renderSection = (s: typeof post.sections[number], i: number) => (
                  <section key={i} id={`section-${i}`} className="mb-16 scroll-mt-20">
                    {s.image && (
                      <figure className="my-12">
                        <img src={s.image} alt={s.alt || ''} className="w-full rounded-xl shadow-lg" />
                        {s.caption && (
                          <figcaption className="text-center text-sm text-gray-600 mt-4 italic">{s.caption}</figcaption>
                        )}
                      </figure>
                    )}
                    {s.heading && (
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight scroll-mt-20">
                        {s.heading.startsWith('#') ? s.heading.substring(s.heading.indexOf(' ') + 1) : s.heading}
                      </h2>
                    )}
                    {s.body && (
                      <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                        {s.body.split('\n\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-6">{paragraph}</p>
                        ))}
                      </div>
                    )}
                    {s.subsections && s.subsections.map((sub, subIndex) => (
                      <div key={subIndex} className="mt-8">
                        {sub.subheading && (
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{sub.subheading}</h3>
                        )}
                        {sub.subbody && (
                          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                            {sub.subbody.split('\n\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="mb-4">{paragraph}</p>
                            ))}
                          </div>
                        )}
                        {sub.subimage && (
                          <figure className="my-8">
                            <img src={sub.subimage} alt={sub.subalt || ''} className="w-full rounded-xl shadow-md" />
                            {sub.subcaption && (
                              <figcaption className="text-center text-sm text-gray-600 mt-3 italic">{sub.subcaption}</figcaption>
                            )}
                          </figure>
                        )}
                      </div>
                    ))}
                    {s.list && (
                      <ul className="mt-6 space-y-3">
                        {s.list.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.quote && (
                      <blockquote className="my-8 pl-6 border-l-4 border-blue-500 italic text-xl text-gray-700 bg-gray-50 p-6 rounded-r-xl">
                        "{s.quote}"
                        {s.quoteAuthor && (<footer className="text-sm text-gray-600 mt-3">— {s.quoteAuthor}</footer>)}
                      </blockquote>
                    )}
                  </section>
                )
                return (
                  <>
                    <div className="prose prose-lg prose-gray max-w-none">
                      {post.sections.slice(0, midIndex).map((s, i) => renderSection(s, i))}
                    </div>
                    {/* Mid-article CTA (bigger, truly mid-content) */}
                    <div className="my-14">
                      <BlogPostCTA />
                    </div>
                    <div className="prose prose-lg prose-gray max-w-none">
                      {post.sections.slice(midIndex).map((s, i) => renderSection(s, i + midIndex))}
                    </div>
                  </>
                )
              })()}

              {/* Slim inline CTA (optional) intentionally removed to avoid crowding; sidebar CTA remains */}

              {/* Tags */}
              {post.tags && (
                <div className="mt-20 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map(t => (
                      <span 
                        key={t} 
                        className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio */}
              {post.author && (
                <div className="mt-16 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">About the author</h3>
                  <div className="flex items-start gap-6">
                    {post.author.avatar && (
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{post.author.name}</h4>
                      {post.author.title && (
                        <p className="text-gray-600 mb-3">{post.author.title}</p>
                      )}
                      {post.author.bio && (
                        <p className="text-gray-700 leading-relaxed">{post.author.bio}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Related Posts */}
              <div className="mt-20 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">More Insights</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  {posts
                    .filter(p => p.slug !== post.slug)
                    .slice(0, 2)
                    .map(p => (
                      <Link 
                        key={p.slug} 
                        href={`/blog/${p.slug}`}
                        className="group block"
                      >
                        <article className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50/50">
                          {p.cover && (
                            <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden mb-4">
                              <img 
                                src={p.cover} 
                                alt={p.title}
                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="text-xs font-semibold text-blue-700 mb-2">{p.category}</div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 text-lg leading-tight">
                            {p.title}
                          </h4>
                          <p className="text-gray-600 text-sm mt-2 line-clamp-2">{p.description}</p>
                        </article>
                      </Link>
                    ))}
                </div>
              </div>

              {/* End CTA (bigger) */}
              <div className="mt-16">
                <BlogPostCTA />
              </div>
            </div>

            {/* Sidebar - Table of Contents */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-32">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">IN THIS ARTICLE</h3>
                  <nav className="space-y-3">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm transition-colors duration-200 ${
                          heading.level === 3 ? 'ml-4' : ''
                        } ${
                          activeSection === heading.id
                            ? 'text-blue-600 font-medium'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        onClick={() => setActiveSection(heading.id)}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                  {/* Sidebar slim CTA */}
                  <div className="mt-8 rounded-lg border border-gray-200 p-4">
                    <div className="text-sm text-gray-700">Matched in ~72 hours. Free replacement guarantee.</div>
                    <a href="/demo" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline">
                      Get a free demo
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                  <div className="mt-6">
                    <a href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                      ← Back to all articles
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}

export default PostTemplate


