import { getLocale } from "next-intl/server";
import Image from "next/image";
import React from "react";

const VietnameseSpecialties = async () => {
  const locale = await getLocale();
  return (
    <section className="relative container mx-auto max-w-3xl">
      {locale === "vi" ? viVer : enVer}
    </section>
  );
};

export default VietnameseSpecialties;

const viVer = (
  <div className="pt-32 pb-12 px-4">
    <div className="absolute top-36 left-4 z-10">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
        CÂU CHUYỆN
      </h1>
      <h1 className="text-4xl sm:text-6xl font-bold text-white">
        ĐẶC SẢN VIỆT
      </h1>
    </div>
    <div className="flex justify-end mt-20 mb-8">
      <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]">
        <Image alt="story" src={"/human.webp"} fill className="object-cover" />
      </div>
    </div>
    <p>
      Ẩm thực Việt Nam được bồi đắp từ chính dải đất trải dài từ ôn đới xuống
      nhiệt đới, sự phân hóa khí hậu Bắc - Nam tạo nên sự khác biệt trong văn
      hóa chế biến và sử dụng nguyên liệu. Chính sự đa dạng ấy trở thành kho
      nguyên liệu phong phú để anh Chủ và đồng đội ở bếp Nhà tìm kiếm cảm hứng,
      chọn lọc và gửi gắm lên đế bánh pizza chuẩn Ý. Từ đó, bản đồ Pizza Đặc Sản
      Việt dần được vẽ nên bằng những hương vị vừa thân quen vừa mới mẻ, nhưng
      luôn bắt nguồn từ mảnh đất và con người Việt Nam.
    </p>
  </div>
);

const enVer = (
  <div className="pt-32 pb-12 px-4">
    <div className="absolute top-36 left-4 z-10">
      <h1 className="text-6xl font-bold mb-4 text-white">JOURNEY OF</h1>
      <h1 className="text-6xl font-bold mb-4 text-white">VIETNAMESE</h1>
      <h1 className="text-6xl font-bold mb-4 text-white">SPECIALTY</h1>
      <h1 className="text-6xl font-bold mb-4 text-white">PIZZA</h1>
    </div>
    <div className="flex justify-end mt-20 mb-8">
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
        <Image alt="story" src={"/human.webp"} fill className="object-cover" />
      </div>
    </div>
    <p>
      Vietnamese cuisine is deeply shaped by the very land it comes from -
      stretching from the temperate to the tropical zone, where the contrast
      between North and South gives rise to distinct culinary cultures and
      ingredient traditions. This natural diversity inspires our chefs to
      thoughtfully reimagine local ingredients on authentic Italian pizza
      crusts. From there, the Vietnamese Specialty Pizza Map unfolds - a
      tapestry of flavors both familiar and new, yet always rooted in the land
      and the people of Vietnam.
    </p>
  </div>
);
