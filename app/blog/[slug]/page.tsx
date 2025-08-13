import BlogPost from '@/pages/blog/PostTemplate'
import { posts } from '@/data/posts'
import type { Metadata } from 'next'

export const revalidate = 300

// Generate static paths for all blog posts at build time
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title}`,
    description: post.description,
    alternates: { canonical: `https://onvally.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author.name] : ['Team onvally'],
      images: post.cover ? [post.cover] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.cover ? [post.cover] : [],
    }
  }
}

export default function Page() { 
  return <BlogPost /> 
}


