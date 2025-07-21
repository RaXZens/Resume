"use client";
import React from "react";
import { motion } from "framer-motion";
import fadeIn from "../ui/variant";
import Image from "next/image";
import { GradualSpacing } from "@/components/ui/gradual.spacing";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="xl:ms-20  xl:mt-30 max-sm:ms-5 max-sm:mt-2 ">
      <motion.div
        variants={fadeIn("right", 0.25)}
        initial={"hidden"}
        whileInView={"show"}
        className="absolute top-40 right-100  max-sm:right-20 max-lg:top-100 max-2xl:right-30"
        viewport={{ once: false, amount: 0 }}
      >
        <Image
          src={"/getstudentimage.jpg"}
          alt=""
          width={300}
          height={300}
          className="rounded-full "
        />
      </motion.div>
      <div className="max-sm:mt-0 ">
        <GradualSpacing text="Apisit Somsamai" />
        <motion.p
          variants={fadeIn("right", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="text-light pt-2 text-xl"
        >
          👨‍💻 Software Developer | Full Stack & Web Development
        </motion.p>
        <motion.p
          variants={fadeIn("right", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="text-light pt-2 text-xl"
        >
          Email : leekung12341@gmail.com <br />
          Tel : 0962436132
        </motion.p>
        <motion.div
          variants={fadeIn("right", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="mt-9 flex"
        >
          <button className="flex hover:bg-gray-100 cursor-pointer  rounded-2 border border-lime-600 me-4 text-lime-600 max-sm:px-2">
            <Link
              href={"https://github.com/RaXZens"}
              target="_blank"
              className="flex items-center gap-2 w-full py-3 px-7"
            >
              <Image
                src={"/github-mark.svg"}
                alt=""
                width={"20"}
                height={"20"}
              ></Image>
              Github
            </Link>
          </button>
          <button className="hover:bg-lime-800 cursor-pointer rounded-2 bg-lime-600 max-sm:px-2">
            <Link href={'/ProJectwork'} target="_blank"
              className="flex items-center gap-2 w-full py-3 px-7">Show Work</Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
