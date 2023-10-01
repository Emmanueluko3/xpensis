"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "../atoms/progressbar";
import Modal from "../molecules/Modals/modal";
import Switch from "../atoms/switch";
import LottieSuccess from "../../../public/assets/lotties/lottieSuccess.json";
import LottieError from "@/../public/assets/lotties/Error.json";

import Lottie from "../atoms/lottie";
import Image from "next/image";
import GoalImg from "@/../public/assets/images/goal.jpg";
import InputGroup from "../molecules/inputGroup/inputGroup";
import SelectGroup from "../molecules/inputGroup/selectGroup";
import { PostData } from "@/lib/outerbase/allCommands";
import ModalComponent from "../molecules/Modals/modalComponent";
import Button from "../atoms/button";
import DeleteModal from "../molecules/Modals/deleteModal";
import TopupModal from "../molecules/Modals/topupModal";
import Spinner from "../molecules/spinners/spinner";

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.293 5.29303C12.4805 5.10556 12.7348 5.00024 13 5.00024C13.2652 5.00024 13.5195 5.10556 13.707 5.29303L17.707 9.29303C17.8945 9.48056 17.9998 9.73487 17.9998 10C17.9998 10.2652 17.8945 10.5195 17.707 10.707L13.707 14.707C13.5184 14.8892 13.2658 14.99 13.0036 14.9877C12.7414 14.9854 12.4906 14.8803 12.3052 14.6948C12.1198 14.5094 12.0146 14.2586 12.0123 13.9964C12.01 13.7342 12.1108 13.4816 12.293 13.293L14.586 11H3C2.73478 11 2.48043 10.8947 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73481 2.10536 9.48046 2.29289 9.29292C2.48043 9.10539 2.73478 9.00003 3 9.00003H14.586L12.293 6.70703C12.1055 6.5195 12.0002 6.26519 12.0002 6.00003C12.0002 5.73487 12.1055 5.48056 12.293 5.29303Z"
      fill="#1E1E1E"
    />
  </svg>
);
const trashIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
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
const cloudIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="41"
    viewBox="0 0 40 41"
    fill="none"
  >
    <path
      d="M11.6667 27.1665C10.025 27.1684 8.44042 26.5644 7.21645 25.4704C5.99247 24.3764 5.21519 22.8692 5.03352 21.2377C4.85184 19.6061 5.27855 17.9649 6.23189 16.6284C7.18523 15.2919 8.59817 14.3542 10.2 13.9949C9.73654 11.8334 10.1507 9.57627 11.3514 7.72013C12.5521 5.86399 14.441 4.56085 16.6025 4.09738C18.764 3.63392 21.0211 4.04809 22.8773 5.24879C24.7334 6.4495 26.0365 8.33837 26.5 10.4999H26.6667C28.7333 10.4978 30.7269 11.2637 32.2606 12.6488C33.7942 14.034 34.7585 15.9396 34.9662 17.9957C35.1739 20.0518 34.6102 22.1118 33.3845 23.7757C32.1588 25.4395 30.3586 26.5886 28.3333 26.9999M25 22.1665L20 17.1665M20 17.1665L15 22.1665M20 17.1665V37.1665"
      stroke="#9CA0AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const goalsList = [
  {
    title: "iPhone 12",
    amount: 120000,
    date: "15th May, 2023",
    status: "Paid",
  },
  {
    title: "iPhone 12",
    amount: 120000,
    date: "15th May, 2023",
    status: "Pending",
  },
  {
    title: "iPhone 12",
    amount: 120000,
    date: "15th May, 2023",
    status: "Pending",
  },
  {
    title: "iPhone 12",
    amount: 120000,
    date: "15th May, 2023",
    status: "Pending",
  },

  {
    title: "iPhone 12",
    amount: 120000,
    date: "15th May, 2023",
    status: "Pending",
  },
];
const currentDate = new Date();
const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days: string[] = ["Sun", "Mon", "Tue", "Tue", "Thu", "Fri", "Sat"];

const Goal: React.FC = () => {
  const [addGoal, setAddGoal] = useState(false);
  const [goalList, setGoalList] = useState<any>([]);
  const [currentYear, setCurrentYear] = useState<number>(
    currentDate.getFullYear()
  );
  const [currentMonth, setCurrentMonth] = useState<number>(
    currentDate.getMonth()
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setNextDueDate(date);
  };

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurrenceFrequency, setRecurrenceFrequency] = useState("");
  const [nextDueDate, setNextDueDate] = useState<Date | null>(null);
  const [notifyModal, setNotifyModal] = useState<any>(null);
  const [deleteGoal, setDeleteGoal] = useState<any>(null);
  const [topupGoal, setTopupGoal] = useState<any>(null);
  const [topupAmount, setTopupAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [accountBalance, setAccountBalance] = useState("");
  const goalData = {
    title: title,
    goalAmount: amount,
    imageUrl: imageUrl,
    isRecurring: isRecurring === true ? 1 : 0,
    recurrenceFrequency: recurrenceFrequency,
    nextDueDate: isRecurring === true ? nextDueDate?.toISOString() : null,
  };

  const createGoal = async () => {
    try {
      setIsLoading(true);
      const post = await PostData(goalData, "/createGoal");
      if (post) {
        setTitle("");
        setAmount("");

        setIsRecurring(false);
        setRecurrenceFrequency("");

        setNextDueDate(null);
        setAddGoal(false);
        setNotifyModal({
          lottie: LottieSuccess,
          title: "Successful!",
          subtitle: "A new goal has been created.",
        });
      }
    } catch (error) {
      console.error("Error creating", error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteOneGoal = async (id: any) => {
    try {
      setIsLoading(true);
      const post = await PostData({ goalId: id }, "/deleteOneGoal");
      if (post) {
        setNotifyModal({
          lottie: LottieSuccess,
          title: "Successful!",
          subtitle: "Goal has been Deleted!",
        });
      }
      setDeleteGoal(null);
    } catch (error) {
      console.error("Error deleting", error);
    } finally {
      setIsLoading(false);
    }
  };

  const topupOneGoal = async (topupData: any, goalAmount: any) => {
    if (topupData.amount > goalAmount) {
      setNotifyModal({
        lottie: LottieError,
        title: "Error!",
        subtitle: "Input amount is greater than goal amount",
      });
    }
    if (topupData.amount > accountBalance) {
      setNotifyModal({
        lottie: LottieError,
        title: "Error!",
        subtitle: "Insufficient Balance! Please recharge your account",
      });
    } else {
      try {
        setIsLoading(true);
        const post = await PostData(topupData, "/topupOneGoal");
        if (post) {
          setNotifyModal({
            lottie: LottieSuccess,
            title: "Successful!",
            subtitle: "Goal has been Deleted!",
          });
        }
        setTopupGoal(null);
      } catch (error) {
        console.error("Error deleting", error);
        setNotifyModal({
          lottie: LottieError,
          title: "Error!",
          subtitle: "Error Occured!",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchGoals = async () => {
      const goals = await PostData({}, "/goals");
      setGoalList(goals?.items);
    };

    fetchGoals();
    const fetchDataInterval = setInterval(fetchGoals, 7000);
    return () => clearInterval(fetchDataInterval);
  }, []);

  useEffect(() => {
    const fetchAccountBalance = async () => {
      const fetchBalance = await PostData({}, "/financialData");
      setAccountBalance(fetchBalance[0].balance);
    };
    fetchAccountBalance();
  }, [topupGoal]);

  const handleMonthChange = (increment: number) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth + increment;
      if (newMonth < 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      } else if (newMonth > 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
  };
  const renderCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the number of days in the selected month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // Get the day of the week (0 - 6) for the 1st day of the month

    const calendarGrid: JSX.Element[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarGrid.push(
        <div key={`empty-${i}`} className="text-gray-100 font-semibold"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);

      // Highlight the selected date
      const isDateSelected = selectedDate
        ? date.toDateString() === selectedDate.toDateString()
        : false;
      const cellClass = isDateSelected
        ? "bg-blue-500 text-white cursor-pointer"
        : "cursor-pointer lg:hover:bg-blue-500 lg:hover:text-white";

      calendarGrid.push(
        <div
          key={`day-${day}`}
          className={`text-center rounded-lg px-2 font-semibold text-xs  ${cellClass}`}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </div>
      );
    }

    return calendarGrid;
  };

  const allGoals = (
    <>
      {goalList?.map((item: any, index: number) => (
        <div
          key={index}
          className="flex items-center border-b-[0.1px] border-[#D2D2D2] mb-2"
        >
          <div
            onClick={() => setTopupGoal(item)}
            className="py-4 cursor-pointer border-b-[0.1px] border-[#D2D2D2] w-full flex justify-between mb-2"
          >
            <div className="lg:w-[45%] w-[70%] flex justify-center items-center">
              <div
                className={`flex justify-center text-2xl items-center w-9 h-10 rounded-lg bg-opacity-5 mr-3 bg-customBlue border p-1`}
              >
                <Image
                  src={item.imageUrl ? item.imageUrl : GoalImg}
                  alt=""
                  width={500}
                  height={500}
                  className=" w-full h-full"
                />
              </div>
              <div className="mr-auto">
                <h3 className="text-gray-950 font-normal text-sm">
                  {item?.title}
                </h3>
                <h3 className="text-sm font-semibold lg:hidden">
                  &#8358; {item?.goalAmount}
                </h3>
              </div>
            </div>
            <div className="lg:w-[55%] w-[25%] flex flex-col lg:flex-row justify-between items-end lg:items-center">
              <div className="mr-auto w-full lg:w-1/2">
                <p className=" text-customGray1 text-xs font-normal mb-2">
                  {Math.round((item.currentAmount / item.goalAmount) * 100)}
                  /100%
                </p>
                <ProgressBar
                  progress={(item.currentAmount / item.goalAmount) * 100}
                  addClassName="h-[6px]"
                />
              </div>

              <h3 className="text-base font-bold hidden lg:block">
                &#8358; {item?.goalAmount.toLocaleString()}
              </h3>
            </div>
          </div>

          <button
            onClick={() => setDeleteGoal(item)}
            className="ml-5 w-8 h-8 flex p-1 items-center bg-customRed bg-opacity-10 rounded-full"
          >
            {trashIcon}
          </button>
        </div>
      ))}
    </>
  );

  const handleAmountChange = (e: any) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9.]/g, "");
    const decimalCount = (inputValue.match(/\./g) || []).length;
    if (decimalCount > 1) {
      inputValue = inputValue.slice(0, inputValue.lastIndexOf("."));
    }

    return inputValue;
  };

  const addGoalForm = (
    <div className="lg:p-5 p-3 rounded-lg bg-[#fff] lg:w-[40vw] overflow-x-auto lg:max-h-[94vh] max-h-[80vh] no-scrollbar">
      <div className="flex justify-between pb-3 mb-5 border-b">
        <h2 className="text-2xl text-gray-950 font-bold">New Goal</h2>
        <button
          className=" text-customGray hover:text-customBlue"
          onClick={() => setAddGoal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 11.0102L11.6465 10.6567L6.49494 5.50511C6.49492 5.50509 6.4949 5.50507 6.49488 5.50506C6.36362 5.37386 6.18563 5.30016 6.00004 5.30016C5.81447 5.30016 5.6365 5.37384 5.50524 5.505C5.50521 5.50504 5.50517 5.50507 5.50514 5.50511M12 11.0102L5.50514 5.50511M12 11.0102L12.3536 10.6567L17.5052 5.50506L17.5052 5.50511L17.5113 5.49886C17.5759 5.432 17.6531 5.37867 17.7385 5.34199C17.8239 5.3053 17.9158 5.28599 18.0087 5.28518C18.1016 5.28438 18.1938 5.30209 18.2798 5.33728C18.3659 5.37248 18.444 5.42446 18.5098 5.49018C18.5755 5.55591 18.6275 5.63406 18.6627 5.72009C18.6979 5.80612 18.7156 5.8983 18.7148 5.99124C18.7139 6.08418 18.6946 6.17604 18.658 6.26144C18.6213 6.34684 18.5679 6.42408 18.5011 6.48866L18.501 6.4886L18.4949 6.49475L13.3433 11.6463L12.9897 11.9999L13.3433 12.3535L18.4914 17.5016C18.6173 17.6333 18.6868 17.809 18.6853 17.9912C18.6837 18.1748 18.6101 18.3503 18.4803 18.4801C18.3505 18.6099 18.1749 18.6835 17.9914 18.6851C17.8091 18.6867 17.6335 18.6171 17.5017 18.4913L12.3536 13.3431L12 12.9896L11.6465 13.3431L6.49836 18.4913C6.36663 18.6171 6.19098 18.6867 6.0087 18.6851C5.82516 18.6835 5.64959 18.6099 5.51981 18.4801C5.39002 18.3503 5.3164 18.1748 5.31481 17.9912C5.31322 17.809 5.38281 17.6333 5.50867 17.5016L10.6568 12.3535L11.0103 11.9999L10.6568 11.6463L5.50524 6.4948M12 11.0102L5.50524 6.4948M5.50514 5.50511C5.37397 5.63637 5.30029 5.81434 5.30029 5.9999C5.30029 6.18549 5.37399 6.36348 5.50519 6.49475M5.50514 5.50511L5.50519 6.49475M5.50519 6.49475C5.50521 6.49477 5.50523 6.49478 5.50524 6.4948M5.50519 6.49475L5.50524 6.4948"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>
      <div>
        <div className="w-full mb-3">
          <InputGroup
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
            placeholder="E.g vacation"
            type="text"
          />
        </div>

        <div className="w-full mb-3">
          <InputGroup
            value={`₦ ${amount}`}
            onChange={(e) => setAmount(handleAmountChange(e))}
            label="Amount"
            placeholder="1,000"
            type="text"
          />
        </div>

        <div className="p-4 rounded-lg mb-3 w-full border border-dashed border-[#D2D2D2] flex justify-center items-center flex-col">
          <p className="mb-[5px] text-customGray">{cloudIcon}</p>
          <p className="text-customGray text-sm mb-[5px]">
            Click to upload (Optional)
          </p>
          <p className="text-customGray text-xs mb-3">Max. File Size: 10MB</p>
          <button className="py-2 px-3 w-1/2 border-customBlue rounded-lg border text-customBlue lg:hover:text-white lg:hover:bg-customBlue">
            Browse File
          </button>
        </div>

        <div className="rounded-lg p-3 mb-3 flex justify-between items-center">
          <p className="text-base text-customGray font-normal">
            Make Recurring
          </p>
          <Switch
            onChange={() => setIsRecurring(!isRecurring)}
            checked={isRecurring}
          />
        </div>
        {isRecurring && (
          <div className="my-4 p-3 rounded-lg border-2">
            <div className="flex justify-between items-center mb-2">
              <button
                className=" rotate-180"
                onClick={() => handleMonthChange(-1)}
              >
                {arrowIcon}
              </button>
              <div className=" text-gray-950 font-bold text-xs">
                {months[currentMonth]} {currentYear}
              </div>
              <button onClick={() => handleMonthChange(1)}>{arrowIcon}</button>
            </div>
            <div className="grid grid-cols-7 gap-2">
              <div className="col-span-7 grid grid-cols-7 gap-2">
                {days.map((item: string, index: number) => (
                  <div
                    key={index}
                    className="col-span-1 text-center text-customGray1 font-semibold text-xs"
                  >
                    {item}
                  </div>
                ))}
              </div>
              {renderCalendar()}
            </div>
            {/* {selectedDate && (
                <div className="mt-4">
                  <p className="text-lg">{selectedDate.toDateString()}</p>
                </div>
              )} */}
          </div>
        )}
        <div className="mb-3">
          <SelectGroup
            onChange={(e) => setRecurrenceFrequency(e.target.value)}
            value={recurrenceFrequency}
            placeholder="Frequency"
            label=""
            options={[
              { label: "Daily", value: "Daily" },
              { label: "Weekly", value: "Weekly" },
              { label: "Monthly", value: "Monthly" },
              { label: "Yearly", value: "Yearly" },
            ]}
          />
        </div>

        <Button
          disabled={!title || !amount || !recurrenceFrequency ? true : false}
          onClick={() => createGoal()}
        >
          Create
        </Button>
      </div>
    </div>
  );

  const successModal = (
    <div className="p-5 rounded-lg bg-[#fff] lg:w-[40vw] overflow-x-auto no-scrollbar relative flex justify-center items-center flex-col">
      <button
        className="absolute right-5 top-5 text-customGray hover:text-customBlue"
        onClick={() => setAddGoal(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 11.0102L11.6465 10.6567L6.49494 5.50511C6.49492 5.50509 6.4949 5.50507 6.49488 5.50506C6.36362 5.37386 6.18563 5.30016 6.00004 5.30016C5.81447 5.30016 5.6365 5.37384 5.50524 5.505C5.50521 5.50504 5.50517 5.50507 5.50514 5.50511M12 11.0102L5.50514 5.50511M12 11.0102L12.3536 10.6567L17.5052 5.50506L17.5052 5.50511L17.5113 5.49886C17.5759 5.432 17.6531 5.37867 17.7385 5.34199C17.8239 5.3053 17.9158 5.28599 18.0087 5.28518C18.1016 5.28438 18.1938 5.30209 18.2798 5.33728C18.3659 5.37248 18.444 5.42446 18.5098 5.49018C18.5755 5.55591 18.6275 5.63406 18.6627 5.72009C18.6979 5.80612 18.7156 5.8983 18.7148 5.99124C18.7139 6.08418 18.6946 6.17604 18.658 6.26144C18.6213 6.34684 18.5679 6.42408 18.5011 6.48866L18.501 6.4886L18.4949 6.49475L13.3433 11.6463L12.9897 11.9999L13.3433 12.3535L18.4914 17.5016C18.6173 17.6333 18.6868 17.809 18.6853 17.9912C18.6837 18.1748 18.6101 18.3503 18.4803 18.4801C18.3505 18.6099 18.1749 18.6835 17.9914 18.6851C17.8091 18.6867 17.6335 18.6171 17.5017 18.4913L12.3536 13.3431L12 12.9896L11.6465 13.3431L6.49836 18.4913C6.36663 18.6171 6.19098 18.6867 6.0087 18.6851C5.82516 18.6835 5.64959 18.6099 5.51981 18.4801C5.39002 18.3503 5.3164 18.1748 5.31481 17.9912C5.31322 17.809 5.38281 17.6333 5.50867 17.5016L10.6568 12.3535L11.0103 11.9999L10.6568 11.6463L5.50524 6.4948M12 11.0102L5.50524 6.4948M5.50514 5.50511C5.37397 5.63637 5.30029 5.81434 5.30029 5.9999C5.30029 6.18549 5.37399 6.36348 5.50519 6.49475M5.50514 5.50511L5.50519 6.49475M5.50519 6.49475C5.50521 6.49477 5.50523 6.49478 5.50524 6.4948M5.50519 6.49475L5.50524 6.4948"
            fill="currentColor"
            stroke="currentColor"
          />
        </svg>
      </button>
      <div className="flex w-36 h-36">
        <Lottie lottie={LottieSuccess} />
      </div>
      <p className="lg:text-lg text-base font-bold mb-3">Successful!</p>
      <p className="lg:text-lg text-base font-normal mb-6">
        A new goal has been created.
      </p>
      <button
        onClick={() => setAddGoal(false)}
        className="flex justify-center items-center bg-customBlue text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-opacity-80 w-full"
      >
        Done
      </button>
    </div>
  );

  const handleCloseModal = () => {
    setAddGoal(false);
  };

  return (
    <div className="rounded-lg bg-[#fff] w-full p-5">
      <div className="flex justify-between  mb-4">
        <p className="mb-5 text-customGray text-sm lg:w-1/2">
          Set and achieve your financial goals, plan for a more secure future.
        </p>
        <button
          onClick={() => setAddGoal(true)}
          className="hidden lg:flex h-fit bg-customBlue text-white text-base font-medium py-2 px-4 rounded-lg hover:bg-opacity-80"
        >
          + New Goal
        </button>
      </div>

      <div className="w-full mb-6 lg:mb-0">{allGoals}</div>

      {notifyModal && (
        <ModalComponent
          lottie={notifyModal.lottie}
          title={notifyModal.title}
          subtitle={notifyModal.subtitle}
          onClose={() => setNotifyModal(null)}
        />
      )}
      {deleteGoal && (
        <DeleteModal
          onClose={() => setDeleteGoal(null)}
          onDelete={() => deleteOneGoal(deleteGoal?.goalId)}
          title="Delete"
          subtitle="Are you sure you want to delete this Goal?"
        />
      )}
      {topupGoal && (
        <TopupModal
          btnDisable={!topupAmount ? true : false}
          onClose={() => setTopupGoal(null)}
          onTopup={() =>
            topupOneGoal(
              {
                title: topupGoal?.title,
                amount: parseInt(topupAmount),
                goalId: topupGoal?.goalId,
              },
              topupGoal?.goalAmount
            )
          }
          title={topupGoal?.title}
        >
          <div className="w-full flex flex-col justify-center items-center">
            <div className="rounded-lg h-36 w-36 border p-2">
              <Image
                src={topupGoal?.imageUrl ? topupGoal.imageUrl : GoalImg}
                width={500}
                height={500}
                className="w-full h-full rounded-lg"
                alt={topupGoal?.title}
              />
            </div>
            <div className="my-3 w-1/2 flex justify-center items-center flex-col">
              <p className=" text-customGray1 text-xs font-normal mb-2">
                {Math.round(
                  (topupGoal.currentAmount / topupGoal.goalAmount) * 100
                )}
                /100%
              </p>
              <ProgressBar
                progress={
                  (topupGoal.currentAmount / topupGoal.goalAmount) * 100
                }
                addClassName="h-[6px]"
              />
            </div>
            <h3 className="text-sm lg:text-base font-semibold">
              &#8358; {topupGoal?.currentAmount}.00{" "}
              <span className="font-normal">
                / &#8358;{topupGoal?.goalAmount}.00
              </span>
            </h3>
            <div className="w-full mb-4">
              {" "}
              <InputGroup
                value={`₦ ${topupAmount}`}
                onChange={(e) => setTopupAmount(handleAmountChange(e))}
                label="Amount"
                placeholder="1,000"
                type="text"
              />
            </div>
          </div>
        </TopupModal>
      )}
      {addGoal ? <Modal onClose={handleCloseModal}>{addGoalForm}</Modal> : ""}
      <button
        onClick={() => setAddGoal(true)}
        className="lg:hidden flex justify-center items-center bg-customBlue text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-opacity-80 w-full"
      >
        New Goal
      </button>
      {isLoading && <Spinner />}
    </div>
  );
};

export default Goal;
