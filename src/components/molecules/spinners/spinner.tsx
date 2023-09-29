import React from "react";
import LottieSpinner from "@/../public/assets/lotties/spinner.json";
import Lottie from "@/components/atoms/lottie";

const Spinner: React.FC = () => {
  return (
    <div className="fixed w-full h-full inset-0 z-[70] flex items-center justify-center">
      <div className="absolute inset-0 z-[80] bg-[#fff] backdrop-blur-[1.0px] bg-opacity-50 flex items-center justify-center">
        <Lottie lottie={LottieSpinner} />
      </div>
    </div>
  );
};

export default Spinner;
