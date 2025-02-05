"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/icon";

export default function AdminPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <title>Admin Dashboard - Cutting Edge Correction</title>
      <meta name="description" content="Admin page dashboard" />

      <div className="min-h-screen w-full mt-14 px-8 md:px-12 xl:px-0 py-16 max-w-screen-xl m-auto flex flex-col">
        <h1 className="hidden md:block text-2xl mb-8 lg:text-6xl text-center font-bold">
          WELCOME TO THE{" "}
          <span className="bg-radial-gradient bg-clip-text text-transparent">
            ADMIN PAGE
          </span>
        </h1>

        {/* Mobile Heading */}
        <div className="flex md:hidden flex-col items-center justify-center text-center font-bold text-3xl sm:text-4xl">
          <h1>WELCOME TO THE</h1>
          <h1 className="bg-radial-gradient bg-clip-text text-transparent">
            ADMIN PAGE
          </h1>
        </div>

        <p className="text-center text-xs sm:text-sm font-light mt-4 text-foreground">
          Manage User Reviews, Pictures, Users, and Blogs here.
        </p>

        {/* ✅ Updated Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 flex-grow">
          {[
            { name: "Reviews", href: "/admin/reviews", description: "Manage and moderate user reviews" },
            { name: "Images", href: "/admin/images", description: "Upload and manage gallery images" },
            { name: "Users", href: "/admin/users", description: "View and broadcast to joined users" },
            { name: "Blogs", href: "/admin/blogs", description: "Manage blog posts and content" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex items-center justify-center">
                <div className="relative z-50">
                  <div className="p-4 text-center">
                    {/* ✅ Reduced Text Size for Mobile */}
                    <h4 className="bg-radial-gradient bg-clip-text text-transparent font-bold tracking-wide mb-4 p-2 text-3xl sm:text-5xl lg:text-6xl">
                      {item.name}
                    </h4>
                    <p className="mt-4 sm:mt-8 text-foreground tracking-wide leading-relaxed text-xs sm:text-sm font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-foreground w-full h-1 mt-12"></div>
      </div>
    </>

  );
}