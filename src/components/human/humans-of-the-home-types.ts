export type HumansNavItem = {
  href: string;
  label: string;
};

export type HumansSectionImage = {
  src: string;
  alt: string;
};

export const defaultHumansNav: HumansNavItem[] = [
  { href: "/human", label: "Humans of the Home" },
  { href: "/hiring", label: "Career path" },
  { href: "/hiring", label: "Nhà tìm người" },
];

export const defaultHumansImages: {
  primary: HumansSectionImage;
  secondary: HumansSectionImage;
} = {
  primary: {
    src: "/human.webp",
    alt: "Không gian The Home",
  },
  secondary: {
    src: "/human-1.webp",
    alt: "Không gian nội thất The Home",
  },
};
