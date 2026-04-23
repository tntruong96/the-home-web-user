"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo_white from "../../../public/logo-white.png";
import { Button } from "../ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import LocaleSwitcher from "./locale-switcher";

export default function Header({ currentLocale }: { currentLocale: string }) {
  const pathName = usePathname();
  const t = useTranslations("header");
  const [scrolled, setScrolled] = useState(false);

  const aboutHref = `/${currentLocale}/about-us`;
  const menuHref = `/${currentLocale}/menu`;
  const humanHref = `/${currentLocale}/human`;

  const navItem = [
    {
      href: aboutHref,
      title: t("nav.aboutHome"),
    },
    {
      href: menuHref,
      title: t("nav.menu"),
    },
    {
      href: humanHref,
      title: t("nav.human"),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50  h-0 `}>
      <div
        className={`flex mx-auto h-10 items-center justify-between px-4 transition-all duration-1000 relative ${
          scrolled
            ? " bg-gradient-to-t from-black/50 via-black/40 to-transparent backdrop-blur-md shadow-2xs"
            : "bg-transparent shadow-2xl"
        }`}
      >
        {/* Mobile Hamburger */}
        <HamburgerButton
          navItems={navItem}
          pathName={`/${currentLocale}${pathName}`}
          currentLocale={currentLocale}
        />

        {/* Center: Logo */}
        <div className="flex-2/4 md:flex-1/4  flex justify-center">
          <Link href={`/${currentLocale}`} className="flex items-center">
            <Image
              src={logo_white}
              alt="logo"
              width={150}
              height={150}
              className="w-full h-full"
            />
          </Link>
        </div>

        <nav className="flex-2/4 hidden lg:flex sm:justify-center md:gap-4 lg:gap-8">
          {navItem.map((nav) => (
            <NavItem
              key={nav.href}
              pathName={`/${currentLocale}${pathName}`}
              href={nav.href}
            >
              {nav.title}
            </NavItem>
          ))}
          <LocaleSwitcher />
        </nav>

        {/* Right: Language Selector & Booking Button */}
        <div className="flex-1/4 flex items-center justify-end gap-2">
          {/* <LanguageSelector currentLocale={currentLocale} /> */}
          <Link
            target="_blank"
            href={`https://booking.ipos.vn/public/booking/878f61f7-5486-462a-9a48-43bd4b316758?source=IFRAME&css=overflow-y:hidden;`}
            className="hidden md:block bg-transparent border border-white text-white font-semibold md:px-2 lg:px-12 md:w-32  lg:w-48 min-w-20   hover:bg-gray-800 transition-colors text-center"
          >
            {t("bookTable")}
          </Link>
        </div>
      </div>
    </header>
  );
}

const NavItem = ({
  href,
  children,
  onClick,
  pathName,
  className,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  pathName: string;
  className?: string;
}) => {
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} text-center text-white text-sm 2xl:text-base transition-colors font-raleway font-light sm:min-w-26 lg:min-w-36 flex items-center justify-around  ${
        isActive
          ? "underline underline-offset-6 font-extrabold"
          : "hover:opacity-70"
      }`}
    >
      {children}
    </Link>
  );
};

export const HamburgerButton = ({
  navItems,
  pathName,
}: {
  navItems: { href: string; title: string }[];
  pathName: string;
  currentLocale: string;
}) => {
  const t = useTranslations("header");

  return (
    <div className="block lg:hidden flex-1/4">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="bg-transparent border-none hover:bg-transparent cursor-pointer"
          >
            <RxHamburgerMenu color="white" size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          showCloseButton={false}
          className="border-none  bg-gradient-to-t  from-black/80 via-black/40 to-transparent backdrop-blur-md"
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((nav) => (
                <NavItem
                  className=" lg:!text-2xl"
                  key={nav.href}
                  pathName={pathName}
                  href={nav.href}
                >
                  {nav.title}
                </NavItem>
              ))}
              <Link
                target="_blank"
                href={`https://booking.ipos.vn/public/booking/878f61f7-5486-462a-9a48-43bd4b316758?source=IFRAME&css=overflow-y:hidden;`}
                className="block bg-transparent border border-white text-white md:px-2 lg:px-12 w-48 min-w-20   hover:bg-gray-800 transition-colors text-center"
              >
                {t("bookTable")}
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
