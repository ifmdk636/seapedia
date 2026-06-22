"use client";
import React from "react";
import { headerData } from "./constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-normal text-shop_dark_green">
        {headerData?.map((item) => {
          const isActive = pathname === item?.href;

          return (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-shop_light_green hoverEffect relative group ${
                isActive ? "text-shop_light_green font-medium" : ""
              }`}
            >
              {item?.title}
              <span
                className={`absolute -bottom-0.5 left-0 w-full h-0.5 bg-shop_light_green origin-center transition-transform duration-300 hoverEffect ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HeaderMenu;
