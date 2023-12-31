"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ProfilePics from "@/../public/assets/images/ProfilePics.webp";
// import ProfilePics from "@/../public/assets/images/ProfilePics.svg";
import Xpensis from "@/../public/assets/images/Xpensis.svg";
import LottieNotification from "@/../public/assets/lotties/lottieNotification.json";
import Lottie from "../atoms/lottie";
import { useSession } from "next-auth/react";
import { PostData } from "@/lib/outerbase/allCommands";

const notificationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M19.34 14.49L18.34 12.83C18.13 12.46 17.94 11.76 17.94 11.35V8.82C17.94 6.47 16.56 4.44 14.57 3.49C14.05 2.57 13.09 2 11.99 2C10.9 2 9.92 2.59 9.4 3.52C7.45 4.49 6.1 6.5 6.1 8.82V11.35C6.1 11.76 5.91 12.46 5.7 12.82L4.69 14.49C4.29 15.16 4.2 15.9 4.45 16.58C4.69 17.25 5.26 17.77 6 18.02C7.94 18.68 9.98 19 12.02 19C14.06 19 16.1 18.68 18.04 18.03C18.74 17.8 19.28 17.27 19.54 16.58C19.8 15.89 19.73 15.13 19.34 14.49Z"
      fill="currentColor"
    />
    <path
      d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.87999 21.11C9.55999 20.81 9.31999 20.41 9.17999 20C9.30999 20.02 9.43999 20.03 9.57999 20.05C9.80999 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z"
      fill="currentColor"
    />
  </svg>
);

const navLinks = [
  { label: "Dashboard", href: "/" },
  { label: "Bills", href: "bills" },
  { label: "Goals", href: "goals" },
  { label: "Profile", href: "profile" },
];
const Navbar: React.FC = () => {
  const pathname = usePathname().split("/")[1];
  const [isNotification, setIsNotification] = useState(false);
  const [userData, setUserData] = useState<any>([]);

  const { data: session }: any = useSession();
  const fullName = session?.user?.items[0]?.fullName;

  const navTitle = navLinks
    .filter(
      (item) => item.href === pathname || (item.href === "/" && pathname === "")
    )
    .map((item) => item.label);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await PostData({}, "/profile");
        setUserData(profileData[0]);
      } catch {}
    };
    fetchData();
    const fetchDataInterval = setInterval(fetchData, 100000);

    return () => clearInterval(fetchDataInterval);
  }, []);
  return (
    <>
      <div className="justify-between bg-white z-50 p-5 lg:pr-9 w-full hidden lg:flex">
        <h2 className="font-bold text-2xl">{navTitle}</h2>
        <div className="flex">
          <button className="text-2xl mr-4">
            {isNotification ? (
              <div className="w-8 h-8">
                <Lottie lottie={LottieNotification} />
              </div>
            ) : (
              notificationIcon
            )}
          </button>
          <Link href="/profile">
            <div className="flex items-center">
              <div className="h-8 w-8 mr-2">
                <Image
                  src={
                    userData?.profilePicture
                      ? userData?.profilePicture
                      : ProfilePics
                  }
                  width={500}
                  height={500}
                  className="rounded-full w-full h-full"
                  alt="Profile"
                />
              </div>
              <h3 className="text-base font-normal">{fullName}</h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center flex-row z-50 px-6 py-4 lg:hidden w-full bg-white fixed top-0">
        <Link href="/">
          <div>
            <Image
              width={500}
              height={500}
              className="w-full h-full"
              src={Xpensis}
              alt="Logo"
            />
          </div>
        </Link>
        <button className="text-2xl text-gray-950">
          {isNotification ? (
            <div className="w-8 h-8">
              <Lottie lottie={LottieNotification} />
            </div>
          ) : (
            notificationIcon
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
