"use client";
import { useState } from "react";
import DashboardLeft from "../elements/DashboardLeft";
import BuyingGold from "../modules/goldDeal/BuyingGold";
import SellinGold from "../modules/goldDeal/SellingGold";
import Delivery from "../modules/cashDelivery/Delivery";
import Cash from "../modules/cashDelivery/Cash";

const CashDeliveryPage = () =>{

    const [activeTab , setactiveTab] = useState("buyinggold");


    return(


        <div className="
        w-[912px] 
        h-full
        border 
        border-[#CBCED7] 
        rounded-2xl 
        ">
        <DashboardLeft title=" مخزن طلا قابل استفاده " />

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
                ${activeTab === "delivery" ? "bg-gray-400" : "bg-[#F6F6F6]"}
                `}
                onClick={()=>setactiveTab("delivery")}
                > 
                تحویل فوری
                </button>

                <button className={`
                w-[101]
                h-8
                bg-[#D1DDF1]
                rounded-xl
                md:mx-6
                text-sm
                font-bold
                ${activeTab === "cash" ? "bg-gray-400" : "bg-[#F6F6F6]"}
                `}
                onClick={()=>setactiveTab("cash")}
                > 
                نقد کردن
                </button>

        </div>

        {activeTab === "delivery" ? <Delivery/> : <Cash/>}

        </div>
       
    )
}
export default CashDeliveryPage;