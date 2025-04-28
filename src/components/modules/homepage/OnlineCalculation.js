"use client";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";

const OnlineCalculation = () => {
    const [param1, setParam1] = useState(0);
    
  /*const [dailyPrice, setDailyPrice] = useState(0);
  useEffect(() => {
    getDailyPrice();
  }, []);
  const getDailyPrice = async () => {
    try {
      const response = await axios.post("https://api.example.com/daily-price",{},{ });
      const data = await response.json();
      setDailyPrice(data.price); 
    } catch (error) {
      console.error("Error fetching daily price:", error);
    }
  };*/

  const Sell = async () => { 
    try {
        let goldWeight = document.getElementById("goldWeight").value;
        let receivedAmount = document.getElementById("receivedAmount").value; 
        const response = await axios.post("https://api.example.com/sell", {goldWeight: goldWeight,receivedAmount: receivedAmount,},{headers: {"Content-Type": "application/json",Authorization: `Bearer ${localStorage.getItem("accessToken")}`,},});
        const data = await response.json();
        console.log(data);
        setParam1(data.price);
    } catch (error) {
        
    }
  }

  return (
    <div className="md:w-1/2 w-full">
      <div
        className="
            md:w-full 
            md:m-auto 
            md:mt-0 
            mt-8 
            font-bold 
            md:text-right 
            text-center 
            md:pr-10 
            pr-0"
      >
        لونا اولین پلتفرم خرید قسطی طلا آب شده
      </div>

      <div
        className="
            md:w-[90%] 
            w-[90%] 
            m-auto 
            mt-10 
            pt-8 
            pb-8 
            pr-4 
            pl-4 
            border-[1.5px] 
            border-[#E1E1E1] 
            rounded-xl
            "
      >
        <div className="w-full md:m-auto md:mt-2 mt-3 flex justify-start gap-x-4 text-sm">
          <button className="md:w-[60px] h-[32px] bg-[#DADADA] rounded-xl w-[20%]">
            خرید
          </button>
          <button className="md:w-[60px] h-[32px] bg-[#F9F9F9] rounded-xl w-[20%]">
            فروش
          </button>
        </div>

        <div className="w-full m-auto md:mt-2 mt-3">
          <input
            id="goldWeight"
            type="text"
            name=""
            className="
                    w-full 
                    md:h-[56px] 
                    rounded-xl 
                    border-[1.5px] 
                    border-[#E1E1E1] 
                    mt-4"
            placeholder="مقدار طلا به سوت"
          />
          <input
          id="receivedAmount"
            type="text"
            name=""
            className="
                    w-full 
                    md:h-[56px] 
                    rounded-xl 
                    border-[1.5px] 
                    border-[#E1E1E1] 
                    mt-4"
            placeholder="مبلغ دریافتی به ریال"
          />

          <div className="w-full flex gap-x-3 items-center mt-6 md:text-base text-sm">
            <Image src="/images/vector.png" alt="" width={26} height={18} />
            <p>قیمت لحظه ای خرید هر گرم طلای 15 عیار: 530000 تومان</p>
          </div>

          <div className="md:w-full md:mt-14 w-full mt-12">
            <button
            onClick={()=>Sell()}
              className="
                        md:w-[131px] 
                        h-[48px] 
                        w-[29%] 
                        bg-[#D2AB67] 
                        rounded-xl"
            >
              خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OnlineCalculation;
