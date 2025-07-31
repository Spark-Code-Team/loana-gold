"use client"

import { useState } from "react";
import DashboardLeft from "../elements/DashboardLeft";
import { toast } from "react-toastify";
import Image from "next/image";
import { buy_gold } from "@/service/Dealing";
import HomeChart from "../modules/homepage/OnlineChartt";



export default function GoldArtifactsPage() {

    const [activeTab, setActiveTab] = useState("buyingGold")
    const [talaState, setTalaState] = useState({
        chash: "",
        gold: ""
    })


    const handelInputs = (e, action) => {

        const val = e.target.value

        if (/^\d*$/.test(val)) {
            if(action == "gold") {
                setTalaState({ chash: "", gold: val });
            } else {
                setTalaState({ chash: val, gold: "" });
            }
        } else {
            return
        }
    }

    const handelMoadel = () => {
        if(talaState.chash && talaState.gold) {
            setTalaState({chash: "", gold: ""})
        } else if(talaState.chash == "" && talaState.gold == "") {
            toast.error("هموز هیچ مقداری وارد نکردید")
        } else if(talaState.chash) {
            setTalaState(last => ({...last, gold: ((last.chash - 1200000) / 7000000).toFixed(3)}))
        } else {
            setTalaState(last => ({...last, chash: talaState.gold * 7000000 + 1200000}))
        }
    }


    const handelBuyGold = async () => {

        // if(talaState.gold > 10) {
        //     toast.error("گرم طلا از موجوذی شما بیشتر است")
        //     return
        // }

        // const { response, error } = await buy_gold(talaState.gold)

        // if(response) {
        //     console.log(response)
        toast.success("طلا با موفقیت خریداری شد")
        setTalaState({ chash: "", gold: ""})
        // } else {
        //     console.log(error);
        //     toast.error("مشکلی در خرید طلا پیش آمده")
        // }
    }

    return (
        <div className="
        w-[912px] 
        h-full
        border 
        border-[#CBCED7] 
        rounded-2xl 
        ">
        <DashboardLeft title="خرید قسطی مصنوعات" />

            <div className="
                h-12
                w-full
                flex
                flex-row
                items-center
                mt-5
                ">
                    <button 
                        className="
                            w-[101]
                            h-8
                            bg-[#F6F6F6]
                            rounded-xl
                            mx-8
                            text-sm
                            font-bold
                        "
                    > 
                        خرید
                    </button>
            </div>
            
            <div
                className="
                    px-8
                    mt-1
                "
            >
                {/* <div>
                    <p>
                        سقف خرید طلای آب شده: 10 گرم
                    </p>
                </div> */}
                <div
                    className="
                        my-4
                    "
                >
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={talaState.gold}
                        onChange={(e)=> handelInputs(e, "gold")}
                        placeholder="مقدار طلا به گرم  "
                        className="
                            focus:outline-none 
                            focus:border-[#E1E1E1] 
                            focus:bg-white
                            focus:text-black
                            focus:shadow-lg
                            transition-all
                            focus:ring-black
                            border-[1px] 
                            border-[#E1E1E1] 
                            rounded-xl 
                            md:w-[848px]
                            w-full
                            mb-5
                        "
                    />
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={talaState.chash}
                        onChange={(e) => handelInputs(e, "cash")}
                        placeholder="مبلغ به تومان"
                        className="
                            focus:outline-none 
                            focus:border-[#E1E1E1] 
                            focus:bg-white
                            focus:text-black
                            focus:shadow-lg
                            focus:ring-black
                            border-[1px] 
                            border-[#E1E1E1] 
                            rounded-xl 
                            md:w-[848px]
                            w-full
                            mb-5
                            transition-all
                        "
                    />
                </div>
                <div>
                    <div
                        onClick={() => handelMoadel()}
                        className="
                            md:w-[131px] 
                            h-[48px] 
                            w-[29%] 
                            bg-[#f1ce91] 
                            rounded-xl
                            flex
                            flex-col
                            text-center
                            items-center
                            justify-center
                            transition-all
                            hover:scale-110
                            hover:bg-[#D2AB67]
                            cursor-pointer
                        "
                    >
                        <p>
                            محاسبه
                        </p>
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
                <div>
                    <div
                        onClick={() => handelBuyGold()}
                        className="
                            md:w-[131px] 
                            h-[48px] 
                            w-[29%] 
                            bg-[#f1ce91] 
                            rounded-xl
                            flex
                            flex-col
                            text-center
                            items-center
                            justify-center
                            transition-all
                            hover:scale-110
                            hover:bg-[#D2AB67]
                            cursor-pointer
                            my-4
                        "
                    >
                        <p>
                            خرید
                        </p>
                    </div>
                </div>
            </div>

        {/* {activeTab === "buyingGold" ? <BuyingGold/>:<SellinGold/>} */}

        </div>
    )
}