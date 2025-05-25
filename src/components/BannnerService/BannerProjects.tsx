"use client";
import React from "react";
import { motion } from "framer-motion";
import fadeIn from "../ui/variant";
import { Card,  CardDescription, CardHeader } from "../ui/card";
import Image from "next/image";

const ProjectsText = [
  {
    title: "PHP(pure)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "DashBoard",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,",
  },
  {
    title: "Ecommerce",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
  },
];

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
          <h1 className="text-3xl">Projects</h1>
          <p className="text-sm font-light mt-3">My Projects have done</p>
        </motion.div>
        <div className="mt-10 flex gap-3 max-lg:flex-col ">
          {ProjectsText.map((item) => (
            <motion.div 
            key={item.title}
            variants={fadeIn("up",0.25)}
            whileInView={'show'}
            initial="hidden"
            viewport={{ once:false, amount:0}}

            className="">
            <Card  className="pt-0  gap-2">
              <Image src={'/Project.png'}
              alt=""
              width={540}
              height={200}
              className="rounded-t-lg w-full h-70"/>
              <CardHeader className="text-3xl ">{item.title}</CardHeader>
              <CardDescription className="text-sm font-light  px-2 text-pretty ">{item.description}</CardDescription>
            </Card>
            </motion.div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default BannerProjects;
