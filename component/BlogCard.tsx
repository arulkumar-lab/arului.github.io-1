import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { clsx } from "clsx";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  href: string;
  featured?: boolean;
}

export function BlogCard({
  title,
  excerpt,
  date,
  author,
  tags,
  image,
  href,
  featured = false,
}: BlogCardProps) {
  return (
    <article
      className={clsx(
        "group glass-card overflow-hidden hover:shadow-xl hover:shadow-sky-500/5 dark:hover:shadow-sky-500/10 transition-all duration-500 hover:-translate-y-1",
        featured && "md:col-span-2 lg:col-span-2"
      )}
    >
      {/* Image */}
      <div
        className={clsx(
          "relative overflow-hidden bg-gradient-to-br from-sky-500/10 to-purple-500/10",
          featured ? "h-56 sm:h-72" : "h-48"
        )}
      >
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {featured && (
          <div className="absolute top-4 left-4">
            <span className="tag bg-sky-500/90 text-white border-sky-400/60 backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          className={clsx(
            "font-bold text-gray-900 dark:text-gray-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200 leading-tight",
            featured ? "text-xl sm:text-2xl" : "text-lg"
          )}
        >
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
          <span className="flex items-center gap-1.5">
            <User size={12} />
            {author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {date}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-200 group/link"
        >
          Read more
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
