"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { value: "en", label: "English" },
  { value: "vi", label: "Tiếng Việt" },
];

export function LanguageSelector({ currentLocale }: { currentLocale: string }) {
  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lang: string) => {
    const segments = pathname.split("/").filter(Boolean);

    // Kiểm tra xem segment đầu tiên có phải là locale không
    const isFirstSegmentLocale = languages.some((l) => l.value === segments[0]);

    if (isFirstSegmentLocale) {
      // Nếu segment đầu tiên là locale, thay thế nó
      segments[0] = lang;
    } else {
      // Nếu không có locale ở đầu, thêm vào đầu
      segments.unshift(lang);
    }

    // Đảm bảo không có locale trùng lặp
    const filteredSegments = segments.filter((segment, index) => {
      if (index === 0) return true; // Giữ lại segment đầu tiên (locale mới)
      return !languages.some((l) => l.value === segment); // Loại bỏ các locale khác
    });

    const newPath = "/" + filteredSegments.join("/");
    router.replace(newPath);
  };

  return (
    <>
      <Select value={currentLocale} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder={t("language")} />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
