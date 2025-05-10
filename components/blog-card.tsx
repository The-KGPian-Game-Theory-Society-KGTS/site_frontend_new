import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BlogPost } from "@/data/blog-posts"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <div
      className="bg-black/70 border border-[#8B0000]/30 rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(139,0,0,0.3)] transition-all duration-300 group h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-cream group-hover:text-[#8B0000] transition-colors line-clamp-2">
          {post.title}
        </h3>

        <div className="flex items-center mt-3 text-sm text-cream/60">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>

        <div className="mt-4 relative">
          <div className="overflow-hidden">
            <p
              className={cn(
                "text-cream/80 transition-[max-height] duration-500 ease-in-out",
                "group-hover:max-h-[500px]", // reveal all content
                "max-h-[4.5rem]" // height to show 3 lines
              )}
            >
              {post.excerpt}
            </p>
          </div>
        </div>

        <Link
          href={post.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center text-[#8B0000] hover:text-[#A52A2A] transition-all duration-300 ease-in-out group/btn cursor-pointer hover:shadow-[0_0_10px_rgba(139,0,0,0.3)] transform"
        >
          <span>Read More</span>
          <ArrowRight className="ml-2 transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1" size={16} />
        </Link>
      </div>
    </div>
  )
} 