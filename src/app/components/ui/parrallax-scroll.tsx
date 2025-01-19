"use client";
import { useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../libs/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const isInView = useInView(gridRef, { margin: "100% 0px" });
  const [loadedImages, setLoadedImages] = useState<number[]>([]);
  
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const ImageComponent = ({ src, idx }: { src: string; idx: number }) => {
    const [isLoading, setIsLoading] = useState(true);
    const shouldLoad = idx < 6 || loadedImages.includes(Math.floor(idx / 6) - 1);

    return shouldLoad ? (
      <div className={cn(
        "relative h-80 w-full rounded-lg overflow-hidden",
        isLoading ? "bg-gray-200 animate-pulse" : ""
      )}>
        <Image
          src={src}
          className={cn(
            "object-cover object-left-top transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          fill
          alt={`Gallery image ${idx + 1}`}
          onError={(e: any) => {
            e.target.src = '/cec_nocolor_logo.png';
          }}
          onLoad={() => {
            setIsLoading(false);
            if (idx % 6 === 5) {
              setLoadedImages(prev => {
                if (prev.includes(Math.floor(idx / 6))) return prev;
                return [...prev, Math.floor(idx / 6)];
              });
            }
          }}
          loading={idx < 6 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    ) : null;
  };

  const Column = ({ 
    images, 
    translation,
    startIdx 
  }: { 
    images: string[], 
    translation: any,
    startIdx: number 
  }) => (
    <div className="grid gap-10">
      {images.map((el, idx) => (
        <motion.div
          style={{ y: translation }}
          key={`grid-${startIdx}-${idx}`}
          className="relative"
        >
          <ImageComponent src={el} idx={startIdx + idx} />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full max-w-screen-xl m-auto", className)}
      ref={gridRef}
    >
      {isInView && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10">
          <Column images={firstPart} translation={translateFirst} startIdx={0} />
          <Column images={secondPart} translation={translateSecond} startIdx={third} />
          <Column images={thirdPart} translation={translateThird} startIdx={2 * third} />
        </div>
      )}
    </div>
  );
};

export default ParallaxScroll;