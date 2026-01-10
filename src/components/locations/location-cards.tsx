import { useTranslations } from "next-intl";
import LocationCard from "./location-card";

export default function LocationCards() {
  const t = useTranslations("locations");

  const locations = [
    {
      id: 1,
      name: t("phuQuoc"),
      address: t("addressPQ"),
      phone: "+(84) 988 37 37 93",
    },
    {
      id: 2,
      name: t("nhaTrang"),
      address: t("addressNT"),
      phone: "+(84) 988 37 37 93",
    },
    // {
    //   id: 3,
    //   name: t("muiNe"),
    //   address: t("address"),
    //   phone: t("phone"),
    // },
  ];

  return (
    <div className="flex justify-center items-center py-24 md:p-12 gap-8">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
}
