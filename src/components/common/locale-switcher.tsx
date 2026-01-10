import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import ef from "../../../public/england_flag.webp";
import vf from "../../../public/vietnam_flag.webp";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: string) {
    // const nextLocale = event.target.value as Locale;
    console.log(value);
    // startTransition(() => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: value }
    );
    // });
  }

  return (
    <LocaleSwitcherSelect
      label={locale}
      defaultValue={locale}
      onSelect={onSelectChange}
    >
      {routing.locales.map((cur) => {
        if (cur === "vi") {
          return (
            <SelectItem key={cur} value={cur}>
              <div className="flex gap-2 items-center">
                <Image src={vf} alt="vi" width={20} height={20} />
                {t(cur)}
              </div>
            </SelectItem>
          );
        }
        return (
          <SelectItem key={cur} value={cur}>
            <div className="flex gap-2 items-center ">
              <Image src={ef} alt="en" width={20} height={20} />
              {t(cur)}
            </div>
          </SelectItem>
        );
      })}
    </LocaleSwitcherSelect>
  );
};

export default LocaleSwitcher;

const LocaleSwitcherSelect: (
  props: React.PropsWithChildren & {
    defaultValue: string;
    label: string;
    onSelect: (value: string) => void;
  }
) => React.JSX.Element = (props) => {
  const { children, label, defaultValue, onSelect } = props;

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={(value) => onSelect(value)}
    >
      <SelectTrigger
        className="w-fit border-none uppercase text-lg font-extrabold focus:ring-offset-0 focus:ring-0 "
        showIcon={false}
      >
        {label}
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
};
