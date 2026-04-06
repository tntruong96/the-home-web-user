export type MenuLandingCategoryIcon = "starAnise" | "fish" | "shrimp" | "clam";

export type MenuLandingCategory = {
  href: string;
  label: string;
  icon: MenuLandingCategoryIcon;
};

export type MenuFeaturedDish = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  nameVi: string;
  nameEn?: string;
  description?: string;
  price: string;
  badge?: string;
  /** Small image (immersive layout top row) */
  thumbSrc?: string;
  /** Bottom strip image (immersive layout) */
  footSrc?: string;
};

export const defaultMenuCategories: MenuLandingCategory[] = [
  {
    href: "/vietnamese-specialties",
    label: "Đặc sản Việt",
    icon: "starAnise",
  },
  { href: "/menu", label: "Full menu", icon: "fish" },
  { href: "/menu", label: "Salad & Khai vị", icon: "shrimp" },
  { href: "/menu", label: "Pizza classic", icon: "clam" },
];

export const defaultFeaturedDish: MenuFeaturedDish = {
  href: "/menu",
  imageSrc: "/menu/northern-1.webp",
  imageAlt: "Pizza vịt H'Mông",
  nameVi: "Pizza Vịt H'Mông",
  nameEn: "H'Mong Duck Pizza",
  description:
    "Bột pizza Ý, phô mai mozzarella, thịt vịt H'Mông chậm nấu và rau thơm vùng cao.",
  price: "280",
  badge: "Best Seller",
  thumbSrc: "/menu/cover-1.webp",
  footSrc: "/menu/main.webp",
};
