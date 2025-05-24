"use client";
import React from "react";
import { motion } from "framer-motion";
import fadeIn from "./variant";
import Image from "next/image";
import { GradualSpacing } from "@/components/ui/gradual.spacing";

const Banner = () => {
  return (
    <div className="ms-20  mt-30">
      <motion.div
        variants={fadeIn("right", 0.25)}
        initial={"hidden"}
        whileInView={"show"}
        className="absolute top-40 right-80 -z-1"
        viewport={{ once: false, amount: 0 }}
      >
        <Image src={"/cat1.webp"} alt="" width={300} height={300} />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.25)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="absolute top-30 right-85 -z-1 text-lg"
      >
        <p>Please allow me to use this picture.</p>
        <p>i dont known whos owner picture.</p>
      </motion.div>
      <GradualSpacing text="Hi I am New Dev." />
      <motion.p
        variants={fadeIn("right", 0.25)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="text-light pt-2 text-lg"
      >
        I know WP Theme developer.
      </motion.p>
      <div className="mt-9">
        <button className="hover:bg-gray-100 cursor-pointer py-3 px-7 rounded-2 border border-lime-600 me-4 text-lime-600">
          Show Work
        </button>
        <button className="hover:bg-lime-800 cursor-pointer py-3 px-7 rounded-2 bg-lime-600 ">
          Show Work
        </button>
      </div>
    </div>
  );
};

export default Banner;
