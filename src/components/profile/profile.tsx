"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProfilePics from "@/../public/assets/images/ProfilePics.webp";
import InputGroup from "../molecules/inputGroup/inputGroup";
import SelectGroup from "../molecules/inputGroup/selectGroup";
import Button from "../atoms/button";
import Card from "../molecules/cards/card";
import Switch from "../atoms/switch";
import { signOut } from "next-auth/react";
import { PostData } from "@/lib/outerbase/allCommands";
import TopupModal from "../molecules/Modals/topupModal";
import ModalComponent from "../molecules/Modals/modalComponent";
import LottieSuccess from "../../../public/assets/lotties/lottieSuccess.json";
import LottieError from "@/../public/assets/lotties/Error.json";
import Spinner from "../molecules/spinners/spinner";

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
  const [userData, setUserData] = useState<any>([]);
  const [financialData, setFinancialData] = useState<any>([]);
  const [fullName, setFullName] = useState(userData?.fullName);
  const [email, setEmail] = useState(userData?.email);
  const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber);
  const [country, setCountry] = useState(userData?.country);
  const [state, setState] = useState(userData?.state);
  const [city, setCity] = useState(userData?.city);

  const [profileTab, setProfileTab] = useState("Account Settings");
  const [settingsScreen, setSettingsScreen] = useState(false);
  const profileMenu = ["Account Settings", "Notifications", "Change Password"];
  // Notifications
  const [notificationStates, setNotificationStates] = useState(
    allNotifications.map(() => false)
  );

  // topup
  const [notifyModal, setNotifyModal] = useState<any>(null);
  const [topupAccount, setTopupAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  console.log("notifications are", notificationStates);

  const handleSwitchChange = (index: number) => {
    const newNotificationStates = [...notificationStates];
    newNotificationStates[index] = !newNotificationStates[index];
    setNotificationStates(newNotificationStates);
  };

  const allCountries = [
    { value: "United States", label: "United States" },
    { value: "Ghana", label: "Ghana" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const financialData = await PostData({}, "/financialData");
        setFinancialData(financialData[0]);
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };
    fetchData();

    const fetchDataInterval = setInterval(fetchData, 5000);

    return () => clearInterval(fetchDataInterval);
  }, [userData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await PostData({}, "/profile");
        setUserData(profileData[0]);
        if (userData) {
          setFullName(userData?.fullName);
          setEmail(userData?.email);
          setPhoneNumber(userData?.phoneNumber);
          setCountry(userData?.country);
          setState(userData?.state);
          setCity(userData?.city);
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };
    fetchData();
  }, [profileTab]);

  const handleAmountChange = (e: any) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9.]/g, "");
    const decimalCount = (inputValue.match(/\./g) || []).length;
    if (decimalCount > 1) {
      inputValue = inputValue.slice(0, inputValue.lastIndexOf("."));
    }

    return inputValue;
  };

  const topupBalance = async (topupData: any) => {
    console.log;
    try {
      setIsLoading(true);
      const post = await PostData(topupData, "/fundAccount");
      if (post) {
        setNotifyModal({
          lottie: LottieSuccess,
          title: "Successful!",
          subtitle: "Your account has been credited!",
        });
      }
      setAmount("");
      setTopupAccount(false);
    } catch (error) {
      console.error("Error toping up", error);
      setNotifyModal({
        lottie: LottieError,
        title: "Error!",
        subtitle: "Error Occured!",
      });
      setTopupAccount(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-flow-row grid-cols-5 gap-3">
      {notifyModal && (
        <ModalComponent
          lottie={notifyModal.lottie}
          title={notifyModal.title}
          subtitle={notifyModal.subtitle}
          onClose={() => setNotifyModal(null)}
        />
      )}
      <div
        className={`${
          settingsScreen ? "hidden" : "block"
        } lg:block bg-[#fff] rounded-lg p-5 col-span-5 lg:col-span-2`}
      >
        <div className="flex items-center lg:items-end flex-col lg:flex-row">
          <div className=" w-28 h-28 lg:mr-5 mb-5 lg:mb-0">
            <Image
              src={
                userData?.profilePicture
                  ? userData?.profilePicture
                  : ProfilePics
              }
              width={500}
              height={500}
              className="w-full h-full rounded-lg"
              alt="Profile Picture"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-gray-950 text-lg font-bold">
              {userData?.fullName}
            </h2>
            <p className=" text-gray-800 text-sm">{userData?.email}</p>
          </div>
        </div>
        <div className="my-7">
          <div className="mb-3">
            <Card
              title="Balance"
              price={
                financialData?.balance !== null || undefined
                  ? financialData?.balance
                  : 0
              }
              duration="Last Month"
              percentage={
                financialData?.percentage !== null || undefined
                  ? financialData?.percentage
                  : 0
              }
              variant="#0784C7"
            />
          </div>
          <button
            onClick={() => setTopupAccount(true)}
            className="flex items-center justify-center w-full py-3 px-6 mr-5 text-customBlue border border-customBlue rounded-lg lg:hover:bg-customBlue lg:hover:text-white"
          >
            <span className="mr-2">{plusIcon}</span>Top Up
          </button>
        </div>

        <div className="w-full lg:mb-7 mb-4">
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
        <button
          onClick={async () => await signOut({ redirect: true })}
          className="flex items-center font-bold text-customGray after:text-customBlue py-2 mb-3 lg:hidden"
        >
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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Emmanuel Stephen"
                  type="text"
                />
              </div>
              <div>
                <InputGroup
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  placeholder="emmanueluko90@gmail.com"
                  type="email"
                />
              </div>
              <div>
                <InputGroup
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+2347031982590"
                  type="text"
                />
              </div>
              <div>
                <SelectGroup
                  label="Country"
                  placeholder="Nigeria"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  options={allCountries.map((item) => item)}
                />
              </div>
              <div>
                <SelectGroup
                  label="State"
                  placeholder="Akwa Ibom"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  options={allCountries.map((item) => item)}
                />
              </div>
              <div>
                <SelectGroup
                  label="City"
                  placeholder="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  options={allCountries.map((item) => item)}
                />
              </div>
            </div>
            <div className="flex item-center">
              <button className="py-3 px-6 mr-5 text-customBlue border border-customBlue rounded-lg hover:bg-customBlue hover:text-white">
                Cancel
              </button>
              <div>
                <Button className=" cursor-not-allowed">Save Changes</Button>
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

      {topupAccount && (
        <TopupModal
          btnDisable={!amount ? true : false}
          onClose={() => setTopupAccount(false)}
          onTopup={() =>
            topupBalance({
              title: "Wallet Funding",
              amount: parseInt(amount),
            })
          }
          title="Fund Account"
        >
          <div className="w-full flex flex-col justify-center items-center">
            <div className="mb-3 w-full">
              <Card
                title="Balance"
                price={
                  financialData?.balance !== null || undefined
                    ? financialData?.balance
                    : 0
                }
                duration="Last Month"
                percentage={
                  financialData?.percentage !== null || undefined
                    ? financialData?.percentage
                    : 0
                }
                variant="#0784C7"
              />
            </div>
            <div className="w-full mb-4">
              {" "}
              <InputGroup
                value={`₦ ${amount}`}
                onChange={(e) => setAmount(handleAmountChange(e))}
                label="Amount"
                placeholder="1,000"
                type="text"
              />
            </div>
          </div>
        </TopupModal>
      )}
      {isLoading && <Spinner />}
    </div>
  );
};

export default ProfileComponent;

// const transactions = [
//   { type: "debit", amount: 100, date: "2023-07-10T00:00:00Z" },
//   { type: "credit", amount: 200, date: "2023-08-15T00:00:00Z" },
//   { type: "debit", amount: 100, date: "2023-09-10T00:00:00Z" },
//   { type: "debit", amount: 100, date: "2023-09-10T00:00:00Z" },
//   { type: "credit", amount: 1231445, date: "2023-09-05T00:00:00Z" },
// ];

// let Balance = 0;

// transactions.forEach((transaction) => {
//   if (transaction.type === "debit") {
//     Balance -= transaction.amount;
//   } else if (transaction.type === "credit") {
//     Balance += transaction.amount;
//   }
// });

// const currentDate = new Date();
// const currentMonth = currentDate.getMonth() + 1;
// const currentYear = currentDate.getFullYear();

// // previous month and year
// const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
// const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;

// // Filter transactions for the current month and previous month
// const currentMonthTransactions = transactions.filter((transaction) => {
//   const transactionDate = new Date(transaction.date);
//   const transactionMonth = transactionDate.getMonth() + 1;
//   const transactionYear = transactionDate.getFullYear();

//   return transactionMonth === currentMonth && transactionYear === currentYear;
// });

// const previousMonthTransactions = transactions.filter((transaction) => {
//   const transactionDate = new Date(transaction.date);
//   const transactionMonth = transactionDate.getMonth() + 1;
//   const transactionYear = transactionDate.getFullYear();

//   return (
//     transactionMonth === previousMonth && transactionYear === previousYear
//   );
// });

// // Calculate total savings and expenses for each month
// let currentMonthSavings = 0;
// let currentMonthExpenses = 0;

// currentMonthTransactions.forEach((transaction) => {
//   if (transaction.type === "debit") {
//     currentMonthExpenses += transaction.amount;
//   } else if (transaction.type === "credit") {
//     currentMonthSavings += transaction.amount;
//   }
// });

// let previousMonthSavings = 0;
// let previousMonthExpenses = 0;

// previousMonthTransactions.forEach((transaction) => {
//   if (transaction.type === "debit") {
//     previousMonthExpenses += transaction.amount;
//   } else if (transaction.type === "credit") {
//     previousMonthSavings += transaction.amount;
//   }
// });

// // Calculate the percentage change in savings and expenses
// const savingsPercentageChange = Math.min(
//   100,
//   Math.max(
//     0,
//     ((currentMonthSavings - previousMonthSavings) / previousMonthSavings) *
//       100
//   )
// );
// const expensesPercentageChange = Math.min(
//   100,
//   Math.max(
//     0,
//     ((currentMonthExpenses - previousMonthExpenses) / previousMonthExpenses) *
//       100
//   )
// );

// // balance for each month
// let currentMonthBalance = 0;

// currentMonthTransactions.forEach((transaction) => {
//   if (transaction.type === "debit") {
//     currentMonthBalance -= transaction.amount;
//   } else if (transaction.type === "credit") {
//     currentMonthBalance += transaction.amount;
//   }
// });

// let previousMonthBalance = 0;

// previousMonthTransactions.forEach((transaction) => {
//   if (transaction.type === "debit") {
//     previousMonthBalance -= transaction.amount;
//   } else if (transaction.type === "credit") {
//     previousMonthBalance += transaction.amount;
//   }
// });

// // Calculate the percentage change in balance, clamped between 0% and 100%
// const balancePercentageChange = Math.min(
//   100,
//   Math.max(
//     0,
//     ((currentMonthBalance - previousMonthBalance) /
//       Math.abs(previousMonthBalance)) *
//       100
//   )
// );

// console.log("Overall Total Balance:", Balance);
// console.log("Current Month Savings:", currentMonthSavings);
// console.log("Current Month Expenses:", currentMonthExpenses);
// console.log(
//   "Savings Percentage Change:",
//   savingsPercentageChange.toFixed(2) + "%"
// );
// console.log(
//   "Expenses Percentage Change:",
//   expensesPercentageChange.toFixed(2)
// );
// console.log("Current Month Balance:", currentMonthBalance);
// console.log("Previous Month Balance:", previousMonthBalance);
// console.log(
//   "Balance Percentage Change:",
//   Math.round(balancePercentageChange)
// );
