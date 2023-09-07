"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Xpensis from "@/../public/assets/images/Xpensis.svg";
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import Lottie from "@/components/atoms/lottie";
import LottieSuccess from "@/../public/assets/lotties/lottieSuccess.json";
import LottieNotification from "@/../public/assets/lotties/lottieNotification.json";

const visibleIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
  </svg>
);

const inVisibleIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
  </svg>
);

const FormSection: React.FC = () => {
  const [isUser, setIsUser] = useState(true);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [notificationScreen, setNotificationScreen] = useState<boolean>(false);
  const [enableNotifications, setEnableNotifications] = useState(false);

  const registredModal = (
    <div className="p-5 rounded-lg bg-[#fff] lg:w-[40vw] w-[95%] overflow-x-auto no-scrollbar relative flex justify-center items-center flex-col">
      <div className="flex w-36 h-36">
        <Lottie
          lottie={notificationScreen ? LottieNotification : LottieSuccess}
        />
      </div>
      <p className="text-lg font-bold mb-6">
        {notificationScreen
          ? "Enable Notifications"
          : "Account created successfully!"}
      </p>
      {notificationScreen && (
        <p className="text-center text-sm w-[80%] text-customGray1 mb-4">
          Stick to your budget, get alert on your expenses and reminders of
          upcoming payments.
        </p>
      )}
      {notificationScreen ? (
        <>
          <Button onClick={() => setNotificationScreen(true)}>Turn on</Button>
          <button
            className="w-full py-2 px-6 mt-4 border-2 hover:text-white hover:border-opacity-50 font-bold lg:hover:bg-customBlue lg:hover:bg-opacity-60 border-customBlue text-customBlue rounded-lg"
            onClick={() => setNotificationScreen(false)}
          >
            Not now
          </button>
        </>
      ) : (
        <Button onClick={() => setNotificationScreen(true)}>Next</Button>
      )}
    </div>
  );

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-center flex-row z-50 px-6 py-6 w-full bg-white">
        <div className="h-6">
          <Image
            width={500}
            height={500}
            className="w-full h-full"
            src={Xpensis}
            alt="Logo"
          />
        </div>
      </div>

      <div className="bg-[#F9FAFA] w-full flex items-center justify-center py-14">
        {/* {registredModal} */}
        <div className="lg:p-5 p-3 bg-[#fff] lg:w-[45%] w-[95%] rounded-lg">
          <h2 className="text-customBlue font-bold text-xl lg:text-2xl mb-2">
            {isUser ? "Welcome Back!" : "Create your account."}
          </h2>
          <p className="text-sm text-customGray1 font-normal w-[90%]">
            {isUser ? (
              <>
                Let’s jump back in. Don’t have an account?{" "}
                <button
                  onClick={() => setIsUser(!isUser)}
                  className=" text-customBlue font-semibold"
                >
                  Sign up here
                </button>
              </>
            ) : (
              <>
                Let’s get started. Already have an account?{" "}
                <button
                  onClick={() => setIsUser(!isUser)}
                  className=" text-customBlue font-semibold"
                >
                  Login here
                </button>
              </>
            )}
          </p>

          <div className="grid grid-cols-2 grid-flow-row gap-4 mt-5">
            <div
              className={`w-full  ${
                isUser ? "col-span-2" : "col-span-2 lg:col-span-1"
              }`}
            >
              <p className="mb-2 text-base text-gray-950">Email</p>
              <Input type="email" placeholder="enodivinesamuel@gmail.com" />
            </div>
            {!isUser && (
              <>
                <div className="w-full col-span-2 lg:col-span-1">
                  <p className="mb-2 text-base text-gray-950">Full Name</p>
                  <Input type="email" placeholder="Divine Samuel" />
                </div>
                <div className="w-full col-span-2 lg:col-span-1">
                  <p className="mb-2 text-base text-gray-950">Location</p>
                  <Input type="email" placeholder="Divine Samuel" />
                </div>
              </>
            )}
            <div
              className={`w-full  ${
                isUser ? "col-span-2" : "col-span-2 lg:col-span-1"
              }`}
            >
              <p className="mb-2 text-base text-gray-950">Password</p>
              <div className="relative">
                <Input
                  type={passwordVisible ? "text" : "password"}
                  placeholder={passwordVisible ? "123456" : "******"}
                />
                <button
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-4 top-2"
                >
                  {passwordVisible ? inVisibleIcon : visibleIcon}
                </button>
              </div>
            </div>
            <div className="w-full mb-4 flex col-span-2">
              <div className="h-4 w-4 mr-2">
                <Input
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  type="checkbox"
                  id="checkbox"
                  className="rounded-md"
                />
              </div>
              <label
                htmlFor="checkbox"
                className=" text-customGray1 text-[12px]"
              >
                {isUser ? (
                  "Remember me"
                ) : (
                  <>
                    By signing up, you are creating a PrimePicks account, and
                    you agree to our{" "}
                    <Link href="" className="text-customBlue font-medium">
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link href="" className="text-customBlue font-medium">
                      Privacy Policy
                    </Link>
                    .
                  </>
                )}
              </label>
            </div>
            {isUser ? (
              <div className="col-span-2">
                <Button>Login</Button>
              </div>
            ) : (
              <div className="col-span-2">
                <Button>Sign Up</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
