"use client";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const instagramPosts = [
  { src: "/location-1.avif", alt: "Citrus cocktail on a table" },
  { src: "/location-1.avif", alt: "Cozy outdoor dining space" },
  { src: "/location-2.avif", alt: "Indoor dining ambience" },
  { src: "/location-1.avif", alt: "Central Vietnam-inspired pizza" },
  { src: "/location-1.avif", alt: "Southern Vietnam-inspired pizza" },
  { src: "/location-1.avif", alt: "Northern Vietnam-inspired pizza" },
  { src: "/location-1.avif", alt: "Restaurant interior lighting" },
  { src: "/location-1.avif", alt: "Warm bar counter setting" },
  { src: "/location-1.avif", alt: "Brand monogram" },
];

const youtubeVideos = [
  {
    src: "/location-1.avif",
    alt: "Wood-fired pizza oven",
    title: "",
  },
  {
    src: "/location-1.avif",
    alt: "Chef stretching pizza dough",
    title: "Making a pizza",
  },
  {
    src: "/location-2.avif",
    alt: "Cozy dining room setup",
    title: "",
  },
];

const SocialContainer = () => {
  const t = useTranslations();
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12 md:py-16">
      <div className="flex flex-col gap-6 lg:gap-8">
        <div className="grid gap-4 lg:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 md:gap-3 mb-4">
              <span className="text-xl uppercase tracking-wide text-neutral-600 font-playfair-display">
                {t("main.follow")}
              </span>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xl font-semibold text-neutral-900 transition hover:opacity-80 font-be-vietnam-pro"
              >
                <span>Instagram</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
              {instagramPosts.map((post) => (
                <a
                  key={post.alt}
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-[200px] w-full"
                >
                  <div className="relative aspect-square overflow-hidden bg-neutral-100 h-[200px] w-full">
                    <Image
                      src={post.src}
                      alt={post.alt}
                      fill
                      sizes="(min-width: 1024px) 200px, (min-width: 768px) 25vw, 45vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 ">
            <div className="flex items-center gap-2 md:gap-3 mb-4">
              <span className="text-xl uppercase tracking-wide text-neutral-600 font-playfair-display">
                {t("main.subscribe")}
              </span>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-lg font-semibold text-neutral-900 transition hover:opacity-80"
              >
                <span>Youtube</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
            <div className="flex flex-col gap-3 lg:gap-4">
              {youtubeVideos.map((video) => (
                <a
                  key={video.alt}
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block overflow-hidden  bg-neutral-100 h-[200px] sm:h-[300px] md:h-[200px]"
                >
                  <div className="relative aspect-square h-[200px] sm:h-[300px] md:h-[200px] w-full">
                    <Image
                      src={video.src}
                      alt={video.alt}
                      fill
                      sizes="(min-width: 1024px) 320px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/0" />

                    {/* {video.title && (
                      <p className="absolute bottom-4 left-4 right-4 text-lg font-medium text-white drop-shadow-lg">
                        {video.title}
                      </p>
                    )} */}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center bg-white/85 text-neutral-900 shadow-lg rounded-full transition duration-200 group-hover:scale-110">
                      <Play className="h-5 w-5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialContainer;
