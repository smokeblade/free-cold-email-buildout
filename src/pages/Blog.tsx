"use client";
import React, { useMemo, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import posts from '@/data/posts'
import { getUniqueBlogImage } from '@/lib/images'

const categories = ['Operations','Sales','Support','Marketing','Design','Hiring','Comparison'] as const

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [activeTag, setActiveTag] = useState<string>('All')

  const allTags = useMemo(() => {
    const set = new Set<string>()
    posts.forEach(p => (p.tags || []).forEach(t => set.add(t)))
    return ['All', ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    return posts.filter(p => {
      const catOk = activeCategory === 'All' || p.category === activeCategory
      const tagOk = activeTag === 'All' || (p.tags || []).includes(activeTag)
      return catOk && tagOk
    })
  }, [activeCategory, activeTag])

  return (
  <div className="min-h-screen font-inter">
    <Header />
    
    {/* Hero Section */}
    <section className="pt-28 md:pt-32 pb-16" style={{ background: '#F5F6F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            The Virtual Assistant Blog
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Expert insights, strategies, and playbooks for scaling your business with remote talent.
          </p>
        </div>
      </div>
    </section>
    
    {/* Featured Header like Owner */}
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[32px] bg-[#F5F6F7] p-4 md:p-6">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-4 md:gap-6">
            {/* Big feature */}
            {filtered.slice(0, 1).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="rounded-[24px] overflow-hidden bg-white border border-gray-200">
                  <div className="grid md:grid-cols-2">
                    {(post.cover || getUniqueBlogImage({ slug: post.slug, category: post.category })?.url) && (
                      <div className="aspect-[4/3] md:aspect-auto bg-gray-100 overflow-hidden">
                        <img 
                          src={post.cover || getUniqueBlogImage({ slug: post.slug, category: post.category })?.url || ''} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-semibold tracking-wide text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full">FEATURED</span>
                        <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">{post.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 group-hover:text-blue-700">{post.title}</h3>
                      <p className="mt-3 text-gray-700 md:text-lg">{post.description}</p>
                      <div className="mt-5 flex items-center gap-4 text-sm text-gray-600">
                        {post.author?.name && <span className="font-medium text-gray-900">{post.author.name}</span>}
                        {post.readMinutes && <span>{post.readMinutes} min read</span>}
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
            {/* Three small tiles */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {filtered.slice(1, 4).map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="rounded-[20px] overflow-hidden bg-white border border-gray-200 h-full">
                    <div className="grid grid-cols-[1fr_1.2fr] gap-0">
                      <div className="p-4 flex flex-col justify-center">
                        <div className="text-[11px] font-semibold text-blue-700 mb-1">{post.category}</div>
                        <div className="font-semibold text-gray-900 leading-tight group-hover:text-blue-700">{post.title}</div>
                        <div className="mt-2 text-xs text-gray-500 flex items-center gap-3">
                          {post.readMinutes && <span>{post.readMinutes} min read</span>}
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                      </div>
                      {(post.cover || getUniqueBlogImage({ slug: post.slug, category: post.category })?.url) && (
                        <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                          <img 
                            src={post.cover || getUniqueBlogImage({ slug: post.slug, category: post.category })?.url || ''} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Main Content Grid */}
    <section className="py-16" style={{ background: '#F5F6F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="text-sm font-semibold text-gray-900 mb-3">Categories</div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['All', ...categories].map(c => (
                    <button
                      key={c}
                      onClick={() => setActiveCategory(c)}
                      className={`px-3 py-1.5 rounded-full text-xs border ${activeCategory===c ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-3">Tags</div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(t => (
                    <button
                      key={t}
                      onClick={() => setActiveTag(t)}
                      className={`px-3 py-1.5 rounded-full text-xs border ${activeTag===t ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          
          {/* Main content */}
          <div className="flex-1">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.slice(1).map(post => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`} 
                  className="group block"
                >
                  <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300 hover:bg-gray-50/50">
                    {(post.cover || getUniqueBlogImage({ slug: post.slug, category: post.category })?.url) && (
                      <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                        <img 
                          src={post.cover || getUniqueBlogImage({ slug: post.slug, category: post.category })?.url || ''} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full">
                          {post.category}
                        </span>
                        {post.readMinutes && (
                          <span className="text-xs text-gray-500">
                            {post.readMinutes} min read
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 leading-tight mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        {post.author && (
                          <div className="flex items-center gap-3">
                            {post.author.avatar && (
                              <img 
                                src={post.author.avatar} 
                                alt={post.author.name} 
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            )}
                            <div className="text-sm text-gray-700">{post.author.name}</div>
                          </div>
                        )}
                        <div className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Newsletter Section */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to our blog</h2>
        <p className="text-lg text-gray-600 mb-8">
          We'll send you our best ideas on virtual assistants and growing your business operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
  )
}

export default Blog


