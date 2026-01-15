"use client";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const JOB_POSITION_OPTIONS: { value: string; label: string }[] = [
  { value: "chef", label: "Chef" },
  { value: "server", label: "Server" },
  { value: "bartender", label: "Bartender" },
  { value: "manager", label: "Manager" },
  { value: "kitchen-staff", label: "Kitchen Staff" },
];

const LOCATION_OPTIONS: { value: string; label: string }[] = [
  { value: "phuquoc", label: "Phú Quốc" },
  { value: "nhatrang", label: "Nha Trang" },
];

const inputClassName =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0";

const errorClassName = "text-red-500 text-xs mt-1";

const JobForm = () => {
  const t = useTranslations();

  const jobFormSchema = z.object({
    search: z.string().optional(),
    position: z.string().optional(),
    location: z.string().optional(),
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobFormData>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      search: "",
      position: "",
      location: "",
    },
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<JobFormData> = async (data) => {
    // Replace with API call
    // await searchJobs(data)
    toast.success("Searching for jobs...");
    console.log("job search payload", data);
  };

  type JobFormData = z.infer<typeof jobFormSchema>;

  return (
    <div className="w-3/12 fixed bottom-1/5 right-16">
      <Card className="">
        <form>
          <CardHeader className="text-center font-semibold">
            {t("career.findJob")}
          </CardHeader>
          <CardContent className="flex flex-col gap-4 pb-4">
            {/* Search String Input */}
            <div>
              <input
                id="search"
                type="text"
                placeholder={
                  t("career.searchPlaceholder") || "Search keywords..."
                }
                className={inputClassName}
                {...register("search")}
              />
              {errors.search && (
                <p className={errorClassName}>{errors.search.message}</p>
              )}
            </div>

            {/* Job Position Select */}
            <div>
              <Controller
                control={control}
                name="position"
                render={({ field: { onChange, value } }) => (
                  <Select value={value ?? ""} onValueChange={onChange}>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          t("career.jobPosition") || "What - Job Position"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {JOB_POSITION_OPTIONS.map((position) => (
                        <SelectItem key={position.value} value={position.value}>
                          {position.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.position && (
                <p className={errorClassName}>{errors.position.message}</p>
              )}
            </div>

            {/* Location Select */}
            <div>
              <Controller
                control={control}
                name="location"
                render={({ field: { onChange, value } }) => (
                  <Select value={value ?? ""} onValueChange={onChange}>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t("career.location") || "Where - Location"}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {LOCATION_OPTIONS.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label}
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
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Button>{t("career.findJob")}</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default JobForm;
