"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Power Company",
    description:
      "End-to-end digital transformation for energy utilities — real-time dashboards, smart metering integrations, and customer portals built for scale and reliability.",
    image: "https://arului.github.io/images/dash-board-2.jpg",
    tags: ["Java", "React", "Analytics"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 2,
    title: "Gas Company",
    description:
      "Operational management platforms for gas distribution companies. Field service scheduling, incident tracking, and regulatory reporting made seamless with modern web tech.",
    image: "https://arului.github.io/images/dash-board-3.jpg",
    tags: ["Spring Boot", "TypeScript", "Dashboard"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Water Company",
    description:
      "Infrastructure monitoring and reporting tools for water utilities. Real-time sensor data visualisation, alert management, and compliance reporting in one unified platform.",
    image: "https://arului.github.io/images/dash-board-4.jpg",
    tags: ["Next.js", "Cloud", "IoT"],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: 4,
    title: "Enterprise Analytics",
    description:
      "Data-driven decision making platforms featuring interactive charts, predictive analytics, and KPI dashboards. Built using modern frontend frameworks with robust Java backends.",
    image: "https://arului.github.io/images/dash-board-5.jpg",
    tags: ["Analytics", "REST API", "React"],
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: 5,
    title: "Microservices Platform",
    description:
      "Architecting and delivering scalable microservices using MicroProfile, Open Liberty and Spring Boot. Service discovery, health checks, fault tolerance and seamless CI/CD pipelines.",
    image: "https://arului.github.io/images/dash-board-6.jpg",
    tags: ["MicroProfile", "Liberty", "Docker"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 6,
    title: "Full-Stack Web Applications",
    description:
      "Custom full-stack web applications from concept to deployment. Frontend in React/Next.js, backend in Java/Spring, deployed on Google Cloud with automated CI/CD.",
    image: "https://arului.github.io/images/dash-board-1.jpg",
    tags: ["Full-Stack", "GCP", "CI/CD"],
    gradient: "from-rose-500 to-pink-500",
  },
];

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Open Source" },
  { value: "∞", label: "Cups of Coffee" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="tag mb-4 inline-flex">Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              What I{" "}
              <span className="gradient-text">Build &amp; Deliver</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              From utility-sector dashboards to microservice architectures — I
              help teams ship robust, scalable software using modern tools and
              battle-tested engineering practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section-padding py-8 border-y border-gray-200/60 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-12"
          >
            <Zap size={18} className="text-sky-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              All Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="group glass-card overflow-hidden hover:shadow-xl hover:shadow-sky-500/5 dark:hover:shadow-sky-500/10 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-200 group/link"
                  >
                    Discuss project
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 sm:p-12 text-center space-y-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center mx-auto shadow-lg">
              <ExternalLink size={24} className="text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Have a project in mind?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              I&apos;m always looking for exciting new projects. Whether it&apos;s a
              startup MVP or an enterprise platform — let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start a conversation
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://github.com/arulkumar-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <ExternalLink size={16} />
                See my work on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
