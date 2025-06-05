"use client";

import BlogCard from "@/components/blog-card"
import { useEffect, useState } from "react";
import { BlogPost } from "@/data/blog-posts"
import Footer from "@/components/footer"

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        // Ensure each blog has a unique id
        const blogsWithIds = data.data.blogs.map((blog: any, index: number) => ({
          ...blog,
          id: blog.id || index + 1 // Use existing id or generate one
        }));
        setBlogs(blogsWithIds);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchBlogs();
  }, []);

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
            <div className="text-center text-red-500 mb-4">Error: {error}</div>
          )}

          {blogs.length === 0 && !error && (
            <div className="text-center text-cream/80">
              No Blogs to Show at this moment.
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post, index) => (
              <BlogCard key={post.id || `blog-${index}`} post={post} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
