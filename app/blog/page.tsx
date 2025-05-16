"use client";

import Navbar from "@/components/navbar"
import BlogCard from "@/components/blog-card"
import { useEffect, useState } from "react";

type Blog = {
  id: number; // Change `id` to `number` to match the expected type
  title: string;
  author: string;
  image: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  externalLink: string; // Add the missing property
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.data.blogs);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              Our <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Blog</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
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
            {blogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-red-600/30 py-6 text-center text-sm text-cream/60 relative z-10">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} The KGPian Game Theory Society. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
