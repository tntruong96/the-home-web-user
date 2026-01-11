"use client";

import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroVideo() {
  const t = useTranslations("hero");
  const router = useRouter();
  const params = useParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const locale = typeof params?.locale === "string" ? params.locale : "en";

  // Video configuration - replace with your actual video path
  const videoSrc = "/mock.mp4"; // Replace with actual video path
  const fallbackImage = "/main-bg.webp";
  const foodImage = "/sample.avif";

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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookTable = () => {
    router.push(`/${locale}/booking`);
  };

  const handleBringHome = () => {
    router.push(`/${locale}/store`);
  };

  const handleVideoCanPlay = () => {
    setIsVideoLoading(false);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
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

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            poster={fallbackImage}
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
        ) : (
          <Image
            src={fallbackImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        )}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content Container */}
      <div
        className={`relative z-10 flex min-h-screen flex-col transition-opacity duration-700 md:flex-row ${
          isVideoLoading && !videoError ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Left Side - Text Content */}
        <div className="flex flex-1 flex-col justify-center px-6 py-12 md:px-12 lg:px-16">
          <div className="max-w-4xl flex flex-col items-center justify-center md:block ">
            <h1 className="mb-6 text-xl md:text-4xl font-bold leading-tight text-white font-playfair-display text-center md:text-left">
              <span className="block">{t("headline1")}</span>
              <span className="block">{t("headline2")}</span>
            </h1>
            <Link href={"/booking"}>
              <Button
                onClick={handleBookTable}
                className="mb-4 h-12 rounded-full bg-green-600 px-8 text-base font-semibold text-white transition hover:bg-green-700  md:text-lg"
              >
                {t("bookTableButton")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-black p-3 shadow-lg transition hover:opacity-80 md:bottom-8 md:right-4 md:p-2"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5 text-white md:h-6 md:w-6" />
        </button>
      )}
    </section>
  );
}
