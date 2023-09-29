"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Card from "../molecules/cards/card";
import { PostData } from "@/lib/outerbase/allCommands";

const Finance: React.FC = () => {
  const [financialData, setFinancialData] = useState([]);
  useEffect(() => {
    async function fetchFinancialData() {
      try {
        const data = await PostData({}, "/financialData");
        setFinancialData(data);
      } catch (error) {
        console.error("Error in fetchFinancialData:", error);
      }
    }

    fetchFinancialData();
    const fetchDataInterval = setInterval(fetchFinancialData, 5000);
    return () => clearInterval(fetchDataInterval);
  }, []);
  const financialCategories = [
    {
      duration: "Last Month",
      variant: "#0784C7",
    },
    {
      duration: "Last Month",
      variant: "#3D315B",
    },
    {
      duration: "Last Month",
      variant: "#F75C03",
    },
  ];

  const mergedData: any = financialData.map((item: any, index) => ({
    ...item,
    ...financialCategories[index],
  }));

  return (
    <>
      <div className="lg:grid grid-flow-row lg:grid-cols-3 gap-3 hidden">
        {mergedData.map((item: any, index: any) => (
          <Card
            key={index}
            title={item.title}
            price={item.balance}
            duration={item.duration}
            percentage={
              item?.percentage !== null || undefined ? item?.percentage : 0
            }
            variant={item.variant}
          />
        ))}
      </div>

      <div className="lg:hidden">
        <Swiper
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mergedData?.map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <Card
                title={item.title}
                price={item.balance}
                duration={item.duration}
                percentage={
                  item?.percentage !== null || undefined ? item?.percentage : 0
                }
                variant={item.variant}
              />
              <div className="mt-[15%]"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Finance;
