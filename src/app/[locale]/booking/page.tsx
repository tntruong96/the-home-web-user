import FormBooking from "@/components/booking/form-booking";
import React from "react";

const BookingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-32 md:py-60">
      <h2 className="text-4xl font-playfair-display">Đặt Bàn</h2>
      <FormBooking />
    </div>
  );
};

export default BookingPage;
