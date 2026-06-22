"use client";

import React from "react";
// 1. Pastikan import komponen tooltip-nya lengkap sesuai standarisasi shadcn
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Facebook = (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-5 h-5"
  >
    <title>Facebook</title>
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
  </svg>
);

const GitHub = (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-5 h-5"
  >
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Linkedin = (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-5 h-5"
  >
    <title>LinkedIn</title>
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8 10H5V19H8V10ZM6.5 5.5A1.75 1.75 0 1 0 6.5 9A1.75 1.75 0 1 0 6.5 5.5ZM19 13.5C19 10.74 17.21 9 14.76 9C13.58 9 12.74 9.65 12.5 10.1V10H9.5V19H12.5V14C12.5 12.67 13.09 11.5 14.56 11.5C16.03 11.5 16.1 12.87 16.1 14.09V19H19V13.5Z" />
  </svg>
);

const Youtube = (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-5 h-5"
  >
    <title>YouTube</title>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLink = [
  {
    name: "GitHub",
    href: "https://github.com/usernameLu",
    Icon: GitHub,
    hoverColor: "hover:text-white",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/usernameLu",
    Icon: Linkedin,
    hoverColor: "hover:text-[#0A66C2]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    Icon: Youtube,
    hoverColor: "hover:text-[#FF0000]",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    Icon: Facebook,
    hoverColor: "hover:text-[#1877F2]",
  },
];

const SocialMedia = () => {
  return (
    // Pembungkus global untuk context manajemen state tooltip
    <TooltipProvider>
      {/* Container utama (pastikan parent berposisi relative agar absolute ini aman) */}
      <div className="relative flex flex-col items-center min-h-[120px] justify-end pb-5">
        {/* Teks Label Tetap Di Luar Trigger Tooltip */}
        <div className="absolute bottom-14 text-center">
          <p className="text-sm font-medium text-zinc-400">Our Social Media</p>
        </div>

        {/* Baris Ikon Sosial Media */}
        <div className="absolute bottom-0 flex items-center gap-5 justify-center">
          {socialLink.map((item) => (
            // Setiap item melakukan looping struktur anatomi Tooltip yang benar
            <Tooltip key={item.name}>
              {/* asChild dipakai agar elemen <a> menggantikan default button si Radix */}
              <TooltipTrigger>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className={`text-zinc-400 ${item.hoverColor} transition-all duration-300 hover:scale-125 block p-1`}
                >
                  {item.Icon}
                </a>
              </TooltipTrigger>

              {/* Balon teks popup yang muncul saat hover */}
              <TooltipContent className="bg-zinc-800 text-white border-zinc-700 text-xs">
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
