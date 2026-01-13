"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
// import { LanguageSelector } from "./language-selector";
import { usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../public/logo.png";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerPortal,
  DrawerTrigger,
} from "../ui/drawer";
import LocaleSwitcher from "./locale-switcher";

export default function Header({ currentLocale }: { currentLocale: string }) {
  const pathName = usePathname();
  const t = useTranslations("header");
  const [scrolled, setScrolled] = useState(false);

  const aboutHref = `/${currentLocale}/about-us`;
  const bookingHref = `/${currentLocale}/booking`;
  const menuHref = `/${currentLocale}/menu`;
  const locationsHref = `/${currentLocale}/locations`;
  const hiringHref = `/${currentLocale}/hiring`;

  const navItem = [
    {
      href: aboutHref,
      title: t("nav.aboutHome"),
    },
    // {
    //   href: bookingHref,
    //   title: t("nav.booking"),
    // },
    {
      href: menuHref,
      title: t("nav.menu"),
    },
    // {
    //   href: locationsHref,
    //   title: t("nav.store"),
    // },
    {
      href: hiringHref,
      title: t("nav.hiring"),
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
    <header
      // className="bg-transparent"
      className={`w-full z-50  h-0 ${
        scrolled ? "sticky top-0" : "absolute inset-x-0 top-0"
      }`}
    >
      <div
        className={`flex mx-auto h-16 items-center justify-between px-4 transition-all duration-1000 ${
          scrolled ? "bg-primary shadow-xl" : "bg-transparent shadow-2xl"
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
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="w-full h-full"
            />
          </Link>
        </div>

        <nav className="flex-2/4 hidden md:flex sm:justify-around">
          {navItem.map((nav) => (
            <NavItem
              key={nav.href}
              pathName={`/${currentLocale}${pathName}`}
              href={nav.href}
            >
              {nav.title}
            </NavItem>
          ))}
        </nav>

        {/* Right: Language Selector & Booking Button */}
        <div className="flex-1/4 flex items-center justify-end gap-2">
          {/* <LanguageSelector currentLocale={currentLocale} /> */}
          <LocaleSwitcher />
          <Link
            href={`/${currentLocale}/booking`}
            className="hidden sm:block bg-black text-white px-4 w-32 min-w-20 py-2 rounded-4xl hover:bg-gray-800 transition-colors text-center"
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
      className={`${className} text-center text-black text-base lg:text-xl transition-colors font-raleway font-semibold sm:min-w-26 lg:min-w-36  ${
        isActive
          ? "underline text-gray-900 underline-offset-6 font-extrabold"
          : "hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
};

const HamburgerButton = ({
  navItems,
  pathName,
  currentLocale,
}: {
  navItems: { href: string; title: string }[];
  pathName: string;
  currentLocale: string;
}) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("header");

  return (
    <div className="block md:hidden flex-1/4">
      <Drawer direction="left" open={open}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="bg-transparent border-none"
            onClick={() => setOpen(!open)}
          >
            <RxHamburgerMenu size={20} />
          </Button>
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerContent className="!w-[100vw] bg-primary border-none">
            <DrawerClose
              className="w-[20px] fixed top-4 right-4"
              onClick={() => setOpen(false)}
            >
              <MdClose size={30} />
            </DrawerClose>
            {/* <DrawerDescription> */}
            <nav className="flex flex-col items-center justify-center gap-8 h-dvh">
              {navItems.map((nav) => (
                <NavItem
                  className="!text-2xl"
                  key={nav.href}
                  pathName={pathName}
                  href={nav.href}
                  onClick={() => setOpen(false)}
                >
                  {nav.title}
                </NavItem>
              ))}
              {/* <Link
                className="text-center text-gray-700 text-2xl transition-colors font-playfair-display sm:min-w-20 lg:min-w-28"
                href={`/${currentLocale}/booking`}
              >
                {t("bookTable")}
              </Link> */}
            </nav>
            {/* </DrawerDescription> */}
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </div>
  );
};
