import { useTranslations } from "next-intl";
import Image from "next/image";
import logo_white from "../../../public/logo-white.png";

import {
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="w-full border-t border-black bg-[#765032]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-24 gap-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src={logo_white}
            alt="logo"
            width={300}
            height={50}
            className="w-full h-full"
          />
        </div>

        {/* Center: Copyright */}

        {/* Right: Social Media */}
        <div className="flex gap-12">
          <div className="flex flex-col gap-2 text-white">
            <p>Mail: thehomepizzapq@gmail.com</p>
            <p>Tel: +(84) 988 37 37 93</p>
            <p>Address:</p>
            <p> 129 Tran Hung Dao, Duong Dong, Phu Quoc</p>
            <p>12 - 14 Tran Phu, Tan Thanh, Nha Trang</p>
          </div>
          <div className="flex flex-col items-center md:items-start  gap-2">
            <span className="text-base mr-2 font-medium text-white">
              {t("followUs")}
            </span>
            <div className="flex gap-3">
              {/* <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-red-600 transition-colors"
            >
              <FaYoutube className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a> */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 transition-colors"
              >
                <FaFacebook className="h-5 w-5" color="white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-pink-500 transition-colors"
              >
                <FaInstagram className="h-5 w-5" color="white" />
              </a>
              {/* <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-red-600 transition-colors"
            >
              <FaPinterest className="h-5 w-5" />
            </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-2 text-white">
        <span className="text-sm">© 2026 The Home Pizza</span>
      </div>
    </footer>
  );
}
