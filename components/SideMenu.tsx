"use client";
import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "./constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialLinks from "./SosialMedia";

// pencerahan
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-black shadow-xl transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <Logo className="text-white" spanDesign="group-hover:text-white" />

            <button
              aria-label="Close menu"
              onClick={onClose}
              className="text-white hover:text-shop_light_green hoverEffect"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-white text-sm font-semibold">
            {headerData.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className={`duration-200 hover:text-shop_light_green ${
                  pathname === item.href ? "text-shop_light_green" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
            <SocialLinks />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
