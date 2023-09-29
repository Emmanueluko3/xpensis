"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "../atoms/progressbar";
import Modal from "../molecules/Modals/modal";
import Switch from "../atoms/switch";
import LottieSuccess from "../../../public/assets/lotties/lottieSuccess.json";
import Lottie from "../atoms/lottie";
import Button from "../atoms/button";
import InputGroup from "../molecules/inputGroup/inputGroup";
import SelectGroup from "../molecules/inputGroup/selectGroup";
import Card from "../molecules/cards/card";
import { PostData } from "@/lib/outerbase/allCommands";
import ModalComponent from "../molecules/Modals/modalComponent";
import DeleteModal from "../molecules/Modals/deleteModal";

const energyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
  >
    <path
      d="M3.09 12.2799H6.18V19.4799C6.18 21.1599 7.09 21.4999 8.2 20.2399L15.77 11.6399C16.7 10.5899 16.31 9.7199 14.9 9.7199H11.81V2.5199C11.81 0.839898 10.9 0.499897 9.79 1.7599L2.22 10.3599C1.3 11.4199 1.69 12.2799 3.09 12.2799Z"
      stroke="#0784C7"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
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

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.293 5.29303C12.4805 5.10556 12.7348 5.00024 13 5.00024C13.2652 5.00024 13.5195 5.10556 13.707 5.29303L17.707 9.29303C17.8945 9.48056 17.9998 9.73487 17.9998 10C17.9998 10.2652 17.8945 10.5195 17.707 10.707L13.707 14.707C13.5184 14.8892 13.2658 14.99 13.0036 14.9877C12.7414 14.9854 12.4906 14.8803 12.3052 14.6948C12.1198 14.5094 12.0146 14.2586 12.0123 13.9964C12.01 13.7342 12.1108 13.4816 12.293 13.293L14.586 11H3C2.73478 11 2.48043 10.8947 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73481 2.10536 9.48046 2.29289 9.29292C2.48043 9.10539 2.73478 9.00003 3 9.00003H14.586L12.293 6.70703C12.1055 6.5195 12.0002 6.26519 12.0002 6.00003C12.0002 5.73487 12.1055 5.48056 12.293 5.29303Z"
      fill="#1E1E1E"
    />
  </svg>
);

const addIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 7C11 6.73478 10.8946 6.48043 10.7071 6.29289C10.5196 6.10536 10.2652 6 10 6C9.73478 6 9.48043 6.10536 9.29289 6.29289C9.10536 6.48043 9 6.73478 9 7V9H7C6.73478 9 6.48043 9.10536 6.29289 9.29289C6.10536 9.48043 6 9.73478 6 10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11H9V13C9 13.2652 9.10536 13.5196 9.29289 13.7071C9.48043 13.8946 9.73478 14 10 14C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13V11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9H11V7Z"
      fill="#0784C7"
    />
  </svg>
);

type SortFunction<T> = (a: T, b: T) => number;

const sortByDate: SortFunction<any> = (a, b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

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

const allCategories = [
  { label: "Electricity", value: "Electricity" },
  { label: "Internet", value: "Internet" },
  { label: "Cooking Gas", value: "Cooking Gas" },
  { label: "Health Insurance", value: "Health Insurance" },
  { label: "Others", value: "Others" },
];

const allBanks = [
  { label: "Access Bank", value: "Access Bank" },
  { label: "EcoBank", value: "EcoBank" },
  { label: "Zenith Bank", value: "Zenith Bank" },
];

const Bill: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [addCategory, setAddCategory] = useState(false);
  const [notifyModal, setNotifyModal] = useState<any>(null);
  const [newBill, setNewBill] = useState(false);
  const [payBill, setPayBill] = useState<any>(null);
  const tabs = ["Recurring Bills", "Non-recurring Bills"];
  const [deleteCategory, setDeleteCategory] = useState<any>(null);

  // fetchedBill
  const [userBills, setUserBills] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await PostData({}, "/bills");
        setUserBills(data?.items);
      } catch (error) {
        console.error("Error in fetchUserBills:", error);
      }
    };
    fetchData();
    const fetchDataInterval = setInterval(fetchData, 5000);
    return () => clearInterval(fetchDataInterval);
  }, []);

  // bill input fields
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [seeAlert, setSeeAlert] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurrenceFrequency, setRecurrenceFrequency] = useState<string>("");
  const [askForPayment, setAskForPayment] = useState("");
  const [nextDueDate, setNextDueDate] = useState<Date | null>(null);
  const [categoryTitle, setCategoryTitle] = useState("");

  const billData = {
    title: categoryTitle === "Others" ? title : categoryTitle,
    limitAmount: amount,
    setAlert: seeAlert === true ? 1 : 0,
    isRecurring: isRecurring === true ? 1 : 0,
    recurrenceFrequency: isRecurring === true ? recurrenceFrequency : null,
    askForPayment: isRecurring === true ? (askForPayment === "Yes" ? 1 : 0) : 0,
    nextDueDate: isRecurring === true ? nextDueDate?.toISOString() : null,
  };

  const createBill = async () => {
    try {
      const post = await PostData(billData, "/createBills");
      console.log("posssss", post.response);
      if (post.items) {
        setTitle("");
        setAmount("");
        setSeeAlert(false);
        setIsRecurring(false);
        setRecurrenceFrequency("");
        setAskForPayment("");
        setNextDueDate(null);
        setCategoryTitle("");
        setNotifyModal({
          lottie: LottieSuccess,
          title: "Successful!",
          subtitle: "A new category has been added",
        });
      }
      setAddCategory(false);
    } catch (error) {
      console.error("Error creating", error);
    }
  };

  const deleteBill = async (id: any) => {
    try {
      const post = await PostData({ billId: id }, "/deleteBill");
      if (post) {
        setNotifyModal({
          lottie: LottieSuccess,
          title: "Successful!",
          subtitle: "Category has been Deleted!",
        });
      }
      setDeleteCategory(null);
    } catch (error) {
      console.error("Error deleting", error);
    }
  };

  console.log("user bills: ", userBills);
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

    // Create an array to hold the grid cells for the calendar
    const calendarGrid: JSX.Element[] = [];

    // Fill in empty grid cells for days before the 1st day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarGrid.push(
        <div key={`empty-${i}`} className="text-gray-100 font-semibold"></div>
      );
    }

    // Fill in grid cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);

      // Highlight the selected date
      const isDateSelected = selectedDate
        ? date.toDateString() === selectedDate.toDateString()
        : false;
      const cellClass = isDateSelected
        ? "bg-blue-500 text-white cursor-pointer"
        : "cursor-pointer";

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

  const PaySingleBill = (
    <div className="p-3 lg:p-5 rounded-lg bg-[#fff] lg:w-[40vw] overflow-x-auto max-h-[90vh] no-scrollbar">
      <div className="flex justify-between pb-3 mb-5 border-b">
        <h2 className="text-2xl text-gray-950 font-bold">Bill</h2>
        <button
          className=" text-customGray hover:text-customBlue"
          onClick={() => setPayBill(null)}
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
        <div className="mb-3">
          <div
            className={`w-full bg-center border-2 border-customBlue bg-no-repeat bg-cardOverlay rounded-lg p-5`}
          >
            <h4 className="text-base text-gray-950 font-medium">
              {payBill?.title}
            </h4>
            <h3 className="my-5 text-gray-950 text-3xl font-bold">
              &#8358; {payBill?.currentAmount?.toLocaleString()}.00 / &#8358;{" "}
              {payBill?.limitAmount?.toLocaleString()}.00
            </h3>
            <div className="mr-auto w-full lg:w-1/2">
              <p className=" text-customGray1 text-xs font-normal mb-2">
                {Math.round(
                  (payBill?.currentAmount / payBill?.limitAmount) * 100
                )}
                /100%
              </p>
              <ProgressBar
                progress={(payBill?.currentAmount / payBill?.limitAmount) * 100}
                addClassName="h-[6px]"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <SelectGroup
            label="Reciepient Bank"
            placeholder="Select"
            options={allBanks.map((item) => item)}
          />
        </div>
        <div className="mb-3">
          <InputGroup
            label="Recipient Account Number"
            placeholder="1234567890"
          />
        </div>
        <div className="mb-3">
          <InputGroup label="Amount" placeholder="1,000" />
        </div>
        <div className="mb-3">
          <InputGroup label="Description" />
        </div>

        <div className="w-full">
          <Button onClick={() => setAddCategory(false)}>Proceed</Button>
        </div>
      </div>
    </div>
  );

  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
    return formattedDate;
  };

  const recurringBills = (
    <>
      {userBills
        .filter((item) => item.isRecurring === 1)
        ?.sort(sortByDate)
        ?.map((item, index) => (
          <div
            key={index}
            className="flex items-center border-b-[0.1px] border-[#D2D2D2] mb-2"
          >
            <div className="py-4 w-full flex justify-between">
              <div className="w-full flex justify-center items-center">
                <div
                  className={`flex justify-center text-2xl items-center w-9 h-9 rounded-full bg-opacity-5 mr-3 bg-customBlue`}
                >
                  {energyIcon}
                </div>
                <div className="mr-auto">
                  <h3 className="text-gray-950 font-normal text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className=" text-customGray1 text-xs font-normal">
                    {formatDate(item.nextDueDate)}
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row justify-between items-end lg:items-center">
                <div className="lg:w-1/2 flex lg:items-center justify-center">
                  <span
                    className={`${
                      item.status === "Paid"
                        ? "bg-customDarkGreen"
                        : "bg-customDarkRed"
                    } bg-opacity-10 px-3 lg:py-1 mb-1 lg:mb-0 rounded-full text-xs`}
                  >
                    {item.currentAmount === item.limitAmount
                      ? "Paid"
                      : "Pending"}
                  </span>
                </div>

                <h3 className="lg:text-base text-sm font-semibold lg:font-bold">
                  &#8358; {item.limitAmount.toLocaleString()}
                </h3>
              </div>
            </div>
            <button
              onClick={() => setDeleteCategory(item)}
              className="ml-5 w-8 h-8 flex p-1 items-center bg-customRed bg-opacity-10 rounded-full"
            >
              {trashIcon}
            </button>
          </div>
        ))}
    </>
  );

  const nonRecurringBills = (
    <>
      {userBills
        ?.filter((item) => item.isRecurring === 0)
        ?.sort(sortByDate)
        ?.map((item, index) => (
          <div
            key={index}
            className="flex items-center border-b-[0.1px] border-[#D2D2D2] mb-2"
          >
            <div
              onClick={() => setPayBill(item)}
              className="py-4 cursor-pointer  w-full flex justify-between"
            >
              <div className="lg:w-[45%] w-[70%] flex justify-center items-center">
                <div
                  className={`flex justify-center text-2xl items-center w-9 h-9 rounded-full bg-opacity-5 mr-3 bg-customBlue`}
                >
                  {energyIcon}
                </div>
                <div className="mr-auto">
                  <h3 className="text-gray-950 font-normal text-sm">
                    {item.title}
                  </h3>
                  <h3 className="text-sm font-semibold lg:hidden">
                    &#8358; {item.currentAmount.toLocaleString()}
                    <span className=" text-xs font-normal">
                      / &#8358;{item.limitAmount.toLocaleString()}
                    </span>
                  </h3>
                </div>
              </div>
              <div className="lg:w-[55%] w-[25%] flex flex-col lg:flex-row justify-between items-end lg:items-center">
                <div className="mr-auto w-full lg:w-1/2">
                  <p className=" text-customGray1 text-xs font-normal mb-2">
                    {Math.round((item.currentAmount / item.limitAmount) * 100)}
                    /100%
                  </p>
                  <ProgressBar
                    progress={(item.currentAmount / item.limitAmount) * 100}
                    addClassName="h-[6px]"
                  />
                </div>

                <h3 className="text-base font-bold hidden lg:block">
                  &#8358; {item.currentAmount.toLocaleString()}
                  <span className=" text-sm font-normal">
                    / &#8358;{item.limitAmount.toLocaleString()}
                  </span>
                </h3>
              </div>
            </div>
            <button
              onClick={() => setDeleteCategory(item)}
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
    setAmount(inputValue);
  };

  const addCategoryForm = (
    <div className="p-3 lg:p-5 rounded-lg bg-[#fff] lg:w-[40vw] overflow-x-auto lg:max-h-[90vh] max-h-[90vh] no-scrollbar">
      <div className="flex justify-between pb-3 mb-5 border-b">
        <h2 className="text-2xl text-gray-950 font-bold">New Category</h2>
        <button
          className=" text-customGray hover:text-customBlue"
          onClick={() => setAddCategory(false)}
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
        <div className="mb-3">
          <SelectGroup
            onChange={(e) => setCategoryTitle(e.target.value)}
            value={categoryTitle}
            placeholder="Select"
            label="Category"
            options={allCategories.map((item) => item)}
          />
        </div>
        {categoryTitle === "Others" && (
          <div className="mb-3">
            <InputGroup
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g Electricity"
              label="Title"
            />
          </div>
        )}
        <div className="mb-3">
          <InputGroup
            type="text"
            value={`₦ ${amount}`}
            onChange={(e) => handleAmountChange(e)}
            placeholder="1,000"
            label="Amount"
          />
        </div>

        <div className="rounded-lg p-3 mb-3 flex justify-between items-center">
          <p className="text-base text-customGray font-normal">Set Alert</p>
          <Switch onChange={() => setSeeAlert(!seeAlert)} checked={seeAlert} />
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
          <>
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
                <button onClick={() => handleMonthChange(1)}>
                  {arrowIcon}
                </button>
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
            <div className="grid grid-flow-row grid-cols-2 gap-2 mb-3">
              <SelectGroup
                onChange={(e) => setRecurrenceFrequency(e.target.value)}
                value={recurrenceFrequency}
                placeholder="Frequency"
                label=""
                options={[
                  { label: "Monthly", value: "Monthly" },
                  { label: "Yearly", value: "Yearly" },
                ]}
              />

              <SelectGroup
                onChange={(e) => setAskForPayment(e.target.value)}
                value={askForPayment}
                placeholder="Ask before payment"
                label=""
                options={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
              />
            </div>
          </>
        )}
        <div className="w-full">
          <Button
            disabled={
              !amount ||
              !categoryTitle ||
              (categoryTitle === "Others" && !title)
                ? true
                : false
            }
            onClick={() => createBill()}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );

  const newBillForm = (
    <div className="p-3 lg:p-5 rounded-lg bg-[#fff] lg:w-[40vw] overflow-x-auto max-h-[90vh] no-scrollbar">
      <div className="flex justify-between pb-3 mb-5 border-b">
        <h2 className="text-2xl text-gray-950 font-bold">New Bill</h2>
        <button
          className=" text-customGray hover:text-customBlue"
          onClick={() => setNewBill(false)}
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
        <div className="mb-3">
          <Card
            title="Balance"
            price={200000}
            duration="Last Month"
            percentage={5}
            variant="#0784C7"
          />
        </div>
        <div className="mb-3">
          <SelectGroup
            label="Reciepient Bank"
            placeholder="Select"
            options={allBanks.map((item) => item)}
          />
        </div>
        <div className="mb-3">
          <InputGroup
            label="Recipient Account Number"
            placeholder="1234567890"
          />
        </div>
        <div className="mb-3">
          <InputGroup label="Amount" placeholder="1,000" />
        </div>
        <div className="mb-3">
          <InputGroup label="Description" />
        </div>

        <div className="w-full">
          <Button onClick={() => setAddCategory(false)}>Proceed</Button>
        </div>
      </div>
    </div>
  );

  const successModal = (
    <div className="p-5 rounded-lg bg-[#fff] lg:w-[40vw] overflow-x-auto no-scrollbar relative flex justify-center items-center flex-col">
      <button
        className="absolute right-5 top-5 text-customGray hover:text-customBlue"
        onClick={() => setAddCategory(false)}
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
      <p className="lg:text-lg text-base text-gray-950 font-bold   mb-3">
        Successful!
      </p>
      <p className="lg:text-lg text-base text-[#444] font-normal mb-6">
        Your transaction was successful
      </p>
      <button
        onClick={() => setAddCategory(false)}
        className="flex justify-center items-center bg-customBlue text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-opacity-80 w-full"
      >
        Done
      </button>
    </div>
  );

  return (
    <div className="rounded-lg bg-[#fff] w-full p-5">
      {deleteCategory && (
        <DeleteModal
          onClose={() => setDeleteCategory(null)}
          onDelete={() => deleteBill(deleteCategory?.billId)}
          title="Delete"
          subtitle="Are you sure you want to delete this category?"
        />
      )}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center justify-between lg:w-auto w-full">
          {tabs.map((item, index) => (
            <button
              key={index}
              onClick={() => setTab(index)}
              className={`w-1/2 border-b-2 p-2 lg:pr-10 lg:pl-5 font-medium lg:text-[15px] text-sm whitespace-nowrap ${
                tab === index
                  ? "text-customBlue border-customBlue"
                  : "text-customGray border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => setNewBill(true)}
          className="hidden lg:block bg-customBlue text-white text-base font-medium py-2 px-4 rounded-lg hover:bg-opacity-80"
        >
          New Bill
        </button>
      </div>
      <p className="mb-5 text-customGray text-sm">
        You can set alert for your expense limit
      </p>
      <div className="w-full mb-6 lg:mb-0">
        {tab === 0 && recurringBills}
        {tab === 1 && nonRecurringBills}
      </div>
      {notifyModal && (
        <ModalComponent
          lottie={notifyModal.lottie}
          title={notifyModal.title}
          subtitle={notifyModal.subtitle}
          onClose={() => setNotifyModal(null)}
        />
      )}
      {addCategory && (
        <Modal
          onClose={() => {
            setAddCategory(false);
          }}
        >
          {addCategoryForm}
        </Modal>
      )}
      {newBill && (
        <Modal
          onClose={() => {
            setNewBill(false);
          }}
        >
          {newBillForm}
        </Modal>
      )}
      {payBill && (
        <Modal
          onClose={() => {
            setPayBill(false);
          }}
        >
          {PaySingleBill}
        </Modal>
      )}
      <button
        onClick={() => setAddCategory(true)}
        className="text-customBlue hover:opacity-80 font-medium mt-3 text-sm lg:text-base mb-5 lg:mb-0 flex items-center"
      >
        <span className="mr-2 h-5 w-5">{addIcon}</span>Add New Category
      </button>

      <div className="lg:hidden w-full">
        <Button onClick={() => setNewBill(true)}>New Bill</Button>
      </div>
    </div>
  );
};

export default Bill;
