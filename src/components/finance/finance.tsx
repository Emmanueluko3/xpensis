"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Card from "../molecules/cards/card";

const Finance: React.FC = () => {
  const financialCategories = [
    {
      title: "Balance",
      price: 200000,
      duration: "Last Month",
      percentage: 5,
      variant: "#0784C7",
    },
    {
      title: "Expenses",
      price: 200000,
      duration: "Last Month",
      percentage: 10,
      variant: "#3D315B",
    },
    {
      title: "Savings",
      price: 200000,
      duration: "Last Month",
      percentage: 5,
      variant: "#F75C03",
    },
  ];
  return (
    <>
      <div className="lg:grid grid-flow-row lg:grid-cols-3 gap-3 hidden">
        {financialCategories.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            duration={item.duration}
            percentage={item.percentage}
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
          {financialCategories.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                title={item.title}
                price={item.price}
                duration={item.duration}
                percentage={item.percentage}
                variant={item.variant}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Finance;
