"use client";
import React from "react";
import { motion } from "framer-motion";
import fadeIn from "../ui/variant";
import { Card, CardContent } from "@/components/ui/card";

const BannerEducation = () => {
  return (
    <div className="">
      <motion.div
        variants={fadeIn("up", 0.25)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="text-center mt-20 "
      >
        <h1 className=" text-3xl">Education</h1>
      </motion.div>
      <div className="grid grid-cols-1 gap-15 mt-15">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}

          >
            <Card className="h-full">
              <CardContent className="text-center">
                <h1 className="text-2xl ">
                    Bachelor of Business Computer
                </h1>
                <h2>Phuket Rajabhat University, Thailand</h2>
                <h2>Expected Graduation: 2026 </h2>
                <h2>GPAX : 3.54</h2>

              </CardContent>
            </Card>
          </motion.div>
      </div>
    </div>
  );
};

export default BannerEducation;
