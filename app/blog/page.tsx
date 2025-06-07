"use client";

import BlogCard from "@/components/blog-card"
import { BlogPost } from "@/data/blog-posts"
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

export default function BlogPage() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 1000000, // Refresh every 5 minutes
      dedupingInterval: 100000, // Dedupe requests within 1 minute
    }
  );

  // Process the data
  const blogs: BlogPost[] = data?.data?.blogs ? 
    data.data.blogs.map((blog: any, index: number) => ({
      ...blog,
      id: blog.id || index + 1 // Use existing id or generate one
    })) : [];

  return (
    <div className="min-h-screen text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              Our <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Articles</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-cream/80 mt-6 max-w-3xl mx-auto">
              Explore our collection of articles on game theory concepts, applications, and the latest research.
            </p>
          </div>

          {error && (
            <div className="text-center text-red-500 mb-4">
              Error: {error.message || 'Failed to fetch blogs'}
            </div>
          )}

          {isLoading && blogs.length === 0 && (
            <div className="text-center text-cream/80">
              Loading blogs...
            </div>
          )}

          {!isLoading && blogs.length === 0 && !error && (
            <div className="text-center text-cream/80">
              No Blogs to Show at this moment.
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post: BlogPost, index: number) => (
              <BlogCard key={post.id || `blog-${index}`} post={post} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
