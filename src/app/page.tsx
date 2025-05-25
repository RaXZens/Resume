import React from "react";
import Banner from "@/components/BannnerService/Banner";
import BannerService from "@/components/BannnerService/BannerService";
import BannerSkills from "@/components/BannnerService/BannerSkills";
import BannerProjects from "@/components/BannnerService/BannerProjects";

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
