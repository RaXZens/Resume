"use client";
import React from "react";
import { motion } from "framer-motion";
import fadeIn from "../ui/variant";
import { Card, CardHeader } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const ProjectsText = [
  {
    image:"/Project.png",
    title: "LearningCourse",
    description: " (http:) This project is only registercourse and show result your registered learning course. You can update,delete about information. The history would show your information and status.",
    Technical: "PHP(pure),mysql,git",
    Git:"https://github.com/RaXZens/Learning-Course",
    patch:"http://202.29.50.41/s6513805230/project/index.php",
    username:"dev"

  },
  {
    image:"/dashboard.png",
    title: "DashBoard",
    description:
      "This project would show dashboard about employees information for example totals employees,totals salaries. You can manage employees's information in crudid page at left sidebar. If you want to sort data, there's sort by (department,salary) button. After you add or delete that can update to dashboard's piechart and barchart only. In another chart would't connection to database. You can manage account profile what ever name,email,password in account setting.",
    Technical: "react,nextjs,ts,shadcn ui,mysql,git",
    Git:"https://github.com/RaXZens/Dashboard-practice",
    patch:"https://dashboard-practice-hazel.vercel.app/dashboard",
    username:"dev@gmail.com"
  },
];

const BannerProjects = () => {
  return (
    <div className="mt-5">
      <div className="">
        <motion.div
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="text-center "
        >
          <h1 className="text-3xl">Projects</h1>
        </motion.div>
        <div className="mt-15 grid grid-cols-2 gap-3 max-lg:grid-cols-1">
          {ProjectsText.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeIn("up", 0.25)}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: false, amount: 0 }}
              className=""
            >
              <Card className="pt-0  gap-2 h-full">
                <Image
                  src={item.image}
                  alt=""
                  width={540}
                  height={200}
                  className="rounded-t-lg w-full h-70"
                />
                <CardHeader className="text-2xl text-center">
                  {item.title}
                </CardHeader>
                <div className="text-md font-bold px-4 ">
                  Attention :<a className="font-light">{item.description}</a>
                  <br />
                  Technical : <a className="font-light">{item.Technical}</a><br/>
                  User(if you dont want to create new account) : <a className="font-light">Username : {item.username} Password : dev</a>
                </div>
                <div className="flex gap-2 px-3 ">
                  <Link href={item.Git} target='_blank'>
                  <Button variant={'outline'}><Image src={"/github-mark.svg"} alt="" width={20} height={20}/>Github</Button></Link>
                  <Link href={item.patch} target='_blank'>
                  <Button className="bg-green-500 hover:bg-green-600">Open</Button></Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerProjects;
