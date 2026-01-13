"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const BRANCH_OPTIONS: { value: string; label: string }[] = [
  { value: "phuquoc", label: "Phú Quốc" },
  { value: "nhatrang", label: "Nha Trang" },
  // { value: "hcmc", label: "Hồ Chí Minh" },
];

function generateTimeOptions(stepMinutes: number = 15) {
  const options: string[] = [];
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = Math.ceil(currentDate.getMinutes() / 10) * 10;

  // Calculate the starting minute for the current hour
  const startMinute = Math.ceil(currentMinute / stepMinutes) * stepMinutes;

  for (let h = currentHour; h < 24; h++) {
    // For the current hour, start from startMinute; for future hours, start from 0
    const startM = h === currentHour ? startMinute : 0;

    // If startMinute is 60 or more, skip to the next hour
    if (startM >= 60) {
      continue;
    }
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

const inputClassName =
  " flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-- focus:ring-ring focus:ring-offset-0";

const errorClassName = "text-red-500 text-xs mt-1";

const FormBooking = () => {
  const t = useTranslations();
  const bookingSchema = z.object({
    fullName: z.string().min(2, { message: t("error.fullnameError") }),
    phone: z
      .string()
      .min(7, { message: t("error.phoneMin") })
      .max(20, { message: t("error.phoneMax") })
      .regex(/^\+?\d[\d\s-]{6,}$/, { message: t("error.phoneInvalid") }),
    people: z
      .number()
      .int()
      .min(1, { message: "Minimum is 1" })
      .max(30, { message: "Maximum is 30" }),
    date: z.string().min(1, { message: t("error.dateError") }),
    time: z.string().min(1, { message: t("error.timeError") }),
    location: z.string().min(1, { message: t("error.locationError") }),
  });

  type BookingFormData = z.infer<typeof bookingSchema>;

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      people: 2,
      date: "",
      time: "",
      location: "",
    },
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<BookingFormData> = async (data) => {
    // Replace with API call
    // await createBooking(data)
    toast.success("Your booking is successful");
    console.log("booking payload", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-8 w-80 md:w-[500px] color"
    >
      <div className="">
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

      <div className="flex gap-8 flex-col md:flex-row md:items-top md:justify-between ">
        <div>
          <Controller
            control={control}
            name="people"
            render={({ field: { onChange, value } }) => (
              <Select
                value={String(value ?? "")}
                onValueChange={(v) => onChange(parseInt(v, 10))}
              >
                <SelectTrigger className="w-full md:w-[100px]">
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
            className={`${inputClassName} input-date-style`}
            {...register("date")}
          />
          {/* <Controller
          control={control}
          name="date"
          render={({ field: { onChange, value } }) => (
            <Calendar
              mode="single"
              selected={new Date(value)}
              onSelect={onChange}
              className="rounded-lg border"
            />
          )}
        /> */}
          {errors.date && (
            <p className={errorClassName}>{errors.date.message}</p>
          )}
        </div>

        <div>
          <Controller
            control={control}
            name="time"
            render={({ field: { onChange, value } }) => (
              <Select value={value ?? ""} onValueChange={onChange}>
                <SelectTrigger className="w-full md:w-[140px]">
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
          {errors.time && (
            <p className={errorClassName}>{errors.time.message}</p>
          )}
        </div>
      </div>

      <div>
        <Controller
          control={control}
          name="location"
          render={({ field: { onChange, value } }) => (
            <Select value={value ?? ""} onValueChange={onChange}>
              <SelectTrigger>
                <SelectValue placeholder={t("booking.location")} />
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
        {errors.location && (
          <p className={errorClassName}>{errors.location.message}</p>
        )}
      </div>

      <div className="sm:col-span-2 flex justify-center gap-4 pt-2">
        <Button
          type="reset"
          variant="outline"
          className="w-full cursor-pointer text-black font-semibold"
          onClick={() => reset()}
        >
          {t("booking.reset")}
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer text-black font-semibold"
        >
          {isSubmitting ? t("booking.submitting") : t("booking.bookingTable")}
        </Button>
      </div>
    </form>
  );
};

export default FormBooking;
