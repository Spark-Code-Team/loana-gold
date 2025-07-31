"use client";

import { buy_gold, Dealing } from "@/service/Dealing";
import { walletBalance } from "@/service/finance";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import HomeChart from "../homepage/OnlineChartt";

const BuyingGold = () => {

const [balance, setBalance] = useState()

const [buyGold, setBuyGold] = useState({
    amount: "",
    cash_amount: "",
  });

const router = useRouter()

  const [loading, setLoading] = useState(false);
  const [weHaveData, setWeHaveData] = useState(false);


  useEffect(() => {
    const getBalance = async () => {
      const {response , error} = await walletBalance()
      if(response){
        setBalance(response.data.cash.amount)
        setWeHaveData(true)
      }else{
        console.log(error)
      }
      }
      getBalance()
    } , [])
  

  const SendData = async () => {
    
    setLoading(true);

    const { response, error } = await Dealing({
      amount: buyGold.amount,
      cash_amount: buyGold.cash_amount,
    });

    setLoading(false);
  
    if (response) {
      setBuyGold ({cash_amount: response.data.toman 
        , amount:response.data.gram
      })
      console.log(response);
      
    } else {
      toast.error("مشکلی پیش آمده")
    }
  };

  const buy = async () => {
    const {response , error} = await buy_gold(buyGold.amount)
    if (response){
      console.log(response)
      router.push('/dashboard/Transaction-dashboard')
    }else{
      toast.error(error.response?.data.detail || "مشکلی پیش آمده", { 
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }) 
      console.log(error)
    }
  }
   

  return (
    <div
      className="
        md:w-[912px]
        h-full
        "
    >
      <div
        className="
               h-12 
               flex 
               items-center 
               mt-5
               "
      >
        <p
          className="
                 pt-2
                 flex 
                 justify-center
                 items-center
                 min-h-[40px]
                 min-w-[100px]
                 text-lg
                 mr-8
                 "
        >
           موجودی شما:{weHaveData?<> {balance} تومان</>:<ThreeDots
                        visible={true}
                        top="5"
                        height="10"
                        width="80"
                        color="primary"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />}
        </p>
      </div>

      <div
        className="
               h-full 
               flex 
               flex-col
               items-center
               my-5
               "
      >
        <div
          className="
                w-full
                md:w-[848px]
                "
        >
          <p
            className="
                 text-lg
                 text-right
                 md:pb-5
                 "
          >
            خرید طلا
          </p>

          <input
            
            // disabled={buyGold.cash_amount != ""}
            type="number"
            value={buyGold.amount}
            onChange={(e)=>setBuyGold({amount: e.target.value , cash_amount: ""})}
            placeholder="مقدار طلا به گرم  "
            className="
                     focus:outline-none 
                     focus:border-[#E1E1E1] 
                     focus:ring-0
                     border-[1px] 
                     border-[#E1E1E1] 
                     rounded-xl 
                     md:w-[848px]
                     w-full
                     mb-5
                     "
          />
        </div>

        <input
          value={buyGold.cash_amount}
          // disabled={buyGold.amount != ""}
          type="number"
          placeholder="مبلغ دریافتی به تومان"
          onChange={(e)=>setBuyGold({cash_amount: e.target.value , amount: ""})}
          className="
                     focus:outline-none 
                     focus:border-[#E1E1E1] 
                     focus:ring-0
                     border-[1px] 
                     border-[#E1E1E1] 
                     rounded-xl 
                     md:w-[848px]
                     w-full
                     p-2
                     "/>

                    <div className="
                    md:w-[848px]
                     w-full
                     md:mt-12
                    ">
                    <div  className="
                    md:w-[131px] 
                    h-[48px] 
                    w-[29%] 
                    bg-[#D2AB67] 
                    rounded-xl
                    flex
                    flex-col
                    ">
                          <button
                        className="pt-2 flex justify-center items-center min-h-[40px] min-w-[100px]"
                        onClick={()=> SendData()}>
                        {/* محاسبه */}
                        {loading ? 
                        <ThreeDots
                        visible={true}
                        top="5"
                        height="10"
                        width="80"
                        color="#ffffff"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />: 'محاسبه'
                    }
                        </button>
                    <div className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    ">

                  </div>
       

                  </div>
                  </div>
                <div
                    className="
                        md:w-[848px] 
                        w-full 
                        flex 
                        flex-col
                        gap-x-3 
                        items-center 
                        mt-6 
                        md:text-base 
                        text-sm
                        gap-2
                    "
                >
                    <div
                        className="
                            w-full
                            h-full
                            relative
                        "
                    >
                        <HomeChart />
                    </div>
                    <div
                        className="
                            flex
                            gap-2
                        "
                    >
                        <Image src="/images/vector.png" alt="vector" width={26} height={18} />
                        <p>قیمت لحظه ای خرید هر گرم طلای 18 عیار: 7,140,000 تومان</p>
                    </div>
                </div>

        <div
          className="
                md:w-[848px]  
                md:mt-5
                w-full 
                mt-12
                "
        >
          <button
            className="
                    md:w-[131px] 
                    h-[48px] 
                    w-[29%] 
                    bg-[#D2AB67] 
                    rounded-xl"
            onClick={()=>{
              buy()
            }}
          >
          خرید
          </button>
        </div>
      </div>
    </div>
  );
};
export default BuyingGold;
