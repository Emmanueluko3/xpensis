"use client";
import * as React from "react";

interface CardProps {
  title: string;
  price: number;
  duration: string;
  percentage: number;
  variant: string;
}

const arrowUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M6 7C6 7.55 6.45 8 7 8H14.59L5.71 16.88C5.61742 16.9726 5.54398 17.0825 5.49387 17.2035C5.44377 17.3244 5.41798 17.4541 5.41798 17.585C5.41798 17.7159 5.44377 17.8456 5.49387 17.9665C5.54398 18.0875 5.61742 18.1974 5.71 18.29C5.80258 18.3826 5.91249 18.456 6.03345 18.5061C6.15442 18.5562 6.28407 18.582 6.415 18.582C6.54593 18.582 6.67558 18.5562 6.79654 18.5061C6.9175 18.456 7.02742 18.3826 7.12 18.29L16 9.41V17C16 17.55 16.45 18 17 18C17.55 18 18 17.55 18 17V7C18 6.45 17.55 6 17 6H7C6.45 6 6 6.45 6 7Z"
      fill="currentColor"
    />
  </svg>
);

const arrowDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M18 17C18 16.45 17.55 16 17 16H9.41001L18.29 7.12C18.3826 7.02742 18.456 6.91751 18.5061 6.79654C18.5562 6.67558 18.582 6.54593 18.582 6.415C18.582 6.28407 18.5562 6.15442 18.5061 6.03346C18.456 5.91249 18.3826 5.80258 18.29 5.71C18.1974 5.61742 18.0875 5.54398 17.9666 5.49387C17.8456 5.44377 17.7159 5.41798 17.585 5.41798C17.4541 5.41798 17.3244 5.44377 17.2035 5.49387C17.0825 5.54398 16.9726 5.61742 16.88 5.71L8.00001 14.59V7C8.00001 6.45 7.55001 6 7.00001 6C6.45001 6 6.00001 6.45 6.00001 7V17C6.00001 17.55 6.45001 18 7.00001 18H17C17.55 18 18 17.55 18 17Z"
      fill="currentColor"
    />
  </svg>
);

const Card: React.FC<CardProps> = ({
  title,
  price,
  duration,
  percentage,
  variant,
}) => {
  return (
    <div
      style={{ backgroundColor: variant }}
      className={`w-full bg-center bg-no-repeat bg-cardOverlay rounded-lg p-5`}
    >
      <h4 className="text-base text-white font-medium">{title}</h4>
      <h3 className="my-5 text-white text-3xl font-bold">&#8358; {price}</h3>
      <h4 className="flex text-white font-medium text-base">
        From {duration}{" "}
        <span className="font-semibold flex">
          {percentage <= 50 ? arrowDown : arrowUp} {percentage}%
        </span>
      </h4>
    </div>
  );
};

export default Card;
