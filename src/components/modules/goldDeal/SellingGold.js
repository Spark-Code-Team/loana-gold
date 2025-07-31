'use client'

import Image from "next/image";
import { walletBalance } from "@/service/finance";
import { useEffect, useState } from "react";
import { Dealing, sell_gold } from "@/service/Dealing";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import HomeChart from "../homepage/OnlineChartt";

const SellinGold = () =>{

    const [balance , setBalance] = useState()

    const [sellGold, setSellGold] = useState({
        amount: "",
        cash_amount: "",
      });
    
    const [loading, setLoading] = useState(false);

    const [weHaveData, setWeHaveData] = useState(false);

    const router = useRouter()

    useEffect(()=>{
        const getBalance = async () => {
            const {response , error} = await walletBalance()
            if (response) {
                setBalance(response.data.gold.amount)
                setWeHaveData(true)
            }else{
                console.log(error)
            }
        }
        getBalance()


    },[])

    
  const SendData = async () => {
    
    setLoading(true);

    const { response, error } = await Dealing({
      amount: sellGold.amount,
      cash_amount: sellGold.cash_amount,
    });

    setLoading(false);
  
    if (response) {
      setSellGold ({cash_amount: response.data.toman 
        , amount:response.data.gram
      })
      console.log(response);
      
    } else {
      toast.error("مشکلی پیش آمده")
    }
  };

    const sell = async () => {
      const {response , error} = await sell_gold(sellGold.amount)
      if (response){
        console.log(response)
        router.push('/dashboard/Transaction-dashboard')
      }else{
        toast.error(error.response.data.error || "مشکلی پیش آمده") 
        console.log(error)
      }
    }

    

    return(
        <div className="
        md:w-[912px]
        h-full
        ">
        
            
            <div className="
               h-12 
               flex 
               items-center 
               mt-5
               ">
                <p className="
                 pt-2
                 flex 
                 justify-center
                 items-center
                 min-h-[40px]
                 min-w-[100px]
                 text-lg
                 mr-8
                 ">
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
        
            <div className="
               h-full 
               flex 
               flex-col
               items-center
               my-5
               ">
                <div className="
                w-full
                md:w-[848px]
                ">
                <p className="
                 text-lg
                 text-right
                 md:pb-5
                 ">
                    فروش طلا
                </p>
        
                <input
                    // disabled={sellGold.cash_amount != ""}
                    type="number"
                    value={sellGold.amount}
                    onChange={(e)=>setSellGold({amount: e.target.value , cash_amount: ""})}
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
                    value={sellGold.cash_amount}
                    // disabled={sellGold.amount != ""}
                    type="number"
                    placeholder="مبلغ دریافتی به تومان"
                    onChange={(e)=>setSellGold({cash_amount: e.target.value , amount: ""})}
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
        
                <div className="
                md:w-[848px]  
                md:mt-5
                w-full 
                mt-12
                ">
                    <button className="
                    md:w-[131px] 
                    h-[48px] 
                    w-[29%] 
                    bg-[#D2AB67] 
                    rounded-xl"
                    onClick={()=>{sell()}}> 
                    فروش
                    </button>
                </div>
        
            </div>
        
        </div>
    )
}
export default SellinGold;