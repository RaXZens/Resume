import React from "react";
import Banner from "@/components/ui/Banner";
import BannerService from "@/components/ui/BannerService";
import BannerSkills from "@/components/ui/BannerSkills";
import BannerProjects from "@/components/ui/BannerProjects";

export default function Home() {
  return (
    <div className="mx-10 ">
      <div className="mx-20 ">
        <Banner />
        <BannerService />
        <BannerSkills />
        <BannerProjects />
      </div>
    </div>
  );
}
