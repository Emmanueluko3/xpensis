"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProfilePics from "@/../public/assets/images/mee2.jpg";
import InputGroup from "../molecules/inputGroup/inputGroup";
import SelectGroup from "../molecules/inputGroup/selectGroup";
import Button from "../atoms/button";
import Card from "../molecules/cards/card";
import Switch from "../atoms/switch";

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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.33 16.5H13.66"
      stroke="#C41B04"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 12.5H14.5"
      stroke="#C41B04"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      d="M13.85 2.49158C13.7532 2.39457 13.6383 2.3176 13.5117 2.26509C13.3852 2.21258 13.2495 2.18555 13.1125 2.18555C12.9755 2.18555 12.8398 2.21258 12.7133 2.26509C12.5867 2.3176 12.4718 2.39457 12.375 2.49158L5.45 9.41658C5.37275 9.49367 5.31146 9.58524 5.26964 9.68606C5.22782 9.78687 5.2063 9.89494 5.2063 10.0041C5.2063 10.1132 5.22782 10.2213 5.26964 10.3221C5.31146 10.4229 5.37275 10.5145 5.45 10.5916L12.375 17.5166C12.7833 17.9249 13.4417 17.9249 13.85 17.5166C14.2583 17.1082 14.2583 16.4499 13.85 16.0416L7.81667 9.99991L13.8583 3.95824C14.2583 3.55824 14.2583 2.89158 13.85 2.49158Z"
      fill="currentColor"
    />
  </svg>
);

const allCountries = [
  { value: "United States", label: "United States" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "Ghana", label: "Ghana" },
];

const allNotifications = [
  { type: "Push Notifications", description: "Get notification pop-ups" },
  {
    type: "Expenses Alerts",
    description: "Get notified when you exceed 80% of you budget",
  },
  {
    type: "Upcoming Bill",
    description: "Get notified when you have an upcoming bill",
  },
  { type: "Email Notifications", description: "Get notified via email" },
];

const ProfileComponent: React.FC = () => {
  const [profileTab, setProfileTab] = useState("Account Settings");
  const [settingsScreen, setSettingsScreen] = useState(false);
  const profileMenu = ["Account Settings", "Notifications", "Change Password"];
  // Notifications
  const [notificationStates, setNotificationStates] = useState(
    allNotifications.map(() => false)
  );

  const handleSwitchChange = (index: number) => {
    const newNotificationStates = [...notificationStates];
    newNotificationStates[index] = !newNotificationStates[index];
    setNotificationStates(newNotificationStates);
  };

  return (
    <div className="grid grid-flow-row grid-cols-5 gap-3">
      <div
        className={`${
          settingsScreen ? "hidden" : "block"
        } lg:block bg-[#fff] rounded-lg p-5 col-span-5 lg:col-span-2`}
      >
        <div className="flex items-center lg:items-end flex-col lg:flex-row">
          <div className=" w-28 h-28 lg:mr-5 mb-5 lg:mb-0">
            <Image
              src={ProfilePics}
              className="w-full h-full rounded-lg"
              alt="Profile Picture"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start">
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
            <div
              onClick={() => {
                setProfileTab(item);
                setSettingsScreen(true);
              }}
              key={index}
              className={`flex justify-between items-center my-3 cursor-pointer ${
                profileTab === item ? "lg:text-customBlue" : "text-gray-950"
              }`}
            >
              <p className="font-normal">{item}</p>{" "}
              <span className=" rotate-180">{arrowIcon}</span>
            </div>
          ))}
        </div>
        <button className="flex items-center text-customRed hover:opacity-80">
          <span className="mr-2">{trashIcon}</span> Delete Account
        </button>
      </div>
      <div
        className={`${
          settingsScreen ? "block" : "hidden"
        } lg:block bg-[#fff] rounded-lg p-5 col-span-5 lg:col-span-3`}
      >
        {profileTab === "Account Settings" && (
          <div>
            <div className="flex items-center">
              <span
                onClick={() => setSettingsScreen(false)}
                className="lg:hidden block mr-6"
              >
                {arrowIcon}
              </span>
              <h2 className=" font-bold text-lg">Account Settings</h2>
            </div>
            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2  gap-3 my-7">
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
        )}

        {profileTab === "Notifications" && (
          <div>
            <div className="flex items-center">
              <span
                onClick={() => setSettingsScreen(false)}
                className="lg:hidden block mr-6"
              >
                {arrowIcon}
              </span>
              <h2 className=" font-bold text-lg">Notifications</h2>
            </div>

            <div className="my-7">
              {allNotifications.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start p-2 my-5"
                >
                  <div className="w-[80%]">
                    <h3 className=" text-gray-950 text-base font-bold">
                      {item.type}
                    </h3>
                    <p className=" text-customGray text-sm font-normal">
                      {item.description}
                    </p>
                  </div>
                  <Switch
                    checked={notificationStates[index]}
                    onChange={() => handleSwitchChange(index)}
                  />
                </div>
              ))}
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
        )}
        {profileTab === "Change Password" && (
          <div>
            <div className="flex items-center">
              <span
                onClick={() => setSettingsScreen(false)}
                className="lg:hidden block mr-6"
              >
                {arrowIcon}
              </span>
              <h2 className=" font-bold text-lg">Change Password</h2>
            </div>

            <div className="grid grid-flow-row grid-cols-1 gap-3 my-7">
              <div>
                <InputGroup
                  label="Current password"
                  placeholder="Enter your current password"
                  type="text"
                />
              </div>
              <div>
                <InputGroup
                  label="New password"
                  placeholder="Enter your new password"
                  type="text"
                />
              </div>
              <div>
                <InputGroup
                  label="Confirm new password"
                  placeholder="Confirm your new password"
                  type="text"
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
        )}
      </div>
    </div>
  );
};

export default ProfileComponent;
