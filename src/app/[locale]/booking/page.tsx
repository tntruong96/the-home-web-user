import FormBooking from "@/components/booking/form-booking";
import { getTranslations } from "next-intl/server";

const BookingPage = async () => {
  const t = await getTranslations();
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-32 md:py-60 form-booking-bg">
      <h2 className="text-4xl font-playfair-display font-semibold text-white mb-4">
        {t("booking.bookingOnline")}
      </h2>
      <FormBooking />
    </div>
  );
};

export default BookingPage;
