import { MapPin, Phone } from "lucide-react";

interface LocationType {
  id: number;
  name: string;
  address: string;
  phone: string;
}

interface LocationCardProps {
  location: LocationType;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="text-center p-2">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{location.name}</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-1 text-gray-600">
          <MapPin className="h-4 w-4" />
          <span className="text-[12px] md:text-base">{location.address}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Phone className="h-4 w-4" />
          <span className="text-[12px] md:text-base">{location.phone}</span>
        </div>
      </div>
    </div>
  );
}
