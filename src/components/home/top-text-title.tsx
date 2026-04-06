import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const TopTextTitle = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col justify-center items-end absolute top-56 right-12 min-w-xl text-white gap-8">
      <h3 className="font-abygaer text-2xl sm:text-4xl">
        Mời các bạn khám phá
      </h3>
      <h2 className="font-abygaer text-5xl sm:text-8xl">ĐẶC SẢN</h2>
      <h2 className="font-abygaer text-5xl sm:text-8xl">VIỆT</h2>
      <h4 className="font-abygaer text-2xl sm:text-4xl">
        trên Đế Bánh Pizza Ý
      </h4>
      <Link
        target="_blank"
        href={`https://booking.ipos.vn/public/booking/878f61f7-5486-462a-9a48-43bd4b316758?source=IFRAME&css=overflow-y:hidden;`}
        className=" border border-white rounded-full bg-white text-black font-semibold md:px-2 lg:px-12  w-48 min-w-20 py-1  hover:bg-gray-800 transition-colors text-center"
      >
        {t("header.bookTable")}
      </Link>
    </div>
  );
};

export default TopTextTitle;
