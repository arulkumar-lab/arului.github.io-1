"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Github, ArrowRight, BookOpen, Rss, Brain, Cpu, Zap, Layers, TrendingUp, Star, GitBranch, Server, Sparkles } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import Link from "next/link";
import { BlogCard } from "@/component/BlogCard";
import { LiquidGlassFilter } from "@/component/LiquidGlassFilter";
import pageData from "@/data/page-data.json";

type LucideIcon = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;

const ICON_MAP: Record<string, LucideIcon> = {
  Brain, Cpu, Zap, Layers, TrendingUp, Star, GitBranch, Server, Sparkles, Github, ArrowRight, BookOpen, Rss,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 via-purple-500 to-cyan-400 z-[60] origin-left"
        style={{ scaleX }}
      />
      {/* SVG displacement-map filter — Chrome progressive enhancement */}
      <LiquidGlassFilter />
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 section-padding">
        {/* Animated blobs */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="blob-1 absolute -top-20 left-1/4 w-80 h-80 bg-purple-400/20 dark:bg-purple-500/15 rounded-full blur-3xl" />
          <div className="blob-2 absolute top-10 right-1/4 w-96 h-96 bg-sky-400/15 dark:bg-sky-500/10 rounded-full blur-3xl" />
          <div className="blob-3 absolute bottom-10 left-1/2 w-64 h-64 bg-cyan-400/15 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-900/30 border border-sky-200/60 dark:border-sky-700/40 text-sky-700 dark:text-sky-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                </span>
                Full-Stack Engineer · AI Developer · MCP Practitioner · Glasgow
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="text-gray-900 dark:text-white">Hello, I&apos;m </span>
              <span className="gradient-text">Arul</span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              Full-stack engineer with 1+ year of advanced AI development — building agentic workflows, integrating MCP servers, and shipping production features through vibe coding. Java, TypeScript, and the entire AI-native stack.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/about" className="liquid-glass-button px-6 py-3 text-gray-800 dark:text-white font-semibold">
                <BookOpen size={16} />
                About me
              </Link>
              <a
                href="https://github.com/arulkumar-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-button px-6 py-3 text-gray-800 dark:text-white font-semibold"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>

            {/* Tech pills */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap justify-center gap-2 pt-2"
            >
              {pageData.techStack.map((tech) => (
                <span
                  key={tech.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/40 text-xs font-medium text-gray-600 dark:text-gray-400 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${tech.color}`}
                  />
                  {tech.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      </section>

      {/* Career Performance Stats */}
      <section className="section-padding" id="career-stats">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp size={16} className="text-purple-500" />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Career Performance
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              AI Activity &amp;{" "}
              <span className="gradient-text">Impact Summary</span>
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              A snapshot of my AI-driven engineering activity over the past year — from agentic workflows to advanced MCP integrations.
            </p>
          </motion.div>

          {/* Stats bento */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {pageData.careerStats.map((stat, i) => {
              const StatIcon = ICON_MAP[stat.icon];
              const featured = i === 0 || i === 3;
              const featuredBg =
                i === 0
                  ? "bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20"
                  : "bg-gradient-to-br from-sky-500/10 to-teal-500/10 dark:from-sky-500/20 dark:to-teal-500/20";
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className={`liquid-glass flex flex-col items-center text-center gap-3 transition-all duration-300 ${
                    featured
                      ? `lg:col-span-2 p-8 ${featuredBg}`
                      : "p-6"
                  }`}
                >
                  <div className={`rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg ${
                    featured ? "w-14 h-14" : "w-12 h-12"
                  }`}>
                    <StatIcon size={featured ? 26 : 22} className="text-white" />
                  </div>
                  <span className={`font-extrabold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent ${
                    featured ? "text-5xl" : "text-4xl"
                  }`}>
                    {stat.value}
                  </span>
                  <span className={`font-medium text-gray-500 dark:text-gray-400 leading-snug ${
                    featured ? "text-base" : "text-sm"
                  }`}>
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* AI Activity cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageData.aiActivities.map((item, i) => {
              const ActivityIcon = ICON_MAP[item.icon];
              return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="liquid-glass p-7 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-sky-500/25 dark:hover:ring-sky-400/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <ActivityIcon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              );
            })}
          </div>

          {/* Activity timeline strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 liquid-glass p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <GitBranch size={16} className="text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Activity Highlights · May 2025 – May 2026
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              {pageData.activityHighlights.map((col) => (
                <div key={col.title} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star size={14} className={`${col.iconColor} flex-shrink-0`} />
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{col.title}</span>
                  </div>
                  <ul className="space-y-1.5 text-gray-500 dark:text-gray-400 pl-5 list-disc">
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Copilot Usage */}
      <section className="section-padding relative overflow-hidden bg-gray-50/60 dark:bg-gray-900/40" id="copilot-stats">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles size={16} className="text-indigo-500" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Copilot Usage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              How I Use{" "}
              <span className="gradient-text">GitHub Copilot</span>
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              GitHub Copilot is deeply embedded in my daily engineering workflow — from intelligent completions to agentic task automation.
            </p>
          </motion.div>

          {/* Three feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {pageData.copilotCards.map((card, i) => {
              const CopilotIcon = ICON_MAP[card.icon];
              return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="liquid-glass p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-indigo-500/20 dark:hover:ring-indigo-400/20 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md`}>
                  <CopilotIcon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{card.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{card.desc}</p>
              </motion.div>
              );
            })}
          </div>

          {/* Summary bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="liquid-glass p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <GitBranch size={18} className="text-white" />
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-sm">Recent Activity</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full text-center">
              {pageData.copilotStats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className={`text-xl font-extrabold ${s.color}`}>{s.value}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog / Articles */}
      <section className="section-padding" id="articles">
        <div className="container-max">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Rss size={16} className="text-sky-500" />
                <span className="text-sm font-medium text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  Latest Articles
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Tech Insights &amp;{" "}
                <span className="gradient-text">Blog Posts</span>
              </h2>
            </div>
            <Link
              href="/about"
              className="flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-200 group"
            >
              View all
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}

            {/* Coming soon card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="glass-card p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[280px] border-dashed"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 flex items-center justify-center">
                <BookOpen size={20} className="text-sky-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  More articles coming soon
                </h3>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  Exploring React, Cloud, CI/CD and more.
                </p>
              </div>
              <Link href="/contact" className="liquid-glass-button px-5 py-2.5 text-sm text-gray-800 dark:text-white font-medium">
                Get notified
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-purple-600 to-cyan-500 p-8 sm:p-12 text-center text-white shadow-2xl"
          >
            {/* Mesh grid pattern */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M40 0v40M0 40h40' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
                backgroundSize: "40px 40px",
              }}
            />
            <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Let&apos;s work together
              </h2>
              <p className="text-white/80 text-lg">
                Have a project in mind or just want to chat? I&apos;m always open
                to new opportunities and collaborations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="liquid-glass-button inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold"
                >
                  Get in touch
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="liquid-glass-button inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold"
                >
                  View services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
