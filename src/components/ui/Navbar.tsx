"use client";

import { useEffect, useRef, useState } from "react";
import React from "react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { SidebarTrigger } from "./sidebar";
import { House } from "lucide-react";
import { motion } from "framer-motion";


const NavLinks = [
  {
    name: "Skills",
    path: "/Skills",
  },
  {
    name: "Project",
    path: "/ProJectwork",
  },
  {
    name: "About",
    path: "/About",
  },
];


const Navbar = () => {
  const { theme, setTheme } = useTheme(); // ใช้ useTheme เพื่อดึงค่า theme และฟังก์ชัน setTheme
  const [mounted, setMounted] = useState(false);
  // ใช้เพื่อหลีกเลี่ยงการ render ก่อนที่ useTheme จะทำงาน
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    // เมื่อยังไม่ได้ mount ก็ให้ render ค่า theme ออกมาให้เหมาะสม
    return null;
  }
  const handleClick = () => {
    // เลื่อนหน้าไปที่ตำแหน่ง (0, 0) เมื่อกดปุ่ม
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    // กำหนดเงื่อนไข 2 แบบในการสลับธีม
    if (theme === "dark") {
      setTheme("light"); // ถ้าเป็น Dark Mode ให้เปลี่ยนเป็น Light Mode
    } else {
      setTheme("dark"); // ถ้าเป็น Light Mode ให้เปลี่ยนเป็น Dark Mode
    }
  };

  return (
    <nav>
      <div className="fixed bottom-10 right-8" id="HidebacktoTop">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={handleClick}
          className="border border-neutral-900 p-1 cursor-pointer hover:bg-gray-100 rounded-md"
        >
          <House />
        </motion.button>
      </div>
      <div className="h-full  flex justify-between items-center mx-auto p-8">
        <div className="font-bold text-4xl">
          <SidebarTrigger className="md:hidden" />
          <Link href={"/"} className="ps-3">
            Logo
          </Link>
        </div>
        <div className="flex  xl:block max-md:hidden">
          {NavLinks.map(({ name, path }) => (
            <Button variant="ghost" key={name}>
              <Link href={path}>{name}</Link>
            </Button>
          ))}
        </div>
        <div className="flex text-end gap-3">
          <Avatar>
            <AvatarImage src="globe.svg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="pe-0 pt-1.5">
            <Switch onClick={toggleTheme}></Switch>
          </div>
          <Label htmlFor="Dark Mode">Dark Mode</Label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
