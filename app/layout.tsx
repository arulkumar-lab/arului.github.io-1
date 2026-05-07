import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { ThemeProvider } from "@/component/ThemeProvider";
import { Navbar } from "@/component/NavBar";
import { Footer } from "@/component/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arul | UI Developer & Full-Stack Engineer",
    template: "%s | Arul",
  },
  description:
    "Personal portfolio and blog of Arul — a UI Developer and Full-Stack Engineer based in Glasgow. Sharing insights on Java, JavaScript, React, cloud infrastructure and more.",
  keywords: [
    "Arul",
    "UI Developer",
    "Full Stack Engineer",
    "Java",
    "JavaScript",
    "React",
    "Glasgow",
    "Portfolio",
    "Blog",
  ],
  authors: [{ name: "Arul", url: "https://arului.github.io" }],
  creator: "Arul",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://arului.github.io",
    title: "Arul | UI Developer & Full-Stack Engineer",
    description:
      "Personal portfolio and blog of Arul — UI Developer based in Glasgow.",
    siteName: "Arul UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arul | UI Developer & Full-Stack Engineer",
    description: "Personal portfolio and blog of Arul.",
    creator: "@imarulkumar1",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          {/* Ambient gradient blobs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky-500/5 dark:bg-sky-500/10 blur-3xl" />
            <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl" />
          </div>

          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
