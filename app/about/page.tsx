"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Twitter,
  Mail,
  MapPin,
  Briefcase,
  Heart,
  Code2,
  Cloud,
  Brain,
  ArrowRight,
} from "lucide-react";

const skills = [
  {
    category: "AI & Agents",
    icon: Brain,
    color: "from-purple-500 to-fuchsia-500",
    items: ["GitHub Copilot", "MCP Servers", "Agentic Workflows", "OpenAI API", "LangChain", "Prompt Engineering"],
  },
  {
    category: "Full-Stack",
    icon: Code2,
    color: "from-sky-500 to-cyan-500",
    items: ["React", "Next.js", "TypeScript", "Java", "Spring Boot", "REST APIs"],
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    items: ["GitHub Actions", "Docker", "Google Cloud", "CI/CD", "Jenkins", "Linux"],
  },
];

const timeline = [
  {
    year: "2025",
    title: "MCP Practitioner & Agentic Builder",
    description:
      "Deep-dived into Model Context Protocol — designing and wiring MCP servers into agentic workflows. Building multi-step agents that plan, tool-call, and self-correct using GitHub Copilot Agent Mode and custom runtimes.",
    type: "ai",
  },
  {
    year: "2024",
    title: "AI-Native Developer",
    description:
      "Shifted fully to vibe coding — shipping production features through GitHub Copilot Chat and inline completions. Integrated OpenAI and LangChain into full-stack apps, cutting feature delivery time by over 60%.",
    type: "work",
  },
  {
    year: "2022",
    title: "Full-Stack Engineer · Java & React",
    description:
      "Led development on enterprise-scale web applications using Java Spring Boot and React/TypeScript. Established CI/CD pipelines with Jenkins and GitHub Actions and deployed on Google Cloud.",
    type: "work",
  },
  {
    year: "Ongoing",
    title: "Open Source & Knowledge Sharing",
    description:
      "Publishing AI workflow patterns, MCP server templates, and full-stack starter kits on GitHub. Writing about agentic architecture, prompt engineering, and AI-native development practices.",
    type: "open-source",
  },
];

const interests = [
  { label: "AI Research", icon: "🤖" },
  { label: "Agentic Systems", icon: "🧠" },
  { label: "Open Source", icon: "🌍" },
  { label: "Vibe Coding", icon: "⚡" },
  { label: "Photography", icon: "📷" },
  { label: "Travelling", icon: "✈️" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="tag">About me</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Hi, I&apos;m{" "}
                <span className="gradient-text">Arul</span>
              </motion.h1>

              <motion.div
                variants={fadeUp}
                custom={2}
                className="flex items-center gap-3 text-gray-500 dark:text-gray-400"
              >
                <span className="flex items-center gap-1.5">
                    <Briefcase size={15} />
                    <span className="text-sm font-medium">AI Developer · Full-Stack Engineer</span>
                  </span>
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} />
                  <span className="text-sm">Glasgow</span>
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
              >
                I build AI-native applications — wiring together agentic workflows, MCP servers, and
                large-language-model APIs to ship features that would have taken weeks in a matter of hours.
                GitHub Copilot and vibe coding aren&apos;t shortcuts for me; they&apos;re the primary
                way I think about and deliver software.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={4}
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                My foundation is full-stack: Java Spring Boot on the server, React and Next.js on the
                client, TypeScript throughout. I layer AI on top — OpenAI, LangChain, and custom
                MCP runtimes — to create systems that plan, reason, and self-correct. CI/CD on Google
                Cloud keeps it all shipping fast.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={5}
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                Based in Glasgow. Almost all my work is open source on GitHub. I write about agentic
                architecture, prompt engineering, and the evolving AI-native development stack — because
                sharing what I learn is how the whole ecosystem moves faster.
              </motion.p>

              {/* Social links */}
              <motion.div
                variants={fadeUp}
                custom={6}
                className="flex items-center gap-3 pt-2"
              >
                <a
                  href="https://github.com/arulkumar-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://twitter.com/@imarulkumar1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Twitter size={16} />
                  Twitter
                </a>
                <a
                  href="mailto:arul.ui.dev@gmail.com"
                  className="btn-secondary"
                >
                  <Mail size={16} />
                  Email
                </a>
              </motion.div>
            </motion.div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/30 to-purple-600/30 blur-3xl -z-10 scale-110" />
                {/* Image container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-gray-200/60 dark:border-gray-700/40 shadow-2xl">
                  <Image
                    src="https://arului.github.io/images/profile.JPG"
                    alt="Arul — UI Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 glass-card px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Open to opportunities
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Skills &amp; <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              An AI-first toolkit built across the full stack — from LLM APIs and agentic runtimes
              to cloud infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-6 space-y-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-700/60 text-xs font-medium text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50/50 dark:bg-gray-900/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              My <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={`${item.year}-${i}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-6"
              >
                {/* Timeline indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-sky-500/40 to-transparent mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="glass-card p-5 flex-1 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag">{item.year}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <Heart size={24} className="text-red-500" />
              Beyond Code
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, i) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass-card px-6 py-4 flex items-center gap-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-2xl">{interest.icon}</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {interest.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-10"
          >
            <Link href="/contact" className="btn-primary">
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
