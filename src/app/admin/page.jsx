
"use client"
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
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <LoadingSpinner/>
      </div>
    );
  }

  return (
    <div className="h-full w-full px-8 md:px-12 xl:px-0 py-28 max-w-screen-xl m-auto">
    <h1 className="text-2xl  mb-8 lg:text-5xl text-center font-bold">WELCOME TO THE <span className=" bg-radial-gradient bg-clip-text text-transparent">ADMIN PAGE</span></h1>
    <p className="text-center text-sm font-light mt-4 text-foreground">
          Manage User Reviews and Pictures for your Services here.
        </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 h-96">
      <Link
        href="/admin/reviews"
        className="relative group block p-2 h-full w-full"
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence>
          {hoveredIndex === 0 && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-primary block rounded-3xl"
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
        <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
          <div className="relative z-50">
            <div className="p-4">
              <h4 className="bg-radial-gradient bg-clip-text text-transparent font-bold tracking-wide mt-4 text-7xl">Reviews</h4>
              <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                Manage and moderate user reviews
              </p>
            </div>
          </div>
        </div>
      </Link>

      <Link
        href="/admin/pictures"
        className="relative group block p-2 h-full w-full"
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence>
          {hoveredIndex === 1 && (
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
        <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
          <div className="relative z-50">
            <div className="p-4">
            <h4 className="bg-radial-gradient bg-clip-text text-transparent font-bold tracking-wide mt-4 text-7xl">Pictures</h4>
              <p className="mt-8 text-foreground tracking-wide leading-relaxed text-sm font-light">
                Upload and manage gallery images
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>

    <div className="bg-foreground w-full h-1 lg:mt-8 mt-44"></div>
  </div>
  );
}