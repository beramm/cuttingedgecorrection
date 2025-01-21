"use client";
import { useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../libs/utils";

const LoadingSkeleton = () => {
  const getRandomHeight = () => {
    const heights = ["h-64", "h-72", "h-80"];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  const Column = () => (
    <div className="grid gap-10">
      {[1, 2, 3].map((_, idx) => (
        <div
          key={idx}
          className={cn(
            "w-full rounded-lg bg-gray-200 animate-pulse",
            getRandomHeight()
          )}
        />
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10">
      <Column />
      <Column />
      <Column />
    </div>
  );
};

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const isInView = useInView(gridRef, { margin: "100% 0px" });
  
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

  const ImageComponent = ({ src, idx }: { src: string; idx: number }) => (
    <Image
      src={src}
      className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
      height={400}
      width={400}
      alt={`Gallery image ${idx + 1}`}
      onError={(e: any) => {
        e.target.src = '/cec_nocolor_logo.png';
      }}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
      priority={idx === 0}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full max-w-screen-xl m-auto", className)}
      ref={gridRef}
    >
      {isInView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10">
          <div className="grid gap-10">
            {firstPart.map((el, idx) => (
              <motion.div
                style={{ y: translateFirst }}
                key={"grid-1" + idx}
              >
                <ImageComponent src={el} idx={idx} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {secondPart.map((el, idx) => (
              <motion.div
                style={{ y: translateSecond }}
                key={"grid-2" + idx}
              >
                <ImageComponent src={el} idx={idx + third} /> 
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {thirdPart.map((el, idx) => (
              <motion.div
                style={{ y: translateThird }}
                key={"grid-3" + idx}
              >
                <ImageComponent src={el} idx={idx + (2 * third)} />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
};

export default ParallaxScroll;