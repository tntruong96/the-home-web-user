export type SocialIgCell = {
  src: string;
  alt: string;
  overlay?: "play" | "pin";
};

export type SocialFbPost = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  body: string;
};

export const defaultSocialUrls = {
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
} as const;

/** 2×3 grid for teal editorial layout */
export const defaultTealInstagramCells: SocialIgCell[] = [
  { src: "/menu/cover.webp", alt: "Thực đơn" },
  { src: "/menu/pasta/pas-1.webp", alt: "Món Ý", overlay: "pin" },
  { src: "/human-1.webp", alt: "Không gian nhà hàng" },
  { src: "/menu/pasta/pas-2.webp", alt: "Pasta", overlay: "play" },
  { src: "/menu/main.webp", alt: "Bếp lò" },
  { src: "/menu/classic/classic-1.webp", alt: "Pizza", overlay: "play" },
];

/** 3×3 grid for split layout */
export const defaultSplitInstagramCells: SocialIgCell[] = [
  { src: "/menu/salad/salad-01.webp", alt: "Salad" },
  { src: "/menu/northern-1.webp", alt: "Đặc sản", overlay: "pin" },
  { src: "/human.webp", alt: "Không gian" },
  { src: "/menu/pasta/pas-3.webp", alt: "Pasta", overlay: "play" },
  { src: "/menu/central-1.webp", alt: "Món Miền Trung" },
  { src: "/menu/southern-1.webp", alt: "Món Miền Nam" },
  { src: "/menu/classic/classic-2.webp", alt: "Pizza classic" },
  { src: "/menu/drink/drink-1.webp", alt: "Đồ uống" },
  { src: "/menu/desert/des-1.webp", alt: "Tráng miệng", overlay: "play" },
];

export const defaultSplitFacebookPosts: SocialFbPost[] = [
  {
    imageSrc: "/human-1.webp",
    imageAlt: "Bữa tối tại Nhà",
    title: "Ấm cúng giữa lòng phố",
    body: "Ánh đèn vàng, bàn gỗ và những câu chuyện nhỏ — Nhà mong mỗi lần bạn ghé là một lần về nhà.",
  },
  {
    imageSrc: "/menu/main.webp",
    imageAlt: "Bếp Nhà",
    title: "Từ lò than đến bàn tiệc",
    body: "Đội ngũ Nhà chọn lựa nguyên liệu theo mùa, để mỗi món mang hương vị trung thực nhất.",
  },
  {
    imageSrc: "/menu/pasta/pas-1.webp",
    imageAlt: "Pizza đặc sản",
    title: "Pizza và câu chuyện Việt",
    body: "Kết hợp tay nghề Ý và nguyên liệu bản địa — hành trình pizza xuyên Việt trong từng lát cắt.",
  },
];
