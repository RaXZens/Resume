'use client'
import React from 'react'
import { motion, useInView } from "framer-motion";
import fadeIn from "./variant";
import Image from 'next/image';


const ServicesText = [
  {
    logo: "file.svg",
    title: "Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    logo: "/next.svg",
    title: "Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    logo: "/window.svg",
    title: "Sea",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Servicebanner = () => {
    const ref = React.useRef(null);

  const isInView = useInView(ref, { once: false, amount: 0 });
  return (
    <div className="bg-transparent mt-10">
          <motion.div
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
            className="pt-10  text-center "
          >
            <h1 className="text-3xl">Our Services</h1>
            <p className="text-sm font-light mt-3">Sub Heading Soon Have</p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            exit="hidden"
            className="mt-15 flex justify-between gap-10 max-lg:flex-col"
          >
            {ServicesText.map((item) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="border border-lime-600 "
                key={item.title}
              >
                <div className="flex justify-center mt-10 ">
                  <Image alt="" width={50} height={0} src={item.logo}></Image>
                </div>
                <p className="text-center mt-5">{item.title}</p>
                <p className="px-4 mt-5 pb-10">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
  )
}

export default Servicebanner