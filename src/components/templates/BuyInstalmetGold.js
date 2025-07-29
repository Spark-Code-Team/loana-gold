"use client"

import { useState } from "react";
import DashboardLeft from "../elements/DashboardLeft";
import BuyingGold from "../modules/goldDeal/BuyingGold";
import SellinGold from "../modules/goldDeal/SellingGold";
import { toast } from "react-toastify";



export default function BuyInstalmetGoldPage() {

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
            setTalaState(last => ({...last, gold: last.chash / 7000000}))
        } else {
            const newCash =  talaState.chash * 7000000
            setTalaState(last => ({...last, chash: newCash.toFixed(1)}))
        }
    }

    return (
        <div className="
        w-[912px] 
        h-full
        border 
        border-[#CBCED7] 
        rounded-2xl 
        ">
        <DashboardLeft title=" معامله طلا آب شده" />

            <div className="
                h-12
                w-full
                flex
                flex-row
                items-center
                mt-5
                ">
                    <button className={`
                    w-[101]
                    h-8
                    bg-[#F6F6F6]
                    rounded-xl
                    mx-8
                    text-sm
                    font-bold
                    ${activeTab === "buyingGold"? "bg-slate-300" :"bg-gray-100"}
                    `}
                    onClick={()=> setActiveTab("buyingGold")}
                    > 
                        خرید
                    </button>

                    <button className={`
                    w-[101]
                    h-8
                    bg-[#D1DDF1]
                    rounded-xl
                    md:mx-6
                    text-sm
                    font-bold
                    ${activeTab === "sellingGold" ? "bg-slate-300" :"bg-gray-100"}
                    `}
                    onClick={()=> setActiveTab("sellingGold")}
                    > 
                        فروش
                    </button>

            </div>
            
            <div
                className="
                    px-8
                    mt-1
                "
            >
                <div>
                    <p>
                        سقف خرید طلای آب شده: 10 گرم
                    </p>
                </div>
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
            </div>

        {/* {activeTab === "buyingGold" ? <BuyingGold/>:<SellinGold/>} */}

        </div>
    )
}