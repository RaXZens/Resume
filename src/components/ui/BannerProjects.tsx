'use client'
import React from 'react'
import {motion} from "framer-motion";
import fadeIn from "./variant";
const BannerProjects = () => {
  return (
   <div className="mt-10 ">
            <div className="text-center">
              <motion.div
                variants={fadeIn("up", 0.25)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
                className="text-center mt-20 "
              >
                <h1 className=" text-3xl">Projects</h1>
                <p className="text-sm font-light mt-3">My Projects have done</p>
              </motion.div>
              <div className=""></div>
            </div>
          </div>
  )
}

export default BannerProjects