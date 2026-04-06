import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type AwardImage = {
  kind: "image";
  src: string;
  alt: string;
  line1: string;
  line2: string;
};

type AwardItem = AwardImage;

const awards: AwardItem[] = [
  {
    kind: "image",
    src: "/aw-23.webp",
    alt: "Tripadvisor Travelers' Choice 2023",
    line1: "Chứng nhận Dịch vụ Xuất sắc",
    line2: "Năm 2023",
  },
  {
    kind: "image",
    src: "/aw-24.webp",
    alt: "Tripadvisor Travelers' Choice 2024",
    line1: "Chứng nhận Dịch vụ Xuất sắc",
    line2: "Năm 2024",
  },
  {
    kind: "image",
    src: "/aw-25.webp",
    alt: "Tripadvisor Travelers' Choice 2025",
    line1: "Chứng nhận Dịch vụ Xuất sắc",
    line2: "Năm 2025",
  },
  {
    kind: "image",
    src: "/aw-rcm.webp",
    alt: "Recommended Restaurant",
    line1: 'Chứng nhận "Recommended"',
    line2: "từ Restaurant Guru năm 2025",
  },
];

function AwardLogo({ item }: { item: AwardItem }) {
  const box = "relative mx-auto mb-5 h-24 w-32 sm:h-28 sm:w-64 md:h-32 md:w-64";

  return (
    <div className={box}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 112px, 128px"
      />
    </div>
  );
}

const AwardComponent = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-12 sm:py-14 md:py-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-md",

        // "[background-image:url('/bg-bl.webp')]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {awards.map((item, index) => (
            <li key={index} className="flex flex-col items-center text-center">
              <AwardLogo item={item} />
              <p className="max-w-[14rem] text-base leading-snug text-white/80 sm:text-sm">
                {item.line1}
              </p>
              <p className="mt-1 max-w-[14rem] text-base leading-snug text-white/80 sm:text-sm">
                {item.line2}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AwardComponent;
