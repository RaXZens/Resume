import React from "react";
import Bannerheader from "@/components/BannnerService/Bannerheader";
import Summarybanner from "@/components/BannnerService/BannerSummary";
import BannerSkills from "@/components/BannnerService/BannerSkills";
import BannerProjects from "@/components/BannnerService/BannerProjects";
import BannerEducation from "@/components/BannnerService/BannerEducation";


export default function Home() {
  return (

    <div className="mx-10 max-sm:mx-0 mb-20">
      <div className="mx-20 max-sm:mx-8">
        <Bannerheader />
        <Summarybanner />
        <BannerSkills />
        <BannerEducation />
        <BannerProjects />
      </div>
    </div>

  );
}
