"use client";

import Link from "next/link";
import { Twitter, Mail, Youtube, Github, Camera, ArrowUp, Code2 } from "lucide-react";

const socialLinks = [
  {
    href: "https://twitter.com/@imarulkumar1",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "mailto:arul.ui.dev@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://www.pexels.com/@arul-ui-2759067",
    label: "Pexels Photography",
    icon: Camera,
  },
  {
    href: "https://www.youtube.com/user/imarulkumar",
    label: "YouTube",
    icon: Youtube,
  },
  {
    href: "https://github.com/arulkumar-lab",
    label: "GitHub",
    icon: Github,
  },
];

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-purple-600 shadow-lg">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg">
                <span className="gradient-text">A R U L</span>
                <span className="text-gray-500 dark:text-gray-400 font-light text-sm ml-1">
                  UI
                </span>
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              UI Developer & Full-Stack Engineer from Glasgow. Passionate about
              building great web experiences from front to back.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-sky-100 dark:hover:bg-sky-900/40 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-200"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-200/60 dark:border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Developed by{" "}
            <span className="text-sky-500 font-medium">Arul</span>. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={12} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
