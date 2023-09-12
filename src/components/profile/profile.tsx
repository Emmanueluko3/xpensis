"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProfilePics from "@/../public/assets/images/mee2.jpg";
import InputGroup from "../molecules/inputGroup/inputGroup";
import SelectGroup from "../molecules/inputGroup/selectGroup";
import Button from "../atoms/button";
import Card from "../molecules/cards/card";

const plusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M6 12H18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18V6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const trashIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047"
      stroke="#C41B04"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
      stroke="#C41B04"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.85 9.13965L18.2 19.2096C18.09 20.7796 18 21.9996 15.21 21.9996H8.79C6 21.9996 5.91 20.7796 5.8 19.2096L5.15 9.13965"
      stroke="#C41B04"
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.33 16.5H13.66"
      stroke="#C41B04"
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 12.5H14.5"
      stroke="#C41B04"
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M8.91 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91 4.08008"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const allCountries = [
  { value: "United States", label: "United States" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "Ghana", label: "Ghana" },
];

const ProfileComponent: React.FC = () => {
  const profileMenu = ["Account Settings", "Notifications", "Change Password"];
  return (
    <div className="grid grid-flow-row grid-cols-5 gap-3">
      <div className="bg-[#fff] rounded-lg p-5 col-span-2">
        <div className="flex items-end">
          <div className=" w-28 h-28 mr-5">
            <Image
              src={ProfilePics}
              className="w-full h-full rounded-lg"
              alt="Profile Picture"
            />
          </div>
          <div>
            <h2 className="text-gray-950 text-lg font-bold">
              Emmanuel Stephen
            </h2>
            <p className=" text-gray-800 text-sm">emmanueluko90@gmail.com</p>
          </div>
        </div>
        <div className="my-7">
          <div className="mb-3">
            <Card
              title="Balance"
              price={200000}
              duration="Last Month"
              percentage={5}
              variant="#0784C7"
            />
          </div>
          <button className="flex items-center justify-center w-full py-3 px-6 mr-5 text-customBlue border border-customBlue rounded-lg hover:bg-customBlue hover:text-white">
            <span className="mr-2">{plusIcon}</span>Cancel
          </button>
        </div>

        <div className="w-full mb-7">
          {profileMenu.map((item, index) => (
            <div key={index} className="flex justify-between items-center my-3">
              <p className="font-normal text-gray-950">{item}</p>{" "}
              <span>{arrowIcon}</span>
            </div>
          ))}
        </div>
        <button className="flex items-center text-customRed hover:opacity-80">
          <span className="mr-2">{trashIcon}</span> Delete Account
        </button>
      </div>
      <div className="bg-[#fff] rounded-lg p-5 col-span-3">
        <h2 className=" font-bold text-lg">Account Settings</h2>
        <div className="grid grid-flow-row grid-cols-2 gap-3 my-7">
          <div>
            <InputGroup
              label="Full Name"
              placeholder="Emmanuel Stephen"
              type="text"
            />
          </div>
          <div>
            <InputGroup
              label="Email Address"
              placeholder="emmanueluko90@gmail.com"
              type="email"
            />
          </div>
          <div>
            <InputGroup
              label="Phone Number"
              placeholder="+2347031982590"
              type="text"
            />
          </div>
          <div>
            <SelectGroup
              label="Country"
              placeholder="Nigeria"
              options={allCountries.map((item) => item)}
            />
          </div>
          <div>
            <SelectGroup
              label="State"
              placeholder="Akwa Ibom"
              options={allCountries.map((item) => item)}
            />
          </div>
          <div>
            <SelectGroup
              label="Local Goverment"
              placeholder="Ini"
              options={allCountries.map((item) => item)}
            />
          </div>
        </div>
        <div className="flex item-center">
          <button className="py-3 px-6 mr-5 text-customBlue border border-customBlue rounded-lg hover:bg-customBlue hover:text-white">
            Cancel
          </button>
          <div>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
