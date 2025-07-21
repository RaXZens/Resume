"use client";
import React from "react";
import { motion } from "framer-motion";
import fadeIn from "../ui/variant";
import { Card, CardContent } from "@/components/ui/card";


const SkillText = [
  {
    titleheader:"Technical Skills",
    title1: "ProgrammingLanguages :",
    title2: "FrameworksLibraries :",
    title3: "Databases ",
    title4: "versionControl :",
    title5: "APIs : ",
    description1: " JavaScript, TypeScript , Php",
    description2: " react, Next.js, Node.js",
    description3: " MySQL",
    description4: " Git,GitHub ",
    description5: " RESTful APIs",
  },
  {
    titleheader:"Soft Skills",
    title1: "Adaptability : ",
    title2: "Communication : ",
    description1: "Adaptability to change, Learning agility",
    description2: "Effective communication, Active listening",

  },
];



const BannerSkills= () => {
  return (
    <div className="mt-5">
      <motion.div
        variants={fadeIn("up", 0.25)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="text-center "
      >
        <h1 className=" text-3xl">Skiils</h1>
      </motion.div>
      <div className="grid grid-cols-2 gap-15 mt-15 max-lg:grid-cols-1">
        {SkillText.map((item, index) => (
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
            key={index}
          >
            <Card className="h-full">
              <CardContent >
                <h1 className="text-2xl font-bold text-center">
                  {item.titleheader}
                </h1>
                <h1 className="text-lg mt-3 ">
                  {item.title1}
                  <a className="font-light">{item.description1}</a>
                </h1>
                <h1 className="text-lg mt-1">
                  {item.title2}
                  <a className="font-light">{item.description2}</a>
                </h1>
                <h1 className="text-lg mt-1">
                  {item.title3}
                  <a className="font-light">{item.description3}</a>
                </h1>
                <h1 className="text-lg mt-1">
                  {item.title4}
                  <a className="font-light">{item.description4}</a>
                </h1>
                <h1 className="text-lg mt-1">
                  {item.title5}
                  <a className="font-light">{item.description5}</a>
                </h1>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BannerSkills;
