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
      map: "https://maps.app.goo.gl/B9eZDDjsFaj6ZFNK6",
      embed: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7853.632668566224!2d103.9686994!3d10.1955659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78d616c801055%3A0x5b767e33eecf9e90!2sThe%20Home%20Pizza%20Tran%20Hung%20Dao!5e0!3m2!1sen!2s!4v1768405494787!5m2!1sen!2s" width="650" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
      id: 2,
      name: t("nhaTrang"),
      address: t("addressNT"),
      phone: "+(84) 988 37 37 93",
      map: "https://maps.app.goo.gl/B9eZDDjsFaj6ZFNK6",
      embed: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7853.632668566224!2d103.9686994!3d10.1955659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78d616c801055%3A0x5b767e33eecf9e90!2sThe%20Home%20Pizza%20Tran%20Hung%20Dao!5e0!3m2!1sen!2s!4v1768405494787!5m2!1sen!2s" width="300" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
}
