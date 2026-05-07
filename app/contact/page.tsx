"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Twitter,
  Github,
  Youtube,
  Camera,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "arul.ui.dev@gmail.com",
    href: "mailto:arul.ui.dev@gmail.com",
    icon: Mail,
    gradient: "from-orange-500 to-yellow-500",
    description: "Best way to reach me for project inquiries.",
  },
  {
    label: "Twitter",
    value: "@imarulkumar1",
    href: "https://twitter.com/@imarulkumar1",
    icon: Twitter,
    gradient: "from-sky-400 to-blue-500",
    description: "Follow for tech tips and updates.",
  },
  {
    label: "GitHub",
    value: "arulkumar-lab",
    href: "https://github.com/arulkumar-lab",
    icon: Github,
    gradient: "from-gray-600 to-gray-800",
    description: "100% open source code — browse and contribute.",
  },
  {
    label: "YouTube",
    value: "imarulkumar",
    href: "https://www.youtube.com/user/imarulkumar",
    icon: Youtube,
    gradient: "from-red-500 to-rose-600",
    description: "Video tutorials and tech walkthroughs.",
  },
  {
    label: "Pexels Photography",
    value: "arul-ui-2759067",
    href: "https://www.pexels.com/@arul-ui-2759067",
    icon: Camera,
    gradient: "from-green-500 to-teal-500",
    description: "Photography portfolio — free stock images.",
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<FormState>("idle");

  const validate = () => {
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.description.trim())
      newErrors.description = "Message is required.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof typeof form]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    // Simulate network request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setForm({ name: "", email: "", description: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="tag mb-4 inline-flex">Contact</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let&apos;s{" "}
              <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Have anything to say? Whether it&apos;s a project inquiry, a
              question about an article, or just a friendly hello — I&apos;d love to
              hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                      Send a message
                    </h2>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      I&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                </div>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Message sent!
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 max-w-xs">
                      Thanks for reaching out. I&apos;ll be in touch shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="btn-secondary mt-2"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`input-field ${errors.name ? "border-red-400 focus:ring-red-400" : ""}`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle size={12} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`input-field ${errors.email ? "border-red-400 focus:ring-red-400" : ""}`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle size={12} />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Tell me about your project or question..."
                        className={`input-field resize-none ${errors.description ? "border-red-400 focus:ring-red-400" : ""}`}
                      />
                      {errors.description && (
                        <p className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle size={12} />
                          {errors.description}
                        </p>
                      )}
                    </div>

                    {/* Error state */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                        <AlertCircle size={16} />
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {status === "submitting" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar: contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Location / availability */}
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Quick Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <MapPin size={15} className="text-sky-500 flex-shrink-0" />
                    Glasgow, Scotland
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <Clock size={15} className="text-sky-500 flex-shrink-0" />
                    GMT / BST timezone
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    Open to new opportunities
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Find me on
                </h3>
                <div className="space-y-3">
                  {contactLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={
                          link.href.startsWith("mailto:") ? "_self" : "_blank"
                        }
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all duration-200 group"
                      >
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-sm flex-shrink-0`}
                        >
                          <Icon size={15} className="text-white" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                            {link.label}
                          </div>
                          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200">
                            {link.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
