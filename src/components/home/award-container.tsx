import { cn } from "@/lib/utils";
import Image from "next/image";

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
  const box = "relative mb-2 aspect-square h-16 w-16";

  return (
    <div className={box}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover"
        // sizes="(max-width: 768px) 112px, 128px"
      />
    </div>
  );
}

const AwardComponent = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        " w-full overflow-hidden bg-gradient-to-t  from-black/80 via-black/40 to-transparent backdrop-blur-md",
        className,
      )}
    >
      <div className="relative z-10 mx-auto max-w-6xl py-5 px-5 sm:px-8 lg:px-10">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-10 sm:grid-cols-4">
          {awards.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-around text-center"
            >
              <AwardLogo item={item} />
              <p className="max-w-[14rem] text-sm leading-snug text-white/80 sm:text-sm">
                {item.line1}
              </p>
              <p className="max-w-[14rem] text-sm leading-snug text-white/80 sm:text-sm">
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
