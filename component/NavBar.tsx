"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Github } from "lucide-react";
import { Logo } from "@/component/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto",
        scrolled
          ? "glass border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <Logo size={36} className="group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
            <span className="font-bold text-lg tracking-tight">
              <span className="gradient-text">A R U L</span>
              <span className="text-gray-500 dark:text-gray-400 font-light text-sm ml-1">
                UI
              </span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-sky-600 dark:text-sky-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-sky-50 dark:bg-sky-900/30 border border-sky-200/60 dark:border-sky-700/40"
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <a
              href="https://github.com/arulkumar-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 pointer-events-auto cursor-pointer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              type="button"
              className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 pointer-events-auto cursor-pointer active:scale-95"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )
              ) : (
                <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse" />
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 pointer-events-auto cursor-pointer active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu - Side drawer from right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 pointer-events-auto cursor-default"
              aria-hidden="true"
            />
            
            {/* Slide-in menu from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed top-16 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 border-l border-gray-200/50 dark:border-gray-700/50 shadow-xl z-50 overflow-y-auto pointer-events-auto"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer pointer-events-auto block",
                        isActive
                          ? "bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-700/40"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <a
                  href="https://github.com/arulkumar-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-all duration-200 cursor-pointer pointer-events-auto"
                >
                  <Github size={16} />
                  GitHub Repository
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
