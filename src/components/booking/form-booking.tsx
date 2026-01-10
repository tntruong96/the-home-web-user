"use client";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const bookingSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" }),
  phone: z
    .string()
    .min(7, { message: "Phone must be at least 7 digits" })
    .max(20, { message: "Phone too long" })
    .regex(/^\+?\d[\d\s-]{6,}$/, { message: "Invalid phone number" }),
  people: z
    .number()
    .int()
    .min(1, { message: "Minimum is 1" })
    .max(30, { message: "Maximum is 30" }),
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  branch: z.string().min(1, { message: "Please select a branch" }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const BRANCH_OPTIONS: { value: string; label: string }[] = [
  { value: "hanoi", label: "Hà Nội" },
  { value: "danang", label: "Đà Nẵng" },
  { value: "hcmc", label: "Hồ Chí Minh" },
];

function generateTimeOptions(stepMinutes: number = 15) {
  const options: string[] = [];
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = Math.ceil(currentDate.getMinutes() / 10) * 10;
  console.log(currentMinute);
  for (let h = currentHour; h < 24; h++) {
    for (let m = currentMinute; m < 60; m += stepMinutes) {
      const hh = String(h).padStart(2, "0");
      const mm = String(m).padStart(2, "0");
      options.push(`${hh}:${mm}`);
    }
  }
  return options;
}

const timeOptions = generateTimeOptions(15);
const peopleOptions = Array.from({ length: 30 }, (_, i) => i + 1);
console.log(peopleOptions);

const inputClassName =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-- focus:ring-ring focus:ring-offset-0";

const errorClassName = "text-red-500 text-xs mt-1";

const FormBooking = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      people: 2,
      date: "",
      time: "",
      branch: "",
    },
    mode: "onTouched",
  });

  const t = useTranslations();

  const onSubmit: SubmitHandler<BookingFormData> = async (data) => {
    // Replace with API call
    // await createBooking(data)
    console.log("booking payload", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 sm:grid-cols-2"
    >
      <div className="sm:col-span-2">
        <input
          id="fullName"
          type="text"
          placeholder={t("booking.fullName")}
          className={inputClassName}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className={errorClassName}>{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <input
          id="phone"
          type="tel"
          placeholder={t("booking.phoneNumber")}
          className={inputClassName}
          {...register("phone")}
        />
        {errors.phone && (
          <p className={errorClassName}>{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Controller
          control={control}
          name="people"
          render={({ field: { onChange, value } }) => (
            <Select
              value={String(value ?? "")}
              onValueChange={(v) => onChange(parseInt(v, 10))}
            >
              <SelectTrigger>
                <SelectValue placeholder={t("booking.numberOfPeople")} />
              </SelectTrigger>
              <SelectContent>
                {peopleOptions.map((n) => (
                  <SelectItem key={n} value={String(n)}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.people && (
          <p className={errorClassName}>{errors.people.message}</p>
        )}
      </div>

      <div>
        <input
          id="date"
          type="date"
          className={inputClassName}
          {...register("date")}
        />
        {errors.date && <p className={errorClassName}>{errors.date.message}</p>}
      </div>

      <div>
        <Controller
          control={control}
          name="time"
          render={({ field: { onChange, value } }) => (
            <Select value={value ?? ""} onValueChange={onChange}>
              <SelectTrigger>
                <SelectValue placeholder={t("booking.time")} />
              </SelectTrigger>
              <SelectContent>
                {timeOptions.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.time && <p className={errorClassName}>{errors.time.message}</p>}
      </div>

      <div>
        <Controller
          control={control}
          name="branch"
          render={({ field: { onChange, value } }) => (
            <Select value={value ?? ""} onValueChange={onChange}>
              <SelectTrigger>
                <SelectValue placeholder={t("booking.branch")} />
              </SelectTrigger>
              <SelectContent>
                {BRANCH_OPTIONS.map((b) => (
                  <SelectItem key={b.value} value={b.value}>
                    {b.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.branch && (
          <p className={errorClassName}>{errors.branch.message}</p>
        )}
      </div>

      <div className="sm:col-span-2 flex justify-end gap-2 pt-2">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Booking..." : "Book table"}
        </Button>
      </div>
    </form>
  );
};

export default FormBooking;
