import { MapPin, MapPinCheck, Phone } from "lucide-react";
import Link from "next/link";

interface LocationType {
  id: number;
  name: string;
  address: string;
  phone: string;
  map: string;
  embed: string;
}

interface LocationCardProps {
  location: LocationType;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="w-full flex flex-col">
      <div className="flex-1 p-2">
        <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-start gap-1 ">
            <MapPin className="h-4 w-4" />
            <span className="text-[12px] md:text-base">{location.address}</span>
          </div>
          <div className="flex items-center justify-start gap-2 ">
            <Phone className="h-4 w-4" />
            <span className="text-[12px] md:text-base">{location.phone}</span>
          </div>
          <div className="flex items-center justify-start gap-2 ">
            <MapPinCheck className="h-4 w-4" />
            <Link
              href={location.map}
              target="_blank"
              className="text-[12px] md:text-base underline underline-offset-2"
            >
              Google Map
            </Link>
          </div>
        </div>
      </div>
      {/* <div
        className="aspect-video overflow-hidden flex-1"
        dangerouslySetInnerHTML={{ __html: location.embed }}
      ></div> */}
    </div>
  );
}
