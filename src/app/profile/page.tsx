"use client";

import Navbar from "@/components/navbar/navbar";
import ProfileComponent from "@/components/profile/profile";
import Sidebar from "@/components/sidebar/sidebar";
import { UserProfile } from "@/lib/outerbase/allCommands";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Profile() {
  const [userData, setUserData] = useState([]);
  const { data: session }: any = useSession();

  const userId = session?.user?.items[0]?.userId;
  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const data = await UserProfile(userId?.toString());
        setUserData(data);
      } catch (error) {
        console.error("Error in fetchUserProfile:", error);
      }
    }

    fetchUserProfile();
  }, [userId]);
  return (
    <div className="flex lg:pl-8 lg:px-0 bg-[#fff]">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="bg-[#F9FAFA] h-full p-5 pt-20 pb-24 lg:pb-5 lg:pt-5 w-full lg:pr-9">
          {userData && <ProfileComponent userData={userData} />}
        </div>
      </div>
    </div>
  );
}
