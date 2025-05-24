'use client'
import React from "react";
import { motion } from 'framer-motion';
import fadeIn from "./variant";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SkillText = [
  {
    Logo: "/",
    title: "Ux/Ui Design",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    Logo: "/",
    title: "BackEnd Developer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    Logo: "/",
    title: "Manager System",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    Logo: "/",
    title: "DataAnalys",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

const BannerSkills = () => {
  return (
    <div className="">
      <motion.div
        variants={fadeIn("up", 0.25)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="text-center mt-20 "
      >
        <h1 className=" text-3xl">Skiils</h1>
        <p className="text-sm font-light mt-3">What I could Do?</p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className=""
      >
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full mt-10 "
        >
          <CarouselContent>
            {SkillText.map((item) => (
              <CarouselItem
                key={item.title}
                className="md:basis-1/2 lg:basis-1/3 pt-6 py-7 max-md:px-7  xl:px-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-1 "
                >
                  <Card>
                    <CardContent className="aspect-square items-center justify-center p-6">
                      <div className="flex justify-center mt-10 ">
                        <Image
                          alt=""
                          width={50}
                          height={0}
                          src={item.Logo}
                        ></Image>
                      </div>
                      <h1 className="text-3xl text-center mt-3">
                        {item.title}
                      </h1>
                      <p className="text-sm font-light mt-3 pb-10">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default BannerSkills;
