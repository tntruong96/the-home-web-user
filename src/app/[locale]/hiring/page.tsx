import JobForm from "@/components/hiring/job-form";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";

const HiringPage = async () => {
  const t = await getTranslations();
  return (
    <section className="w-full h-dvh relative bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.7)),url('/career.webp')]">
      <div className="absolute top-1/3 left-1/6 flex flex-col gap-16 hover">
        <Link
          href={"/human"}
          className="text-4xl font-semibold group flex items-center text-white"
        >
          <ArrowRight className="hidden group-hover:block" strokeWidth={3} />
          {t("career.human")}
        </Link>
        <Link
          className="text-4xl font-semibold group flex items-center text-white"
          href={""}
        >
          <ArrowRight className="hidden group-hover:block" strokeWidth={3} />
          {t("career.careerPath")}
        </Link>
        <Link
          className="text-4xl font-semibold group flex items-center text-white"
          href={""}
        >
          <ArrowRight className="hidden group-hover:block" strokeWidth={3} />
          {t("career.findMember")}
        </Link>
      </div>
      <JobForm />
    </section>
  );
};

export default HiringPage;
