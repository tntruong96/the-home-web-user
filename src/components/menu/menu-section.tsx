"use client";
import { TDish } from "@/types/menu.type";
import MenuItem from "./menu-item";
import { useRef } from "react";

interface MenuSectionProps {
  title: string;
  items: TDish[];
}

export default function MenuSection({ title, items }: MenuSectionProps) {
  const scrollRef = useRef<HTMLUListElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const onMouseDown: React.MouseEventHandler<HTMLUListElement> = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    el.classList.add("cursor-grabbing");
    startX.current = e.pageX - el.offsetLeft;
    startScrollLeft.current = el.scrollLeft;
  };

  const endDrag = () => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = false;
    el.classList.remove("cursor-grabbing");
  };

  const onMouseMove: React.MouseEventHandler<HTMLUListElement> = (e) => {
    const el = scrollRef.current;
    if (!el || !isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - startX.current;
    el.scrollLeft = startScrollLeft.current - walk;
  };

  return (
    <section>
      <h2 className="text-2xl font-extrabold text-left mb-8 overflow-auto tracking-wide">
        {title}
      </h2>
      <div className="overflow-x-scroll whitespace-nowrap w-full no-scrollbar select-none">
        <ul
          className="inline-flex overflow-x-auto gap-6 w-full no-scrollbar  cursor-grab"
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={endDrag}
          onMouseUp={endDrag}
          onMouseMove={onMouseMove}
        >
          {items.map((item) => (
            <MenuItem key={item.documentId} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
