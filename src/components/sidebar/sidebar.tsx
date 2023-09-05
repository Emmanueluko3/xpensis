"use client";

import React, { useState } from "react";
import Link from "next/link";
import Xpensis from "@/../public/assets/images/Xpensis.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const dashboardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M18.67 2H16.77C14.59 2 13.44 3.15 13.44 5.33V7.23C13.44 9.41 14.59 10.56 16.77 10.56H18.67C20.85 10.56 22 9.41 22 7.23V5.33C22 3.15 20.85 2 18.67 2Z"
      fill="currentColor"
    />
    <path
      d="M7.24 13.43H5.34C3.15 13.43 2 14.58 2 16.76V18.66C2 20.85 3.15 22 5.33 22H7.23C9.41 22 10.56 20.85 10.56 18.67V16.77C10.57 14.58 9.42 13.43 7.24 13.43Z"
      fill="currentColor"
    />
    <path
      d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z"
      fill="currentColor"
    />
    <path
      d="M17.71 22C20.0793 22 22 20.0793 22 17.71C22 15.3407 20.0793 13.42 17.71 13.42C15.3407 13.42 13.42 15.3407 13.42 17.71C13.42 20.0793 15.3407 22 17.71 22Z"
      fill="currentColor"
    />
  </svg>
);

const billsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.75 15.75H8.25C7.84 15.75 7.5 15.41 7.5 15C7.5 14.59 7.84 14.25 8.25 14.25H15.75C16.16 14.25 16.5 14.59 16.5 15C16.5 15.41 16.16 15.75 15.75 15.75ZM15.75 9.75H8.25C7.84 9.75 7.5 9.41 7.5 9C7.5 8.59 7.84 8.25 8.25 8.25H15.75C16.16 8.25 16.5 8.59 16.5 9C16.5 9.41 16.16 9.75 15.75 9.75Z"
      fill="currentColor"
    />
  </svg>
);

const goalsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z"
      fill="currentColor"
    />
    <path
      d="M20.35 5.52001L16.35 8.38001C15.82 8.76001 15.06 8.53001 14.83 7.92001L12.94 2.88001C12.62 2.01001 11.39 2.01001 11.07 2.88001L9.17001 7.91001C8.94001 8.53001 8.19001 8.76001 7.66001 8.37001L3.66001 5.51001C2.86001 4.95001 1.80001 5.74001 2.13001 6.67001L6.29001 18.32C6.43001 18.72 6.81001 18.98 7.23001 18.98H16.76C17.18 18.98 17.56 18.71 17.7 18.32L21.86 6.67001C22.2 5.74001 21.14 4.95001 20.35 5.52001ZM14.5 14.75H9.50001C9.09001 14.75 8.75001 14.41 8.75001 14C8.75001 13.59 9.09001 13.25 9.50001 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z"
      fill="currentColor"
    />
  </svg>
);

const profileIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
      fill="currentColor"
    />
    <path
      d="M12 14.5C6.99 14.5 2.91 17.86 2.91 22C2.91 22.28 3.13 22.5 3.41 22.5H20.59C20.87 22.5 21.09 22.28 21.09 22C21.09 17.86 17.01 14.5 12 14.5Z"
      fill="currentColor"
    />
  </svg>
);

const Sidebar: React.FC = () => {
  const pathname = usePathname().split("/")[1];

  const navLinks = [
    { icon: dashboardIcon, label: "Dashboard", href: "/dashboard" },
    { icon: billsIcon, label: "Bills", href: "/bills" },
    { icon: goalsIcon, label: "Goals", href: "/goals" },
    { icon: profileIcon, label: "Profile", href: "/profile" },
  ];

  return (
    <>
      <div className=" w-64 h-screen px-6 py-9 bg-white hidden lg:block">
        <Link href="/">
          <Image
            //   width={500}
            //   height={500}
            className=""
            src={Xpensis}
            alt="Logo"
          />
        </Link>

        <div className="flex flex-col mt-20 w-full h-full">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index} className="my-3">
              <h3
                className={`px-5 py-2 rounded-lg ${
                  "/" + pathname === link.href
                    ? "text-customBlue bg-customBlue bg-opacity-10"
                    : "text-customGray"
                } flex items-center font-bold hover:bg-customBlue hover:text-customBlue hover:bg-opacity-10 text-base`}
              >
                <span className="mr-3">{link.icon}</span> {link.label}
              </h3>
            </Link>
          ))}

          <button className="flex items-center font-bold text-customGray hover:text-customBlue px-5 py-2 mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3"
            >
              <path
                d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
                fill="currentColor"
              />
              <path
                d="M4.56 11.25L6.63 9.18003C6.78 9.03003 6.85 8.84003 6.85 8.65003C6.85 8.46003 6.78 8.26003 6.63 8.12003C6.34 7.83003 5.86 7.83003 5.57 8.12003L2.22 11.47C1.93 11.76 1.93 12.24 2.22 12.53L5.57 15.88C5.86 16.17 6.34 16.17 6.63 15.88C6.92 15.59 6.92 15.11 6.63 14.82L4.56 12.75H9V11.25H4.56Z"
                fill="currentColor"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>

      <div className="flex justify-between flex-row items-center px-6 pt-1 pb-8 lg:hidden mt-20 w-full bg-white fixed bottom-0">
        {navLinks.map((link, index) => (
          <Link href={link.href} key={index} className="my-3">
            <h3
              className={`p-2 rounded-lg ${
                "/" + pathname === link.href
                  ? "text-customBlue bg-customBlue bg-opacity-10"
                  : "text-customGray"
              } flex items-center font-bold text-base`}
            >
              {link.icon}
            </h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
