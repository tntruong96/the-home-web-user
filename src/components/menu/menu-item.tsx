import { TDish } from "@/types/menu.type";
import sample from "../../../public/sample.avif";
import Image from "next/image";
import { convertCurrency } from "@/lib/utils";

interface MenuItemProps {
  item: TDish;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <li className="text-left w-[39vw] min-w-[320px] select-none shrink-0">
      <div className="relative mb-3 h-80">
        <Image
          src={sample}
          alt={item.name}
          fill
          priority
          className="w-full h-48 object-cover rounded-lg pointer-events-none "
        />
      </div>
      <h3 className="text-base font-bold mb-1">{item.name}</h3>
      {item.ingredient && (
        <span className="wrap-normal whitespace-break-spaces">
          {item.ingredient}
        </span>
      )}
      <p className="mt-1 text-sm font-medium text-gray-900">
        {convertCurrency(item.price)}
      </p>
    </li>
  );
}
