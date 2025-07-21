"use client";

import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { SidebarTrigger } from "./sidebar";
import { Home, House, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const NavLinks = [
  {
    name: "Skills",
    path: "/Skills",
  },
  {
    name: "Project",
    path: "/ProJectwork",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme(); // ใช้ useTheme เพื่อดึงค่า theme และฟังก์ชัน setTheme
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  // ใช้เพื่อหลีกเลี่ยงการ render ก่อนที่ useTheme จะทำงาน
  useEffect(() => {
    setMounted(true);
  }, [pathname]);
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
      <div
        className="fixed bottom-12 right-8 max-sm:bottom-20"
        id="HidebacktoTop"
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={handleClick}
          className="border border-neutral-900 p-1 cursor-pointer hover:bg-card rounded-md"
        >
          <House />
        </motion.button>
      </div>
      <div className="h-full  flex justify-between items-center mx-auto p-8">
        <div className="flex">
          <SidebarTrigger className="md:hidden" />
          <Link href={"/"} className="">
            <Home />
            
          </Link>
        </div>
        <div className="flex  xl:block max-md:hidden">
          {NavLinks.map(({ name, path }) => (
            <Button variant="ghost" key={name}>
              <Link href={path}>{name}</Link>
            </Button>
          ))}
        </div>
        <div className="flex items-center text-end gap-3">
          <div className="pt-1">
            <Switch onClick={toggleTheme}></Switch>
          </div>
          {theme === "light" ? <Sun /> : <Moon />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
