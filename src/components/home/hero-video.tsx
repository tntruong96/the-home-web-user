"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AwardComponent from "./award-container";
import TopTextTitle from "./top-text-title";
import { ChevronUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideo() {
  const t = useTranslations("hero");
  const router = useRouter();
  const params = useParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const awardRef = useRef<HTMLDivElement | null>(null);

  const locale = typeof params?.locale === "string" ? params.locale : "en";

  // Video configuration - replace with your actual video path
  const videoSrc = "/pizza.mp4"; // Replace with actual video path

  useEffect(() => {
    // Check if video is already ready (cached)
    if (videoRef.current) {
      if (videoRef.current.readyState >= 2) {
        // HAVE_CURRENT_DATA or higher means video is ready
        // Defer setState to avoid cascading renders inside effect
        setTimeout(() => setIsVideoLoading(false), 0);
      } else {
        // Try to play video
        videoRef.current.play().catch((error) => {
          console.error("Error autoplaying video:", error);
          setVideoError(true);
          setIsVideoLoading(false);
        });
      }
    }
  }, []);

  useEffect(() => {
    // Handle scroll-to-top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const content = contentRef.current;
      const award = awardRef.current;
      if (!container || !content || !award) return;
      // 1. Hiệu ứng ghim (Pin) Container
      // Khi cuộn vào vùng này, container sẽ đứng yên cho đến khi scroll hết nội dung
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=30%", // Độ dài quãng đường scroll (càng lớn scroll càng lâu)
        pin: true,
        scrub: true,
      });

      // 2. Hiệu ứng nội dung chạy lên
      gsap.fromTo(
        contentRef.current,
        { y: "0vh" }, // Bắt đầu ở dưới cùng màn hình
        {
          y: "-60%", // Chạy ngược lên trên hẳn màn hình
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
          },
        },
      );
      // 3) Award ở đáy: hiện dần khi gần cuối đoạn scroll trong hero
      gsap.fromTo(
        awardRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top+15% top", // bắt đầu hiện
            end: "top+=20% top", // hiện full
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleVideoCanPlay = () => {
    setIsVideoLoading(false);
  };

  return (
    <main>
      {/* Loading Screen */}
      {isVideoLoading && !videoError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900 transition-opacity duration-500">
          <div className="flex flex-col items-center gap-4">
            {/* Loading Spinner */}
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-neutral-700 border-t-green-600" />
            </div>
            {/* Loading Text */}
            <p className="text-sm font-medium text-neutral-400 md:text-base">
              {t("loading") || "Loading..."}
            </p>
          </div>
        </div>
      )}
      {/* Main Sticky Section */}
      <section
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            onCanPlay={handleVideoCanPlay}
            onLoadedData={handleVideoCanPlay}
            onPlaying={() => setIsVideoLoading(false)}
            onError={() => {
              setVideoError(true);
              setIsVideoLoading(false);
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Overlay để text dễ đọc hơn */}
          <div className="absolute inset-0 bg-black/40" />
          <Image
            src={"/vector/map-vector.png"}
            alt="map"
            className="object-contain z-100 hidden md:block md:!-left-[150px] lg:!-left-[200px]"
            fill
          />
        </div>

        {/* Nội dung chạy lên */}
        <div
          ref={contentRef}
          className=" h-[120vh] relative z-10 flex flex-col items-center justify-center space-y-20 text-white"
        >
          <section className={cn(" h-screen bg-center bg-no-repeat bg-cover")}>
            <TopTextTitle />
          </section>
        </div>
        <div
          ref={awardRef}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
        >
          <AwardComponent className="pointer-events-auto" />
        </div>
      </section>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-50 border rounded-full bg-transparent p-3 shadow-lg transition hover:opacity-80 md:bottom-8 md:right-4 md:p-2 "
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5 text-white md:h-6 md:w-6" />
        </button>
      )}
    </main>
  );
}
