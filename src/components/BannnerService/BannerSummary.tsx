"use client";
import React from "react";
import { motion} from "framer-motion";
import fadeIn from "../ui/variant";


const ServicesText = [
  {
    description:
      "Currently studying at Phuket Rajabhat University with 5 months of hands-on experience in web development. Proficient in React, Next.js, TypeScript, MySQL, and Git. Passionate about technology and committed to learning—dedicating time to areas that contribute to my personal and professional growth. My goal is to become a software developer, focusing on learning internal systems within organizations and exploring new technologies I haven't worked with yet. I also aim to grow in a collaborative team environment. I am eager to intern in this field to further develop my skills and build a solid foundation for my career in software development.",
  },
];

const Summarybanner = () => {


  return (
    <div className="bg-transparent mt-60">
      <motion.div
        variants={fadeIn("up", 0.25)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="pt-10  text-center max-lg:pt-80"
      >
        <h1 className="text-3xl">Summary</h1>
      </motion.div>
      {ServicesText.map((item) => (
        <motion.div
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="mt-15 flex justify-between gap-10 max-lg:flex-col border-2 rounded-xl py-5 px-6"
          key={item.description}
        >
          {item.description}
        </motion.div>
      ))}
    </div>
  );
};

export default Summarybanner;
